"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Quote, Star } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { CLINIC_2GIS_URL } from "../lib/contacts";
import { reviews } from "../data/reviews";

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const total = reviews.length;
  const review = reviews[index];

  const goTo = useCallback(
    (next) => {
      if (total <= 1) return;
      setIndex((current) => (current + next + total) % total);
    },
    [total],
  );

  useEffect(() => {
    if (total <= 1) return undefined;

    const timer = window.setInterval(() => goTo(1), 8000);
    return () => window.clearInterval(timer);
  }, [goTo, total]);

  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-24">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.14),transparent_42%),radial-gradient(circle_at_85%_80%,rgba(13,148,136,0.12),transparent_40%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-400">
            Отзывы
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Что говорят пациенты
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-400">
            Реальные отзывы с 2ГИС о приёме и лечении у доктора Байымбет
            Талайбековича
          </p>
          <div className="mt-5 inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-semibold text-amber-300 backdrop-blur-sm">
            <Star className="h-4 w-4 fill-current" />
            4.2 · Клиника Кортекс, Бишкек
          </div>
        </div>

        <div className="relative mx-auto mt-12 max-w-4xl">
          {total > 1 ? (
            <>
              <button
                type="button"
                onClick={() => goTo(-1)}
                className="absolute left-0 top-1/2 z-10 hidden -translate-x-4 -translate-y-1/2 rounded-full border border-white/10 bg-white/10 p-3 text-white backdrop-blur transition hover:bg-white/15 sm:-translate-x-12 sm:flex"
                aria-label="Предыдущий отзыв"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => goTo(1)}
                className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 translate-x-4 rounded-full border border-white/10 bg-white/10 p-3 text-white backdrop-blur transition hover:bg-white/15 sm:flex sm:translate-x-12"
                aria-label="Следующий отзыв"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          ) : null}

          <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-1 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-md">
            <AnimatePresence mode="wait" initial={false}>
              <motion.blockquote
                key={review.id}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.35 }}
                className="relative rounded-[1.5rem] bg-slate-900/50 p-8 sm:p-10"
              >
                <Quote className="absolute right-6 top-6 h-10 w-10 text-sky-500/20" />
                <p className="relative max-w-3xl text-lg leading-8 text-slate-100 sm:text-xl">
                  «{review.text}»
                </p>
                <footer className="relative mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-semibold text-white">{review.author}</p>
                    <p className="mt-1 text-sm text-slate-400">{review.date}</p>
                  </div>
                  <a
                    href={review.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 transition-colors hover:text-sky-300"
                  >
                    Читать на 2ГИС
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {total > 1 ? (
            <div className="mt-6 flex items-center justify-center gap-2">
              {reviews.map((item, dotIndex) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setIndex(dotIndex)}
                  className={`h-2.5 rounded-full transition-all ${
                    dotIndex === index
                      ? "w-8 bg-sky-400"
                      : "w-2.5 bg-white/25 hover:bg-white/40"
                  }`}
                  aria-label={`Отзыв ${dotIndex + 1}`}
                />
              ))}
            </div>
          ) : null}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-slate-500">
          Отзывы опубликованы пациентами на{" "}
          <a
            href={CLINIC_2GIS_URL}
            target="_blank"
            rel="noreferrer"
            className="text-sky-400 hover:text-sky-300"
          >
            2ГИС
          </a>
          . Тексты приведены с согласованием формулировок для сайта.
        </p>
      </div>
    </section>
  );
}
