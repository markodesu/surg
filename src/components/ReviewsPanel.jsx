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
    <div className="relative mx-auto max-w-3xl px-10 sm:px-14">
      <div className="relative rounded-sm bg-white/95 px-6 py-10 shadow-2xl backdrop-blur sm:px-10 sm:py-12">
        <button
          type="button"
          onClick={prev}
          className="absolute left-0 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-sky-300 hover:text-sky-700"
          aria-label="Предыдущий отзыв"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={next}
          className="absolute right-0 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-sky-300 hover:text-sky-700"
          aria-label="Следующий отзыв"
        >
          <ChevronRight className="h-5 w-5" />
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
            <p className="text-base leading-8 text-slate-700 sm:text-lg sm:leading-9">
              {reviews[index].text}
            </p>
            <p className="mt-6 font-semibold text-slate-900">{reviews[index].author}</p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex items-center justify-center gap-6 border-t border-slate-200 pt-6 text-xs font-bold uppercase tracking-[0.2em] text-slate-600">
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
