"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import { expertiseTabs } from "../data/expertise";

export default function ExpertiseTabs() {
  const [activeTab, setActiveTab] = useState(expertiseTabs[0].id);
  const current = expertiseTabs.find((tab) => tab.id === activeTab);

  return (
    <section id="expertise" className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-light tracking-tight text-slate-900 sm:text-4xl">
          Направления <span className="font-semibold">лечения</span>
        </h2>

        <div className="mx-auto mt-10 flex max-w-3xl border border-slate-200 bg-white shadow-sm">
          {expertiseTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              onMouseEnter={() => setActiveTab(tab.id)}
              className={`relative flex-1 px-3 py-4 text-center text-xs font-bold uppercase tracking-[0.14em] transition-colors sm:px-6 sm:text-sm ${
                activeTab === tab.id
                  ? "text-white"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              {activeTab === tab.id ? (
                <motion.span
                  layoutId="expertise-tab"
                  className="absolute inset-0 bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-700"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              ) : null}
              <span className="relative">{tab.label}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {current.items.map((item, index) => (
              <Link
                key={item.slug}
                href={`/blog/${item.slug}`}
                className="group relative aspect-square overflow-hidden"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                  className="h-full w-full"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-blue-950/55 transition-colors group-hover:bg-blue-950/45" />
                  <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                    <h3 className="text-base font-semibold uppercase tracking-wide text-white sm:text-lg">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
