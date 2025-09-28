"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AuthPage from "./ui/login/page";          // تأكد المسار صحيح
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";


export default function AppContent() {
  const [page, setPage] = useState(1);
  const t = useTranslations(); // أو useTranslations("namespace") إذا تستخدم namespace
  const { resolvedTheme } = useTheme();

  return (
     <AnimatePresence mode="wait">
        {/* الصفحة الأولى */}
        {page === 1 && (
          <motion.div
            key="page1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            // className="min-h-screen flex"
          >
            {/* زر الدخول */}
                <button
                  onClick={() => setPage(2)}
                >
                  <span>{t("login")}</span>
                </button>
        
          </motion.div>
        )}

        {/* الصفحة الثانية */}
        {page === 2 && (
          <motion.div
            key="page2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-50 h-full w-full bg-white dark:bg-black overflow-hidden"
            // className="min-h-screen flex flex-col items-end justify-end gap-10"
          >
            <AuthPage />
          </motion.div>
        )}   
      </AnimatePresence>
     
  );
}

