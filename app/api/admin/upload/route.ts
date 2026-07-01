import { list, put } from "@vercel/blob";
import { readFile, writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { existsSync, mkdirSync } from "fs";

const CONFIG_BLOB_PATH = "config/images.json";
const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads");
const DATA_DIR = path.join(process.cwd(), "public", "data");
const IMAGES_JSON = path.join(DATA_DIR, "images.json");

function isVercel() {
  return !!(
    process.env.VERCEL ||
    process.env.VERCEL_ENV ||
    process.env.VERCEL_URL ||
    process.env.VERCEL_REGION
  );
}

function getToken() {
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) throw new Error("BLOB_READ_WRITE_TOKEN is not configured");
  return token;
}

function ensureLocalDirs() {
  if (!existsSync(UPLOAD_DIR)) mkdirSync(UPLOAD_DIR, { recursive: true });
  if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true });
}

async function readStaticFallback(): Promise<Record<string, string>> {
  if (!existsSync(IMAGES_JSON)) return {};
  const text = await readFile(IMAGES_JSON, "utf-8");
  return JSON.parse(text);
}

async function readConfigFromBlob(): Promise<Record<string, string> | null> {
  const token = getToken();
  const { blobs } = await list({ prefix: CONFIG_BLOB_PATH, token });
  const url = blobs.find((b) => b.pathname === CONFIG_BLOB_PATH)?.url;
  if (!url) return null;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) return null;
  return (await res.json()) as Record<string, string>;
}

async function writeConfig(data: Record<string, string>) {
  if (isVercel()) {
    const token = getToken();
    const existing = await readConfigFromBlob();
    const merged = { ...(existing ?? {}), ...data };
    await put(CONFIG_BLOB_PATH, JSON.stringify(merged, null, 2), {
      access: "public",
      contentType: "application/json",
      token,
    });
  } else {
    ensureLocalDirs();
    await writeFile(IMAGES_JSON, JSON.stringify(data, null, 2));
  }
}

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();
    const file = form.get("file") as File | null;
    const key = form.get("key") as string | null;

    if (!file || !key) {
      return NextResponse.json({ error: "Missing file or key" }, { status: 400 });
    }

    const blobToken = process.env.BLOB_READ_WRITE_TOKEN;
    let imageUrl: string;

    if (blobToken || isVercel()) {
      // Production / Vercel: must use Vercel Blob (filesystem is read-only)
      if (!blobToken) {
        return NextResponse.json(
          { error: "BLOB_READ_WRITE_TOKEN is not configured for this Vercel environment" },
          { status: 500 }
        );
      }
      const blob = await put(file.name, file, {
        access: "public",
        token: blobToken,
      });
      imageUrl = blob.url;
    } else {
      // Local dev: fallback to local filesystem
      ensureLocalDirs();
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const ext = path.extname(file.name).toLowerCase() || ".jpg";
      const safeKey = key.replace(/[^a-zA-Z0-9_-]/g, "");
      const filename = `${safeKey}-${Date.now()}${ext}`;
      const filePath = path.join(UPLOAD_DIR, filename);
      await writeFile(filePath, buffer);
      imageUrl = `/uploads/${filename}`;
    }

    const existing = await readConfigFromBlob();
    const fallback = await readStaticFallback();
    const imagesData = { ...fallback, ...(existing ?? {}) };
    imagesData[key] = imageUrl;
    await writeConfig(imagesData);

    return NextResponse.json({ ok: true, url: imageUrl, key });
  } catch (err: any) {
    console.error("Upload error:", err);
    return NextResponse.json({ error: err.message || "Upload failed" }, { status: 500 });
  }
}
