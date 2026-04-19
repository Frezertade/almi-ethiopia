"use client";

import { useI18n, type Locale } from "./i18n-provider";
import { Globe } from "lucide-react";

const locales = [
  { code: "en" as Locale, label: "English" },
  { code: "am" as Locale, label: "አማርኛ" },
];

export default function LocaleSwitcher() {
  const { locale, setLocale } = useI18n();

  return (
    <div className="relative">
      <div className="flex items-center gap-1">
        <Globe className="w-4 h-4 text-stone-light" />
        <select
          value={locale}
          onChange={(e) => setLocale(e.target.value as Locale)}
          className="bg-transparent text-sm font-medium text-stone-dark focus:outline-none cursor-pointer"
        >
          {locales.map((l) => (
            <option key={l.code} value={l.code}>
              {l.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
