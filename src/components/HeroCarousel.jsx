"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useEffect, useState } from "react";

import { heroBanners } from "../data/heroBanners";
import { reviews } from "../data/reviews";
import { CLINIC_2GIS_URL } from "../lib/contacts";

export default function HeroCarousel() {
  const [bannerIndex, setBannerIndex] = useState(0);
  const [reviewIndex, setReviewIndex] = useState(0);
  const banner = heroBanners[bannerIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setBannerIndex((current) => (current + 1) % heroBanners.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const prevReview = () =>
    setReviewIndex((current) => (current - 1 + reviews.length) % reviews.length);
  const nextReview = () =>
    setReviewIndex((current) => (current + 1) % reviews.length);

  return (
    <section>
      <div className="relative h-[24rem] overflow-hidden sm:h-[28rem] lg:h-[32rem]">
        <AnimatePresence mode="wait">
          <motion.div
            key={banner.id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={banner.image}
              alt={banner.alt}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-blue-950/90 via-blue-950/50 to-transparent" />
          </motion.div>
        </AnimatePresence>

        <div className="relative mx-auto flex h-full max-w-7xl items-center justify-end px-4 sm:px-6 lg:px-8">
          <h1 className="sr-only">
            Нейрохирург в Бишкеке — доктор Байымбет Талайбеков
          </h1>
          <motion.div
            key={banner.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="max-w-xl text-right lg:max-w-2xl"
          >
            <p className="text-3xl font-light leading-tight text-white sm:text-4xl lg:text-5xl">
              {banner.line1}
              <br />
              <span className="bg-gradient-to-r from-sky-300 via-blue-300 to-indigo-200 bg-clip-text font-semibold text-transparent">
                {banner.line2}
              </span>
            </p>
            <p className="mt-4 hidden text-base leading-7 text-slate-200 sm:block">
              Нейрохирург в Бишкеке — доктор Байымбет Талайбеков
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-6 right-6 flex gap-2 sm:right-10">
          {heroBanners.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setBannerIndex(index)}
              className={`h-1 rounded-full transition-all ${
                index === bannerIndex ? "w-8 bg-sky-400" : "w-4 bg-white/40"
              }`}
              aria-label={`Слайд ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="border-b border-slate-200 bg-white py-10 sm:py-12">
        <div className="relative mx-auto max-w-4xl px-12 sm:px-16">
          <span
            className="pointer-events-none absolute left-2 top-0 select-none text-7xl font-serif leading-none text-sky-500/30 sm:left-4 sm:text-8xl"
            aria-hidden="true"
          >
            “
          </span>
          <span
            className="pointer-events-none absolute bottom-0 right-2 select-none text-7xl font-serif leading-none text-sky-500/30 sm:right-4 sm:text-8xl"
            aria-hidden="true"
          >
            ”
          </span>

          <button
            type="button"
            onClick={prevReview}
            className="absolute left-6 top-1/2 inline-flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-sky-300 hover:text-sky-700"
            aria-label="Предыдущий отзыв"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={nextReview}
            className="absolute right-6 top-1/2 inline-flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-sky-300 hover:text-sky-700"
            aria-label="Следующий отзыв"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={reviews[reviewIndex].id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <p className="text-base italic leading-8 text-slate-700 sm:text-lg sm:leading-9 font-serif">
                {reviews[reviewIndex].text}
              </p>
              <p className="mt-5 text-sm font-semibold text-slate-900">
                {reviews[reviewIndex].author}
              </p>
              <div className="mt-4 flex items-center justify-center gap-2">
                <div className="flex gap-0.5 text-sky-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-medium text-slate-500">2ГИС</span>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-center gap-6 border-t border-slate-200 pt-5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
            <a href={CLINIC_2GIS_URL} target="_blank" rel="noreferrer" className="hover:text-sky-700">
              Все отзывы
            </a>
            <span className="text-slate-300" aria-hidden="true">
              |
            </span>
            <a
              href={CLINIC_2GIS_URL}
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-700"
            >
              Оставить отзыв
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
