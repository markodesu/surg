"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

import { PHONE, PHONE_DISPLAY, WHATSAPP_LINK_CONSULTATION } from "../lib/contacts";

const links = [
  { href: "/", label: "Главная" },
  { href: "/about", label: "О докторе" },
  { href: "/#expertise", label: "Направления" },
  { href: "/#reviews", label: "Отзывы" },
  { href: "/#contacts", label: "Контакты" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const resolveHref = (href) => {
    if (href.startsWith("/#") && pathname !== "/") {
      return `/${href.slice(1)}`;
    }
    return href;
  };

  return (
    <header className="sticky top-0 z-50 shadow-md">
      <div className="bg-blue-950/70 backdrop-blur-sm text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="group flex min-w-0 items-center gap-3">
            <img
              src="/images/logo.png"
              alt="Логотип нейрохирурга Байымбета Талайбекова"
              className="h-11 w-11 shrink-0 rounded-lg border border-white/20 bg-white/10 p-1"
            />
            <span className="hidden min-w-0 flex-col leading-tight sm:flex">
              <span className="truncate text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-sky-200">
                Нейрохирург
              </span>
              <span className="truncate text-sm font-semibold tracking-tight">
                Байымбет Талайбеков
              </span>
            </span>
          </Link>

          <p className="hidden max-w-xs text-center text-xs leading-5 text-sky-100 lg:block">
            Запись на консультацию и приём в клинике Кортекс, Бишкек
          </p>

          <div className="flex shrink-0 items-center gap-3 sm:gap-4">
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
              className="inline-flex items-center gap-2 rounded-sm bg-gradient-to-b from-sky-400 via-blue-500 to-indigo-700 px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-white shadow-lg shadow-blue-950/40 transition-transform hover:-translate-y-0.5 sm:text-sm"
            >
              <CalendarDays className="h-4 w-4" />
              <span className="hidden sm:inline">Записаться на приём</span>
              <span className="sm:hidden">Запись</span>
            </a>
            <button
              type="button"
              onClick={() => setIsOpen((current) => !current)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-white/20 text-white lg:hidden"
              aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <nav className="hidden border-b border-blue-800/30 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 lg:block">
        <div className="mx-auto flex max-w-7xl justify-center gap-1 px-4 sm:px-6 lg:px-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={resolveHref(link.href)}
              className="px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/90 transition-colors hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-blue-800/30 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={resolveHref(link.href)}
                  onClick={() => setIsOpen(false)}
                  className="border-b border-white/10 px-2 py-3 text-sm font-semibold uppercase tracking-wide text-white last:border-0"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`tel:${PHONE}`}
                className="mt-2 inline-flex items-center gap-2 px-2 py-2 text-sm text-sky-100"
              >
                <Phone className="h-4 w-4" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
