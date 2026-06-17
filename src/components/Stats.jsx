"use client";

import { motion } from "framer-motion";
import { Award, Brain, HeartPulse, UserRound } from "lucide-react";

const stats = [
  { label: "лет стажа", value: "10+", icon: Award },
  { label: "операций и консультаций", value: "1500+", icon: Brain },
  { label: "пациентов из Бишкека и Кыргызстана", value: "3000+", icon: HeartPulse },
  { label: "часы на связи с пациентами", value: "24/7", icon: UserRound },
];

export default function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="grid gap-4 md:grid-cols-4">
        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="rounded-3xl border border-white/90 bg-white/80 p-6 shadow-[0_12px_40px_rgba(15,23,42,0.06)] backdrop-blur"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="text-sm font-medium text-slate-600">{item.label}</p>
              </div>
              <p className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
                {item.value}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
