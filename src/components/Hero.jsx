"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, MessageCircle, ShieldCheck } from "lucide-react";
import { WHATSAPP_LINK_CONSULTATION } from "../lib/contacts";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-dvh overflow-hidden bg-slate-950">
      <div
        className="absolute inset-0 bg-slate-950 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-slate-950/78" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(56,189,248,0.12),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(37,99,235,0.1),transparent_40%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid min-h-dvh max-w-7xl items-center gap-8 px-4 pb-20 pt-28 sm:gap-10 sm:px-6 lg:grid-cols-[1.05fr_0.85fr] lg:gap-12 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="relative order-1 mx-auto w-full max-w-[220px] sm:max-w-[260px] lg:order-2 lg:max-w-md"
        >
          <div
            className="absolute -inset-4 rounded-[2rem] bg-sky-500/10 blur-3xl sm:-inset-6"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/30 p-1 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm sm:rounded-[1.75rem]">
            <div className="relative overflow-hidden rounded-[1.25rem] sm:rounded-[1.5rem]">
              <img
                src="/images/example.webp"
                alt="Доктор Байымбет Талайбеков, нейрохирург в Бишкеке"
                className="aspect-[3/4] w-full object-cover object-top brightness-[0.92] saturate-[0.88] contrast-[1.03]"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-slate-950/25"
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 ring-1 ring-inset ring-white/10"
                aria-hidden="true"
              />
            </div>
          </div>
        </motion.div>

        <div className="order-2 max-w-3xl lg:order-1">
          <motion.p
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-400"
          >
            Нейрохирург в Бишкеке
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mt-4 text-5xl font-semibold leading-[1.05] tracking-tight text-sky-400 sm:text-6xl lg:text-7xl"
          >
            Байымбет Талайбеков
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mt-6 text-xl font-medium leading-8 text-white sm:text-2xl"
          >
            Специалист по нейроэндоскопии и микронейрохирургии
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.14 }}
            className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
          >
            Квалифицированная помощь при заболеваниях позвоночника и нервной
            системы. Консультация, диагностика и лечение для пациентов из
            Бишкека и Кыргызстана.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href={WHATSAPP_LINK_CONSULTATION}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 px-7 py-4 text-base font-semibold text-white shadow-xl shadow-sky-500/25 transition-transform hover:-translate-y-0.5 hover:bg-sky-400"
            >
              <MessageCircle className="h-5 w-5" />
              Записаться на приём
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur transition-transform hover:-translate-y-0.5 hover:bg-white/10"
            >
              Услуги и направления
              <ArrowRight className="h-5 w-5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.22 }}
            className="mt-12 grid max-w-2xl gap-3 sm:grid-cols-3"
          >
            {[
              "10+ лет стажа",
              "1500+ консультаций",
              "Приём в Кыргызстане",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm"
              >
                <p className="flex items-center gap-2 text-sm font-medium text-slate-200">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-sky-400" />
                  {item}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center text-slate-400 transition-colors hover:text-sky-400"
        aria-label="Прокрутить вниз"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  );
}
