import { readFile, writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { existsSync } from "fs";

const IMAGES_JSON = path.join(process.cwd(), "public", "data", "images.json");

export async function GET() {
  try {
    if (!existsSync(IMAGES_JSON)) {
      return NextResponse.json({});
    }
    const data = await readFile(IMAGES_JSON, "utf-8");
    return NextResponse.json(JSON.parse(data), {
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    });
  } catch (err: any) {
    console.error("GET images config error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    await writeFile(IMAGES_JSON, JSON.stringify(body, null, 2));
    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("PUT images config error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
