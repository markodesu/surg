"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CircleX, GraduationCap, ShieldCheck } from "lucide-react";
import { useState } from "react";

import { certificates } from "../data/certificates";

export default function CertificatesGallery() {
  const [activeCertificate, setActiveCertificate] = useState(null);

  return (
    <>
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {certificates.map((certificate, index) => (
          <motion.button
            key={certificate.title}
            type="button"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            whileHover={{ y: -6 }}
            onClick={() => setActiveCertificate(certificate)}
            className="group text-left"
          >
            <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm transition-shadow group-hover:shadow-md">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="mt-4 flex items-start justify-between gap-2">
                <div>
                  <p className="text-base font-semibold text-slate-950">
                    {certificate.title}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {certificate.subtitle}
                  </p>
                </div>
                <ShieldCheck className="h-5 w-5 shrink-0 text-sky-700" />
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeCertificate ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-blue-950/70 px-4 py-6 backdrop-blur-md"
            onClick={() => setActiveCertificate(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.22 }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-3xl overflow-hidden rounded-[2rem] border border-white/20 bg-white p-6 shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setActiveCertificate(null)}
                className="absolute right-4 top-4 rounded-full bg-slate-100 p-2 text-slate-700 transition hover:bg-slate-200"
                aria-label="Закрыть"
              >
                <CircleX className="h-5 w-5" />
              </button>
              <div className="flex items-center gap-2 text-sky-700">
                <GraduationCap className="h-6 w-6" />
                <p className="text-xs font-semibold uppercase tracking-[0.28em]">
                  Сертификат
                </p>
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-slate-950">
                {activeCertificate.title}
              </h3>
              <p className="mt-2 text-base leading-7 text-slate-600">
                {activeCertificate.subtitle}
              </p>
              <img
                src={activeCertificate.image}
                alt={activeCertificate.title}
                className="mt-6 w-full rounded-xl object-cover"
              />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
