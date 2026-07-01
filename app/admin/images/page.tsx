"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";

interface ImageConfig {
  [key: string]: string;
}

const TEAM_KEYS = [
  { key: "drKefeni", label: "Dr. Kefeni Kejela" },
  { key: "assefaFoche", label: "Assefa Foche (MBA)" },
  { key: "abishuWogari", label: "Abishu Wogari" },
  { key: "drDejene", label: "Dr. Dejene Alemayehu (PhD)" },
  { key: "mekonnenAbote", label: "Mekonnen Abote (MA)" },
  { key: "drMelkamu", label: "Dr. Melkamu Adeba" },
  { key: "erjaboWanore", label: "Erjabo Wanore" },
  { key: "frezerKifle", label: "Frezer Kifle M.Sc" },
  { key: "betruNedessa", label: "Betru Nedessa M.Sc" },
];

const ADMIN_PASSWORD = "almi-admin-2026";

export default function AdminImagesPage() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [config, setConfig] = useState<ImageConfig>({});
  const [initialConfig, setInitialConfig] = useState<ImageConfig>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("almi-admin-auth") === "1") {
      setAuthenticated(true);
    }
  }, []);

  const fetchConfig = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/admin-images", { cache: "no-store" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to load config");
      setConfig(data);
      setInitialConfig(data);
      setMessage("");
    } catch (err: any) {
      setMessage(err.message || "Failed to load config");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (authenticated) fetchConfig();
  }, [authenticated, fetchConfig]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem("almi-admin-auth", "1");
      setAuthenticated(true);
      setMessage("");
    } else {
      setMessage("Incorrect password");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("almi-admin-auth");
    setAuthenticated(false);
  };

  const saveConfig = async (nextConfig: ImageConfig) => {
    const res = await fetch("/api/admin-images", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nextConfig),
    });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new Error(data.error || "Save failed");
    }
  };

  const handleFileUpload = async (key: string, file: File) => {
    setUploading(key);
    setMessage("");
    try {
      const form = new FormData();
      form.append("file", file);
      form.append("key", key);

      const res = await fetch("/api/admin-upload", { method: "POST", body: form });
      let json: any = {};
      const text = await res.text();
      try {
        json = JSON.parse(text);
      } catch {
        throw new Error(text || "Upload failed: server returned non-JSON response");
      }

      if (!res.ok) throw new Error(json.error || "Upload failed");

      const nextConfig = { ...config, [key]: json.url };
      setConfig(nextConfig);
      setInitialConfig(nextConfig);
      await saveConfig(nextConfig);
      setMessage(`✅ ${key} uploaded and saved. Refresh the site to see it.`);
      router.refresh();
    } catch (err: any) {
      setMessage(`❌ ${key}: ${err.message || "Upload failed"}`);
    } finally {
      setUploading(null);
    }
  };

  const handleUrlChange = (key: string, value: string) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = async () => {
    setSaving(true);
    setMessage("");
    try {
      await saveConfig(config);
      setInitialConfig(config);
      setMessage("✅ Saved. Changes appear on the site within ~60 seconds.");
      router.refresh();
    } catch (err: any) {
      setMessage(`❌ Save failed: ${err.message || "Save failed"}`);
    } finally {
      setSaving(false);
    }
  };

  const hasChanges = JSON.stringify(config) !== JSON.stringify(initialConfig);

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#faf9f6] px-4">
        <form onSubmit={handleLogin} className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-stone-200">
          <h1 className="text-2xl font-bold text-[#1f2937] mb-2">ALMI Admin</h1>
          <p className="text-sm text-[#4b5563] mb-6">Enter the admin password to manage images.</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Admin password"
            className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#2d5a3d] mb-4"
          />
          <button
            type="submit"
            className="w-full bg-[#2d5a3d] hover:bg-[#1e3d2a] text-white font-semibold py-3 rounded-lg transition-colors"
          >
            Sign In
          </button>
          {message && <p className="mt-4 text-sm text-red-600">{message}</p>}
        </form>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#faf9f6]">
        <p className="text-[#4b5563]">Loading config...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf9f6] pb-20">
      <header className="bg-white border-b border-stone-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-[#1f2937]">ALMI Image Manager</h1>
          <div className="flex items-center gap-4">
            <button
              onClick={fetchConfig}
              className="text-sm text-[#4b5563] hover:text-[#1f2937] underline"
            >
              Reload config
            </button>
            <button onClick={handleLogout} className="text-sm text-[#4b5563] hover:text-[#1f2937] underline">
              Log out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-10">
        {message && (
          <div className="bg-white rounded-xl border border-stone-200 p-4 text-[#1f2937] whitespace-pre-line">
            {message}
          </div>
        )}

        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-emerald-900 text-sm">
          <p className="font-semibold mb-1">How this works</p>
          <p>
            Uploading a file saves it immediately. You only need to click <strong>Save All Changes</strong> if you
            manually edit an image URL in the text field.
          </p>
        </div>

        <section className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-[#1f2937] mb-6">Brand Logo</h2>
          <ImageRow
            config={config}
            imageKey="logo"
            label="Site Logo"
            onUpload={handleFileUpload}
            onUrlChange={handleUrlChange}
            uploading={uploading}
          />
        </section>

        <section className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-[#1f2937] mb-6">About Page Banner</h2>
          <ImageRow
            config={config}
            imageKey="aboutBanner"
            label="About Banner"
            onUpload={handleFileUpload}
            onUrlChange={handleUrlChange}
            uploading={uploading}
          />
        </section>

        <section className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-[#1f2937] mb-6">About Page Team Profiles</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TEAM_KEYS.map(({ key, label }) => (
              <ImageCard
                key={key}
                config={config}
                imageKey={key}
                label={label}
                onUpload={handleFileUpload}
                onUrlChange={handleUrlChange}
                uploading={uploading}
              />
            ))}
          </div>
        </section>

        <div className="flex items-center justify-end gap-4">
          <button
            onClick={handleSave}
            disabled={saving || !hasChanges}
            className="bg-[#2d5a3d] hover:bg-[#1e3d2a] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            {saving ? "Saving..." : hasChanges ? "Save All Changes" : "No changes to save"}
          </button>
        </div>
      </main>
    </div>
  );
}

