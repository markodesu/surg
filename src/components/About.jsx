"use client";

import { motion } from "framer-motion";
import { Brain, Microscope, Stethoscope } from "lucide-react";

const highlights = [
  {
    icon: Microscope,
    title: "Нейроэндоскопия",
    text: "Малоинвазивные вмешательства с точным доступом к очагу без лишней травмы тканей.",
  },
  {
    icon: Brain,
    title: "Микронейрохирургия",
    text: "Работа под увеличением — бережное отношение к нервным структурам и сосудам.",
  },
  {
    icon: Stethoscope,
    title: "Приём в Бишкеке",
    text: "Консультация, диагностика и сопровождение пациентов из Кыргызстана на всех этапах лечения.",
  },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-700">
            О докторе
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Байымбет Талайбеков — нейрохирург в Бишкеке
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Практикующий нейрохирург с опытом более 10 лет. Принимает пациентов
            с болями в спине и шее, межпозвоночными грыжами, неврологическими
            жалобами и другими заболеваниями позвоночника и нервной системы.
          </p>
          <p className="mt-4 rounded-2xl border border-sky-100 bg-sky-50/60 px-5 py-4 text-base font-medium leading-7 text-sky-900">
            Специалист по нейроэндоскопии и микронейрохирургии
          </p>
          <p className="mt-4 text-base leading-7 text-slate-600">
            В клинике в Бишкеке доктор проводит первичный приём, разбирает
            результаты обследований, объясняет варианты лечения и сопровождает
            пациента от консультации до восстановления.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-1">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="rounded-[1.75rem] border border-white/80 bg-white/80 p-6 shadow-[0_14px_50px_rgba(15,23,42,0.06)] backdrop-blur"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-50 text-sky-700">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
