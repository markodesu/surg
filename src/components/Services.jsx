"use client";

import { motion } from "framer-motion";
import { Activity, AlignVerticalDistributeCenter, Bone, Brain, CheckCircle2, Cpu } from "lucide-react";
import { WHATSAPP_LINK_CONSULTATION } from "../lib/contacts";

const services = [
  {
    title: "Лечение межпозвоночных грыж",
    description:
      "Оценка боли, онемения и ограничений движения, подбор тактики лечения по обследованиям и симптомам пациента в Бишкеке.",
    icon: Brain,
  },
  {
    title: "Консультация нейрохирурга",
    description:
      "Первичный прием для пациентов из Кыргызстана, которым нужна понятная диагностика, второе мнение и план дальнейшего наблюдения.",
    icon: CheckCircle2,
  },
  {
    title: "Операции на позвоночнике",
    description:
      "Подготовка к вмешательству, разбор рисков и сопровождение пациента от предоперационной оценки до восстановления.",
    icon: Bone,
  },
  {
    title: "Боли в спине и шее",
    description:
      "Помощь при хроническом болевом синдроме, защемлениях, прострелах, слабости в конечностях и неврологических жалобах.",
    icon: Activity,
  },
  {
    title: "Опухоли и объемные образования",
    description:
      "Маршрут пациента при подозрении на объемные процессы, согласование диагностики и безопасного плана действий.",
    icon: Cpu,
  },
  {
    title: "Послеоперационное сопровождение",
    description:
      "Наблюдение после вмешательств, контроль самочувствия и рекомендации по реабилитации дома и в клинике.",
    icon: AlignVerticalDistributeCenter,
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-teal-700">
          Услуги
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Направления лечения и услуги нейрохирурга
        </h2>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Позвоночник, нервная система, консультация и сопровождение лечения
          для пациентов в Бишкеке и по всему Кыргызстану.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              whileHover={{ y: -6 }}
              className="group rounded-[1.75rem] border border-white/80 bg-white/80 p-6 shadow-[0_14px_50px_rgba(15,23,42,0.06)] backdrop-blur transition-shadow hover:shadow-[0_20px_60px_rgba(15,23,42,0.1)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-700 transition-colors group-hover:bg-teal-600 group-hover:text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {service.description}
              </p>
              <a
                href={WHATSAPP_LINK_CONSULTATION}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 transition-colors group-hover:text-teal-800"
              >
                Узнать стоимость и записаться
              </a>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
