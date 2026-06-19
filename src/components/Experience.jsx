"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CircleX, GraduationCap, ShieldCheck } from "lucide-react";
import { useState } from "react";

const certificates = [
  {
    title: "Диплом нейрохирурга",
    subtitle: "Базовая специализация и клиническая практика",
  },
  {
    title: "Сертификат повышения квалификации",
    subtitle: "Современные методы лечения позвоночника",
  },
  {
    title: "Международная стажировка",
    subtitle: "Обмен опытом и клинические протоколы",
  },
  {
    title: "Членство в профессиональном сообществе",
    subtitle: "Подтверждение непрерывного обучения",
  },
];

export default function Experience() {
  const [activeCertificate, setActiveCertificate] = useState(null);

  return (
    <section id="certificates" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-700">
          Сертификаты
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Образование и квалификация
        </h2>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Дипломы, сертификаты и подтверждение профильной подготовки доктора.
        </p>
      </div>

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
            <div className="overflow-hidden rounded-[1.75rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(240,249,255,0.72))] p-5 shadow-[0_14px_50px_rgba(15,23,42,0.06)] transition-shadow group-hover:shadow-[0_20px_60px_rgba(15,23,42,0.1)]">
              <div className="flex aspect-[4/3] flex-col justify-between rounded-[1.35rem] border border-dashed border-sky-200 bg-white/80 p-4">
                <div className="flex items-center justify-between text-sky-700">
                  <GraduationCap className="h-6 w-6" />
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-lg font-semibold tracking-tight text-slate-950">
                    {certificate.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {certificate.subtitle}
                  </p>
                </div>
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-4 py-6 backdrop-blur-md"
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
                aria-label="Закрыть окно сертификата"
              >
                <CircleX className="h-5 w-5" />
              </button>
              <div className="rounded-[1.5rem] border border-dashed border-sky-200 bg-[linear-gradient(135deg,rgba(56,189,248,0.12),rgba(255,255,255,1))] p-6">
                <div className="flex min-h-[20rem] flex-col justify-between rounded-[1.25rem] border border-white/80 bg-white/90 p-6 shadow-inner">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-700">
                      Сертификат
                    </p>
                    <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
                      {activeCertificate.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                      {activeCertificate.subtitle}. В этот блок можно подставить
                      фактическое изображение диплома или скан документа без
                      изменения механики модального окна.
                    </p>
                  </div>
                  <div className="mt-8 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
                      Документ подтверждает профильную подготовку.
                    </div>
                    <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
                      Блок адаптирован под мобильные экраны.
                    </div>
                    <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
                      Закрытие по клику вне области и по крестику.
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
