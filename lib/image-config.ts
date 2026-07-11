/**
 * Helpers for merging static image defaults with runtime/admin (Blob) overrides.
 * Prevents stale team-*.svg placeholders (and mis-keyed legacy Blob uploads)
 * from wiping real portrait photos shipped in /public.
 */

const PLACEHOLDER_SVG_RE = /\/team-[^/]+\.svg$/i;

/**
 * Canonical team keys whose current /public assets must be used.
 * Prevents legacy mis-keyed Blob entries (e.g. "MekonnenAbotePhoto.png")
 * from replacing the intended portraits.
 */
const PINNED_LOCAL_TEAM_KEYS = new Set(["assefaFoche", "mekonnenAbote"]);

export function isPlaceholderImage(url: string | null | undefined): boolean {
  if (!url || typeof url !== "string") return true;
  const trimmed = url.trim();
  if (!trimmed) return true;
  return PLACEHOLDER_SVG_RE.test(trimmed) || trimmed.endsWith("/team-placeholder.svg");
}

export function isUsableImageUrl(url: string | null | undefined): boolean {
  return typeof url === "string" && url.trim().length > 0 && !isPlaceholderImage(url);
}

/** Local site asset (e.g. /mekonnen-abote.jpg), not a remote Blob/CDN URL */
export function isLocalPublicAsset(url: string | null | undefined): boolean {
  return typeof url === "string" && url.startsWith("/") && !url.startsWith("//");
}

function isCanonicalImageKey(key: string, fallback: Record<string, string>): boolean {
  if (key in fallback) return true;
  // Allow new canonical camelCase keys; reject filenames / legacy labels
  if (key.includes(".") || key.includes(" ") || key.includes("%")) return false;
  return /^[a-z][a-zA-Z0-9]*$/.test(key);
}

/**
 * Merge static defaults with runtime/blob config.
 * Real photos always win over placeholder SVGs.
 * Pinned local team photos win over legacy remote Blob uploads.
 */
export function mergeImageConfig(
  fallback: Record<string, string>,
  runtime: Record<string, string> | null | undefined
): Record<string, string> {
  const merged: Record<string, string> = { ...fallback };
  if (!runtime || typeof runtime !== "object") return merged;

  // Ignore error payloads from the API
  if ("error" in runtime && Object.keys(runtime).length === 1) return merged;

  for (const [key, value] of Object.entries(runtime)) {
    if (!isCanonicalImageKey(key, fallback)) continue;
    if (typeof value !== "string" || !value.trim()) continue;

    // Don't let stale placeholder SVGs clobber a real static/default photo
    if (isPlaceholderImage(value) && isUsableImageUrl(merged[key])) {
      continue;
    }

    // Keep newly shipped local portraits over old remote Blob photos for pinned keys
    if (
      PINNED_LOCAL_TEAM_KEYS.has(key) &&
      isLocalPublicAsset(merged[key]) &&
      isUsableImageUrl(merged[key]) &&
      !isLocalPublicAsset(value)
    ) {
      continue;
    }

    // Prefer real uploads over existing placeholders (or fill missing keys)
    if (isUsableImageUrl(value) || !isUsableImageUrl(merged[key])) {
      merged[key] = value;
    }
  }

  // Force pinned local portraits from the shipped /public assets
  for (const key of PINNED_LOCAL_TEAM_KEYS) {
    const local = fallback[key];
    if (isLocalPublicAsset(local) && isUsableImageUrl(local)) {
      merged[key] = local;
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
  const fallbackVal = fallback[key] ?? "";

  // Pinned local portraits always use the shipped /public asset
  if (
    PINNED_LOCAL_TEAM_KEYS.has(key) &&
    isLocalPublicAsset(fallbackVal) &&
    isUsableImageUrl(fallbackVal)
  ) {
    return fallbackVal;
  }

  const runtimeVal = runtime?.[key];
  if (isUsableImageUrl(runtimeVal)) return runtimeVal as string;
  return fallbackVal;
}
