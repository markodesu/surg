"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { DOCTOR_PHOTO } from "../data/heroBanners";
import { WHATSAPP_LINK_CONSULTATION } from "../lib/contacts";

export default function WelcomeBlock() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none"
        >
          <div className="overflow-hidden rounded-sm shadow-lg ring-4 ring-white/50">
            <img
              src={DOCTOR_PHOTO}
              alt="Доктор Байымбет Талайбеков, нейрохирург в Бишкеке"
              className="aspect-[4/5] w-full object-cover object-top transition-transform duration-700 hover:scale-105"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col justify-center bg-[#eef4fa] px-6 py-8 shadow-md sm:px-10 sm:py-10 lg:px-12 lg:py-12"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Доктор Байымбет Талайбеков
          </h2>
          <p className="mt-2 text-base font-medium text-slate-600">
            Практикующий нейрохирург, специалист по нейроэндоскопии и
            микронейрохирургии
          </p>
          <p className="mt-6 text-base leading-8 text-slate-600">
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
        </motion.div>
      </div>
    </section>
  );
}
