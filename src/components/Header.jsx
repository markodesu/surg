"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

import { WHATSAPP_LINK_CONSULTATION } from "../lib/contacts";

const links = [
  { id: "about", href: "#about", label: "О докторе" },
  { id: "services", href: "#services", label: "Услуги" },
  { id: "certificates", href: "#certificates", label: "Сертификаты" },
  { id: "contacts", href: "#contacts", label: "Контакты" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-white/60 transition-all duration-300 ${
        isScrolled
          ? "bg-white/75 shadow-[0_10px_40px_rgba(15,23,42,0.08)] backdrop-blur-md"
          : "bg-white/45 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#hero" className="group flex items-center gap-3">
          <img
            src="/images/Untitled.png"
            alt="Логотип нейрохирурга Байымбета Талайбекова"
            className="h-10 w-10 rounded-2xl border border-white/70 bg-white p-1 shadow-sm transition-transform group-hover:-translate-y-0.5"
          />
          <span className="flex flex-col leading-tight">
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-teal-700">
              Нейрохирург
            </span>
            <span className="hidden text-base font-semibold tracking-tight text-slate-950 sm:block">
              Байымбет Талайбеков
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="transition-colors hover:text-slate-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={WHATSAPP_LINK_CONSULTATION}
            className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-600/25 transition-transform hover:-translate-y-0.5"
            target="_blank"
            rel="noreferrer"
          >
            <Phone className="h-4 w-4" />
            Связаться
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:border-slate-300 md:hidden"
          aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 32 }}
            transition={{ duration: 0.24 }}
            className="absolute right-0 top-full w-full border-t border-slate-200 bg-white/95 px-4 py-5 shadow-2xl backdrop-blur-md md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WHATSAPP_LINK_CONSULTATION}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-teal-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-600/25"
              >
                <Phone className="h-4 w-4" />
                Связаться
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
