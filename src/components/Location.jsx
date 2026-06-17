"use client";

import { motion } from "framer-motion";
import { CalendarDays, MapPin, MessageCircle, PhoneCall } from "lucide-react";

const whatsappLink =
  "https://wa.me/996700000000?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%9D%D1%83%D0%B6%D0%B5%D0%BD%20%D0%BF%D1%80%D0%B8%D0%B5%D0%BC%20%D0%BD%D0%B5%D0%B9%D1%80%D0%BE%D1%85%D0%B8%D1%80%D1%83%D1%80%D0%B3%D0%B0%20%D0%B2%20%D0%91%D0%B8%D1%88%D0%BA%D0%B5%D0%BA%D0%B5";

export default function Location() {
  return (
    <section id="contacts" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-teal-700">
          Контакты
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Где проходит прием в Бишкеке
        </h2>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Контактный блок собран для локального SEO и быстрой конверсии: адрес,
          график работы, телефон и переход в WhatsApp без лишних шагов.
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
              <MapPin className="mt-1 h-5 w-5 text-teal-700" />
              <div>
                <p className="font-semibold text-slate-950">Адрес клиники</p>
                <p className="mt-1 leading-7">
                  Бишкек, центр города, клиника по предварительной записи.
                  Кабинет и этаж можно заменить на фактические данные.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CalendarDays className="mt-1 h-5 w-5 text-teal-700" />
              <div>
                <p className="font-semibold text-slate-950">График работы</p>
                <p className="mt-1 leading-7">
                  Пн–Сб: 09:00–18:00, Вс: по предварительной договоренности.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <PhoneCall className="mt-1 h-5 w-5 text-teal-700" />
              <div>
                <p className="font-semibold text-slate-950">Телефон</p>
                <a href="tel:+996700000000" className="mt-1 block leading-7 text-teal-700">
                  +996 700 000 000
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-600/20 transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <a
              href="tel:+996700000000"
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
          <div className="flex h-full min-h-[24rem] flex-col justify-between rounded-[1.35rem] bg-[linear-gradient(180deg,rgba(12,74,110,0.08),rgba(13,148,136,0.16))] p-5">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-600">
                Карта Бишкека
              </p>
              <p className="mt-3 max-w-xl text-lg leading-8 text-slate-800">
                На этапе разработки здесь стоит легкая заглушка. В продакшене ее
                легко заменить на iframe 2ГИС или Google Maps без изменения
                структуры секции.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                "ул. Чуй, Бишкек",
                "2 этаж, кабинет 12",
                "Прием нейрохирурга",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/70 bg-white/80 p-4 text-sm text-slate-700 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
