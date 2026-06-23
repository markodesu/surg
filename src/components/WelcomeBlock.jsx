"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { DOCTOR_PHOTO } from "../data/heroBanners";
import { WHATSAPP_LINK_CONSULTATION } from "../lib/contacts";

export default function WelcomeBlock() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col justify-center bg-gradient-to-br from-slate-50 to-blue-50 px-8 py-10 shadow-xl sm:px-12 sm:py-12 lg:px-14 lg:py-14 border-l-4 border-sky-500 lg:flex-row lg:items-center lg:gap-12">
          <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
            <div className="overflow-hidden rounded-sm shadow-lg ring-4 ring-white/50">
              <img
                src={DOCTOR_PHOTO}
                alt="Доктор Байымбет Талайбеков, нейрохирург в Бишкеке"
                className="aspect-[3/4] w-full object-cover object-top transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          <div className="mt-8 lg:mt-0">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl font-serif">
              Доктор Байымбет Талайбеков
            </h2>
            <p className="mt-2 text-base font-medium text-slate-600 font-serif">
              Практикующий нейрохирург, специалист по нейроэндоскопии и
              микронейрохирургмии
            </p>
            <p className="mt-6 text-base leading-8 text-slate-600 font-serif">
              Принимает пациентов с болями в спине и шее, межпозвоночными грыжами,
              неврологическими жалобами и другими заболеваниями позвоночника и
              нервной системы. Проводит консультацию, разбирает обследования и
              сопровождает пациента на всех этапах лечения.
            </p>

            <div className="mt-10 flex flex-col gap-4 border-t border-slate-300/80 pt-8 sm:flex-row sm:items-center sm:gap-8">
              <Link
                href="/about"
                className="text-xs font-bold uppercase tracking-[0.24em] text-slate-800 transition-colors hover:text-sky-700"
              >
                Посмотреть полный профиль
              </Link>
              <span className="hidden h-8 w-px bg-slate-300 sm:block" aria-hidden="true" />
              <a
                href={WHATSAPP_LINK_CONSULTATION}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold uppercase tracking-[0.24em] text-slate-800 transition-colors hover:text-sky-700"
              >
                Записаться на приём
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
