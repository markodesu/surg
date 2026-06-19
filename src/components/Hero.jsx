"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, ShieldCheck, Star } from "lucide-react";

const whatsappLink =
  "https://wa.me/996700000000?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8E%20%D0%BA%20%D0%BD%D0%B5%D0%B9%D1%80%D0%BE%D1%85%D0%B8%D1%80%D1%83%D1%80%D0%B3%D1%83";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top_left,rgba(13,148,136,0.18),transparent_42%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.14),transparent_36%)]" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-24">
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-teal-100 bg-white/80 px-4 py-2 text-sm font-medium text-teal-700 shadow-sm backdrop-blur"
          >
            <Star className="h-4 w-4 fill-current" />
            Нейрохирург в Бишкеке
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl"
          >
            Байымбет Талайбеков
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl"
          >
            Нейрохирург в Бишкеке, который ведет прием пациентов с болями в
            спине и шее, межпозвоночными грыжами, неврологическими жалобами и
            другими заболеваниями позвоночника и нервной системы.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-600 px-6 py-4 text-base font-semibold text-white shadow-xl shadow-teal-600/20 transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-5 w-5" />
              Записаться на консультацию
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/80 px-6 py-4 text-base font-semibold text-slate-900 backdrop-blur transition-transform hover:-translate-y-0.5"
            >
              Специализация и помощь
              <ArrowRight className="h-5 w-5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.22 }}
            className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3"
          >
            {[
              "10+ лет стажа",
              "1500+ консультаций",
              "Опыт работы в Кыргызстане",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/80 bg-white/75 p-4 shadow-[0_10px_40px_rgba(15,23,42,0.06)] backdrop-blur"
              >
                <p className="flex items-center gap-2 text-sm font-medium text-slate-600">
                  <ShieldCheck className="h-4 w-4 text-teal-600" />
                  {item}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mx-auto flex w-full max-w-xl items-stretch"
        >
          <div className="absolute inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-teal-200/60 via-white to-sky-200/60 blur-2xl" />
          <div className="relative flex w-full flex-col overflow-hidden rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-[0_25px_80px_rgba(15,23,42,0.12)] backdrop-blur">
            <div className="aspect-[3/4] w-full rounded-[1.5rem] border border-dashed border-teal-200 bg-[linear-gradient(180deg,rgba(13,148,136,0.18),rgba(15,23,42,0.04)),radial-gradient(circle_at_top,rgba(255,255,255,0.98),rgba(255,255,255,0.88))] p-6">
              <div className="flex h-full flex-col justify-between rounded-[1.25rem] border border-white/60 bg-white/70 p-5 shadow-inner">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-700">
                      Врач и прием
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-slate-900">
                      Кто ведет прием
                    </p>
                    <p className="mt-2 max-w-xs text-sm leading-6 text-slate-600">
                      Здесь можно разместить фото доктора, чтобы пациент сразу
                      видел специалиста, к которому обращается.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-teal-600 px-3 py-2 text-xs font-semibold text-white shadow-lg shadow-teal-600/20">
                    Бишкек
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-white/80 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Что лечит
                    </p>
                    <p className="mt-2 text-sm font-medium text-slate-900">
                      Консультация, диагностика и сопровождение лечения
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white/80 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Специализация
                    </p>
                    <p className="mt-2 text-sm font-medium text-slate-900">
                      Позвоночник, нервная система, локальная помощь в
                      Кыргызстане
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
