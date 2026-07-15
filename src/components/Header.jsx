"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays, Phone } from "lucide-react";

import { PHONE, PHONE_DISPLAY, WHATSAPP_LINK_CONSULTATION } from "../lib/contacts";

const links = [
  { href: "/", label: "Главная" },
  { href: "/about", label: "О докторе" },
  { href: "/#expertise", label: "Направления" },
  { href: "/#reviews", label: "Отзывы" },
  { href: "/#contacts", label: "Контакты" },
];

export default function Header() {
  const pathname = usePathname();

  const resolveHref = (href) => {
    if (href.startsWith("/#") && pathname !== "/") {
      return `/${href.slice(1)}`;
    }
    return href;
  };

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return pathname === "/" && false;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const linkClass = (href, compact = false) =>
    `shrink-0 transition-colors hover:bg-white/10 hover:text-white ${
      compact
        ? "px-3 py-2.5 text-[0.65rem] font-semibold uppercase tracking-wide sm:px-4 sm:text-xs"
        : "px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.18em]"
    } ${
      isActive(href) ? "bg-white/15 text-white" : "text-white/90"
    }`;

  return (
    <header className="sticky top-0 z-50 shadow-md">
      <div className="bg-blue-950/70 backdrop-blur-sm text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6 sm:py-5 lg:px-8 lg:py-6">
          <Link href="/" className="group flex min-w-0 items-center gap-3">
            <span className="flex min-w-0 flex-col leading-tight sm:hidden">
              <span className="truncate text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-sky-200">
                Нейрохирург
              </span>
              <span className="truncate text-sm font-bold tracking-tight">
                Б. Талайбеков
              </span>
            </span>
            <span className="hidden min-w-0 flex-col leading-tight sm:flex">
              <span className="truncate text-sm font-semibold uppercase tracking-[0.22em] text-sky-200">
                Нейрохирург
              </span>
              <span className="truncate text-xl font-bold tracking-tight">
                Байымбет Талайбеков
              </span>
            </span>
          </Link>

          <p className="hidden max-w-xs text-center text-xs leading-5 text-sky-100 lg:block">
            Запись на консультацию и приём в клинике Кортекс, Бишкек
          </p>

          <div className="flex shrink-0 items-center gap-2 sm:gap-4">
            <a
              href={`tel:${PHONE}`}
              className="hidden items-center gap-2 text-sm font-medium text-white transition-colors hover:text-sky-200 md:inline-flex"
            >
              <Phone className="h-4 w-4" />
              {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP_LINK_CONSULTATION}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-gradient-to-b from-sky-400 via-blue-500 to-indigo-700 px-3 py-2 text-xs font-bold uppercase tracking-wide text-white shadow-lg shadow-blue-950/40 transition-transform hover:-translate-y-0.5 sm:px-4 sm:py-2.5 sm:text-sm"
            >
              <CalendarDays className="h-4 w-4" />
              <span className="hidden sm:inline">Записаться на приём</span>
              <span className="sm:hidden">Запись</span>
            </a>
          </div>
        </div>
      </div>

      <nav className="border-b border-blue-800/30 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 lg:hidden">
        <div className="mx-auto flex max-w-7xl overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={resolveHref(link.href)}
              className={linkClass(link.href, true)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${PHONE}`}
            className="inline-flex shrink-0 items-center gap-1.5 px-3 py-2.5 text-[0.65rem] font-semibold uppercase tracking-wide text-sky-100 transition-colors hover:bg-white/10 hover:text-white sm:px-4 sm:text-xs"
          >
            <Phone className="h-3.5 w-3.5" />
            {PHONE_DISPLAY}
          </a>
        </div>
      </nav>

      <nav className="hidden border-b border-blue-800/30 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 lg:block">
        <div className="mx-auto flex max-w-7xl justify-center gap-1 px-4 sm:px-6 lg:px-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={resolveHref(link.href)}
              className={linkClass(link.href)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
