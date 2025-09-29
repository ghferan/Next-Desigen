"use client";
import DarkVeil from "../components/DarkVeil";
import { ArrowRightIcon, ArrowLeftIcon, LanguageIcon } from "@heroicons/react/24/outline";
import { lusitana } from "./ui/fonts";
import '@/app/ui/global.css';
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes"; // 👈 أضف هذا
import Link from "next/link";

export default function RootLayout() {
  const t = useTranslations();
  const { resolvedTheme } = useTheme(); // 👈 احصل على الثيم الحالي
  const isDarkMode = resolvedTheme === "dark"; // 👈 تحديد إذا الوضع داكن

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* الخلفية */}
      <div className="absolute inset-0 -z-10">
        <DarkVeil isDarkMode={isDarkMode} />
      </div>

      <div className="flex flex-1 flex-col gap-2 md:flex-row min-h-screen">

        {/* العمود الأول */}
        <div className="flex width-full height-full md:w-3/5">
         <img
          src="/bg2.png"
          alt="sakura"
        />
        <img
          src="/bg2.png"
          alt="sakura"
          className="block md:hidden max-h-[620px] w-full object-cover"
        />
        </div>

        {/* العمود الثاني */}
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-40 px-6 py-10 md:w-2/5 md:px-10">
          <p className={`${lusitana.className} text-xl  md:text-3xl leading-normal`}>
            <strong className="text-blue-500">React Next{' '}</strong>
          </p>
          <p className={`${lusitana.className} text-xl text-orange-800 md:text-3xl leading-normal`}
          >
            {t("this is example for my work, follow me on")}{" "}
            <a href="https://nextjs.org/learn/" className="text-pink-500">
              LinkedIn
            </a>
          </p>

          {/*Dashboard*/}
            <Link href={'/dashboard'} 
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
            >{t("Dashboard")}
            <ArrowRightIcon className="w-5 md:w-6" />
            </Link>
        </div>
      </div>
    </div>
  );
}
