"use client";

import { motion } from "framer-motion";

import ReviewsPanel from "./ReviewsPanel";

export default function ReviewsContactsSection() {
  return (
    <section id="reviews" className="relative isolate overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url("/images/kyrgyzstan.jpg")' }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/85 via-slate-900/80 to-blue-950/90" />

      <div className="relative z-10 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-5xl"
        >
          <h2 className="text-center text-3xl font-light text-white sm:text-4xl">
            Отзывы <span className="font-semibold">пациентов</span>
          </h2>
          <div className="mt-10">
            <ReviewsPanel />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