function ImageRow({
  config,
  imageKey,
  label,
  onUpload,
  onUrlChange,
  uploading,
}: {
  config: ImageConfig;
  imageKey: string;
  label: string;
  onUpload: (key: string, file: File) => void;
  onUrlChange: (key: string, value: string) => void;
  uploading: string | null;
}) {
  const src = config[imageKey] || "";
  const fileInputRef = useRef<HTMLInputElement>(null);
  const isUploaded = src && !src.startsWith("/") && !src.includes("unsplash.com");

  return (
    <div className="flex flex-col md:flex-row gap-6 items-start">
      <div className="w-full md:w-48 h-32 bg-stone-100 rounded-xl border border-stone-200 flex items-center justify-center overflow-hidden">
        {src ? (
          <img src={src} alt={label} className="w-full h-full object-contain" />
        ) : (
          <span className="text-sm text-[#9ca3af]">No image</span>
        )}
      </div>
      <div className="flex-1 w-full space-y-3">
        <div className="flex items-center gap-2">
          <label className="block text-sm font-medium text-[#1f2937]">{label}</label>
          {isUploaded && (
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-100 text-emerald-800">
              uploaded
            </span>
          )}
        </div>
        <input
          type="text"
          value={src}
          onChange={(e) => onUrlChange(imageKey, e.target.value)}
          placeholder="Image URL (or upload a file)"
          className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#2d5a3d]"
        />
        <label className="inline-flex items-center gap-2 px-4 py-2 bg-[#2d5a3d] hover:bg-[#1e3d2a] text-white text-sm font-medium rounded-lg cursor-pointer transition-colors">
          {uploading === imageKey ? "Uploading..." : "Upload file"}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            disabled={uploading === imageKey}
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) onUpload(imageKey, file);
              if (fileInputRef.current) fileInputRef.current.value = "";
            }}
          />
        </label>
      </div>
    </div>
  );
}

function ImageCard({
  config,
  imageKey,
  label,
  onUpload,
  onUrlChange,
  uploading,
}: {
  config: ImageConfig;
  imageKey: string;
  label: string;
  onUpload: (key: string, file: File) => void;
  onUrlChange: (key: string, value: string) => void;
  uploading: string | null;
}) {
  const src = config[imageKey] || "";
  const fileInputRef = useRef<HTMLInputElement>(null);
  const isUploaded = src && !src.startsWith("/") && !src.includes("unsplash.com");

  return (
    <div className="bg-stone-50 rounded-xl border border-stone-200 p-4 space-y-3">
      <div className="w-full h-40 bg-white rounded-lg border border-stone-200 flex items-center justify-center overflow-hidden">
        {src ? (
          <img src={src} alt={label} className="w-full h-full object-contain" />
        ) : (
          <span className="text-sm text-[#9ca3af]">No image</span>
        )}
      </div>
      <div>
        <div className="flex items-center gap-2">
          <p className="text-sm font-medium text-[#1f2937]">{label}</p>
          {isUploaded && (
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-100 text-emerald-800">
              uploaded
            </span>
          )}
        </div>
        <p className="text-xs text-[#9ca3af] font-mono">{imageKey}</p>
      </div>
      <input
        type="text"
        value={src}
        onChange={(e) => onUrlChange(imageKey, e.target.value)}
        placeholder="Image URL (or upload a file)"
        className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#2d5a3d]"
      />
      <label className="inline-flex items-center gap-2 px-3 py-2 bg-[#2d5a3d] hover:bg-[#1e3d2a] text-white text-sm font-medium rounded-lg cursor-pointer transition-colors">
        {uploading === imageKey ? "Uploading..." : "Upload file"}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          disabled={uploading === imageKey}
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) onUpload(imageKey, file);
            if (fileInputRef.current) fileInputRef.current.value = "";
          }}
        />
      </label>
    </div>
  );
}
