import { list, put } from "@vercel/blob";
import { readFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { existsSync } from "fs";

const CONFIG_BLOB_PATH = "config/images.json";
const IMAGES_JSON = path.join(process.cwd(), "public", "data", "images.json");

function getToken() {
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) throw new Error("BLOB_READ_WRITE_TOKEN is not configured");
  return token;
}

async function readStaticFallback(): Promise<Record<string, string>> {
  if (!existsSync(IMAGES_JSON)) return {};
  const text = await readFile(IMAGES_JSON, "utf-8");
  return JSON.parse(text);
}

async function getConfigBlobUrl(): Promise<string | null> {
  const token = getToken();
  const { blobs } = await list({ prefix: CONFIG_BLOB_PATH, token });
  return blobs.find((b) => b.pathname === CONFIG_BLOB_PATH)?.url ?? null;
}

async function readConfigFromBlob(): Promise<Record<string, string> | null> {
  const url = await getConfigBlobUrl();
  if (!url) return null;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) return null;
  return (await res.json()) as Record<string, string>;
}

async function getMergedConfig(): Promise<Record<string, string>> {
  const fallback = await readStaticFallback();
  const blobConfig = await readConfigFromBlob();
  return { ...fallback, ...(blobConfig ?? {}) };
}

export async function GET() {
  try {
    const config = await getMergedConfig();
    return NextResponse.json(config, {
      headers: { "Cache-Control": "no-store, max-age=0" },
    });
  } catch (err: any) {
    console.error("GET images config error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const token = getToken();

    // Merge with existing blob config so we don't lose other keys
    const existing = await readConfigFromBlob();
    const merged = { ...(existing ?? {}), ...body };

    const blob = await put(CONFIG_BLOB_PATH, JSON.stringify(merged, null, 2), {
      access: "public",
      contentType: "application/json",
      token,
      allowOverwrite: true,
    });

    return NextResponse.json({ ok: true, url: blob.url });
  } catch (err: any) {
    console.error("PUT images config error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
