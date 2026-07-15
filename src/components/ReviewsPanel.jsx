"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";

import { reviews } from "../data/reviews";
import { CLINIC_2GIS_URL } from "../lib/contacts";

export default function ReviewsPanel() {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((current) => (current - 1 + reviews.length) % reviews.length);
  const next = () => setIndex((current) => (current + 1) % reviews.length);

  return (
    <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
      <div className="relative rounded-sm bg-white/95 px-4 py-8 shadow-2xl backdrop-blur sm:px-8 sm:py-10">
        <button
          type="button"
          onClick={prev}
          className="absolute left-0 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-sky-300 hover:text-sky-700 sm:h-9 sm:w-9"
          aria-label="Предыдущий отзыв"
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
        <button
          type="button"
          onClick={next}
          className="absolute right-0 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-sky-300 hover:text-sky-700 sm:h-9 sm:w-9"
          aria-label="Следующий отзыв"
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>

        <div className="flex justify-center gap-1 text-sky-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-current" />
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={reviews[index].id}
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -32 }}
            transition={{ duration: 0.35 }}
            className="mt-6 text-center"
          >
            <p className="text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
              {reviews[index].text}
            </p>
            <p className="mt-5 font-semibold text-slate-900">{reviews[index].author}</p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 border-t border-slate-200 pt-5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-slate-600 sm:text-xs sm:gap-6">
          <a href={CLINIC_2GIS_URL} target="_blank" rel="noreferrer" className="hover:text-sky-700">
            Все отзывы
          </a>
          <span className="text-slate-300">|</span>
          <a href={CLINIC_2GIS_URL} target="_blank" rel="noreferrer" className="hover:text-sky-700">
            Оставить отзыв
          </a>
        </div>
      </div>
    </div>
  );
}
