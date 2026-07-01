import { writeFile, readFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { existsSync, mkdirSync } from "fs";

export const dynamic = "force-static";

const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads");
const DATA_DIR = path.join(process.cwd(), "public", "data");
const IMAGES_JSON = path.join(DATA_DIR, "images.json");

function ensureDirs() {
  if (!existsSync(UPLOAD_DIR)) mkdirSync(UPLOAD_DIR, { recursive: true });
  if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true });
}

async function readImagesJson(): Promise<Record<string, string>> {
  if (!existsSync(IMAGES_JSON)) return {};
  const text = await readFile(IMAGES_JSON, "utf-8");
  return JSON.parse(text);
}

async function writeImagesJson(data: Record<string, string>) {
  await writeFile(IMAGES_JSON, JSON.stringify(data, null, 2));
}

export async function POST(req: NextRequest) {
  try {
    ensureDirs();

    const form = await req.formData();
    const file = form.get("file") as File | null;
    const key = form.get("key") as string | null;

    if (!file || !key) {
      return NextResponse.json({ error: "Missing file or key" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const ext = path.extname(file.name).toLowerCase() || ".jpg";
    const safeKey = key.replace(/[^a-zA-Z0-9_-]/g, "");
    const filename = `${safeKey}-${Date.now()}${ext}`;
    const filePath = path.join(UPLOAD_DIR, filename);

    await writeFile(filePath, buffer);

    const imageUrl = `/uploads/${filename}`;
    const imagesData = await readImagesJson();
    imagesData[key] = imageUrl;
    await writeImagesJson(imagesData);

    return NextResponse.json({ ok: true, url: imageUrl, key });
  } catch (err: any) {
    console.error("Upload error:", err);
    return NextResponse.json({ error: err.message || "Upload failed" }, { status: 500 });
  }
}
