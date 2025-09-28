"use client";

import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import { ThemeProvider } from "next-themes";
import { NextIntlClientProvider } from "next-intl";
import { useState } from "react";
import FloatingMenu from './FloatingMenu';
import enMessages from "../messages/en.json";
import arMessages from "../messages/ar.json";
import AppContent from "./AppContent";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [locale, setLocale] = useState<"en" | "ar">("en");
  const messages = locale === "ar" ? arMessages : enMessages;


  return (
    <html lang={locale} className="min-h-screen" suppressHydrationWarning> 
    <body className={`${inter.className} antialiased relative min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NextIntlClientProvider locale={locale} messages={messages}>

            {/* زر Login */}
            <div className="absolute top-5 right-5 flex gap-3 z-50">
              <button
                className="flex rounded-lg bg-gray-200 px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
              >
                <AppContent/>
              </button>
            </div>

            {/* محتوى الصفحات العادي */}
            {children}

            {/* القائمة العائمة */}
            <FloatingMenu locale={locale} setLocale={setLocale} />

           </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
