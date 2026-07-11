/**
 * Helpers for merging static image defaults with runtime/admin (Blob) overrides.
 * Prevents stale team-*.svg placeholders from wiping real portrait photos.
 */

const PLACEHOLDER_SVG_RE = /\/team-[^/]+\.svg$/i;

/** Known mis-keyed Blob uploads that should map onto canonical image keys */
const ALIAS_KEYS: Record<string, string> = {
  "MekonnenAbotePhoto.png": "mekonnenAbote",
  MekonnenAbotePhoto: "mekonnenAbote",
};

export function isPlaceholderImage(url: string | null | undefined): boolean {
  if (!url || typeof url !== "string") return true;
  const trimmed = url.trim();
  if (!trimmed) return true;
  return PLACEHOLDER_SVG_RE.test(trimmed) || trimmed.endsWith("/team-placeholder.svg");
}

export function isUsableImageUrl(url: string | null | undefined): boolean {
  return typeof url === "string" && url.trim().length > 0 && !isPlaceholderImage(url);
}

/**
 * Merge static defaults with runtime/blob config.
 * Real photos always win over placeholder SVGs.
 */
export function mergeImageConfig(
  fallback: Record<string, string>,
  runtime: Record<string, string> | null | undefined
): Record<string, string> {
  const merged: Record<string, string> = { ...fallback };
  if (!runtime || typeof runtime !== "object") return merged;

  // Ignore error payloads from the API
  if ("error" in runtime && Object.keys(runtime).length === 1) return merged;

  for (const [rawKey, value] of Object.entries(runtime)) {
    if (typeof value !== "string" || !value.trim()) continue;

    const key = ALIAS_KEYS[rawKey] ?? rawKey;

    // Don't let stale placeholder SVGs clobber a real static/default photo
    if (isPlaceholderImage(value) && isUsableImageUrl(merged[key])) {
      continue;
    }

    // Prefer real uploads over existing placeholders (or fill missing keys)
    if (isUsableImageUrl(value) || !isUsableImageUrl(merged[key])) {
      merged[key] = value;
    }
  }

  return merged;
}

/** Resolve a single image key with fallback, ignoring placeholders when better exists */
export function resolveImageUrl(
  key: string,
  runtime: Record<string, string> | null | undefined,
  fallback: Record<string, string>
): string {
  const runtimeVal = runtime?.[key];
  const fallbackVal = fallback[key] ?? "";

  if (isUsableImageUrl(runtimeVal)) return runtimeVal as string;
  return fallbackVal;
}
