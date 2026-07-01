import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { list, put } from "@vercel/blob";
import { readFile, writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { existsSync, mkdirSync } from "fs";

// @vercel/blob/client is server-safe and uses the read-write token to generate
// short-lived client upload tokens. The actual file is uploaded directly from
// the browser to Vercel Blob, bypassing the Vercel Function payload limit.

const CONFIG_BLOB_PATH = "config/images.json";
const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads");
const DATA_DIR = path.join(process.cwd(), "public", "data");
const IMAGES_JSON = path.join(DATA_DIR, "images.json");

function isVercel() {
  return !!(process.env.VERCEL || process.env.VERCEL_ENV || process.env.VERCEL_URL || process.env.VERCEL_REGION);
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
      allowOverwrite: true,
    });
  } else {
    ensureLocalDirs();
    await writeFile(IMAGES_JSON, JSON.stringify(data, null, 2));
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as HandleUploadBody;

    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname) => {
        // Basic validation
        if (!pathname) throw new Error("Missing pathname");
        return {
          allowedContentTypes: ["image/jpeg", "image/png", "image/webp", "image/gif", "image/svg+xml"],
          addRandomSuffix: true,
          tokenPayload: JSON.stringify({ key: pathname }),
        };
      },
      onUploadCompleted: async ({ blob, tokenPayload }) => {
        const { key } = JSON.parse(tokenPayload || "{}");
        if (!key) {
          console.error("Missing key in upload token payload");
          return;
        }
        try {
          const existing = await readConfigFromBlob();
          const fallback = await readStaticFallback();
          const imagesData = { ...fallback, ...(existing ?? {}) };
          imagesData[key] = blob.url;
          await writeConfig(imagesData);
          console.log(`Saved ${key} -> ${blob.url}`);
        } catch (err: any) {
          console.error("Failed to save config after upload:", err);
          throw new Error("Could not save uploaded image config");
        }
      },
    });

    return NextResponse.json(jsonResponse);
  } catch (error) {
    console.error("Upload route error:", error);
    return NextResponse.json({ error: (error as Error).message }, { status: 400 });
  }
}
