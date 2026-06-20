"use client";

import { motion } from "framer-motion";
import { CalendarDays, MapPin, MessageCircle, PhoneCall } from "lucide-react";
import {
  CLINIC_2GIS_URL,
  PHONE,
  PHONE_DISPLAY,
  WHATSAPP_LINK_APPOINTMENT,
} from "../lib/contacts";
import Map2Gis from "./Map2Gis";

export default function Location() {
  return (
    <section id="contacts" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-700">
          Контакты
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Где проходит приём в Бишкеке
        </h2>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Адрес клиники, график работы, телефон и быстрый переход в WhatsApp —
          всё для записи на приём нейрохирурга.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="rounded-[1.75rem] border border-white/80 bg-white/80 p-6 shadow-[0_14px_50px_rgba(15,23,42,0.06)] backdrop-blur"
        >
          <div className="space-y-5 text-slate-700">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 text-sky-700" />
              <div>
                <p className="font-semibold text-slate-950">Адрес хирургического центра</p>
                <p className="mt-1 leading-7">
                  Кортекс, проспект Жибек-Жолу, 224. 720045,
                  Свердловский район.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CalendarDays className="mt-1 h-5 w-5 text-sky-700" />
              <div>
                <p className="font-semibold text-slate-950">График работы</p>
                <p className="mt-1 leading-7">
                  Пн–Сб: 09:00–18:00, Вс: по предварительной договоренности.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <PhoneCall className="mt-1 h-5 w-5 text-sky-700" />
              <div>
                <p className="font-semibold text-slate-950">Как связаться</p>
                <a href={`tel:${PHONE}`} className="mt-1 block leading-7 text-sky-700">
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={WHATSAPP_LINK_APPOINTMENT}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-transform hover:-translate-y-0.5"
            >
              Позвонить сейчас
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/80 p-4 shadow-[0_14px_50px_rgba(15,23,42,0.06)] backdrop-blur"
        >
          <Map2Gis />
          <a
            href={CLINIC_2GIS_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex text-sm font-medium text-sky-700 transition-colors hover:text-sky-800"
          >
            Открыть в 2ГИС →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
