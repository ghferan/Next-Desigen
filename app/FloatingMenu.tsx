"use client";

import { useState } from "react";
import { useTheme } from "next-themes";

export default function FloatingMenu({
  locale,
  setLocale,
}: {
  locale: "en" | "ar";
  setLocale: (val: "en" | "ar") => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end z-50">
      {menuOpen && (
        <div className="mb-2 flex flex-col gap-2">
          <button
            onClick={() => setLocale(locale === "en" ? "ar" : "en")}
            className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg hover:bg-blue-400 transition"
          >
            {locale === "en" ? "ع" : "EN"}
          </button>
          <button
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            className="w-12 h-12 rounded-full bg-gray-700 text-white flex items-center justify-center shadow-lg hover:bg-gray-600 transition"
          >
            {resolvedTheme === "dark" ? "🌞" : "🌙"}
          </button>
        </div>
      )}

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="w-14 h-14 rounded-full bg-purple-600 text-white flex items-center justify-center shadow-xl hover:bg-purple-500 transition text-2xl"
      >
        ⚙️
      </button>
    </div>
  );
}
