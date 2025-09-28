'use client';
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from "next-intl";
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  { name: 'Invoices', href: '/dashboard/invoices',icon: DocumentDuplicateIcon,},
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
    const t = useTranslations();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-sky-100 p-3 text-black text-sm font-medium hover:bg-sky-50 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
          { 'bg-pink-100 text-blue-600': pathname === link.href,
          },)}
              >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{t(link.name)}</p>
           </Link>
        );
      })}
    </>
  );
}
