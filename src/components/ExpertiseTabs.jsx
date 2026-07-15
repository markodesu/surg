"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

import { expertiseTabs } from "../data/expertise";

export default function ExpertiseTabs() {
  const [activeTab, setActiveTab] = useState(expertiseTabs[0].id);
  const [spinePage, setSpinePage] = useState(1);
  const current = expertiseTabs.find((tab) => tab.id === activeTab);

  const isSpineTab = activeTab === "spine";
  const spineItems = isSpineTab ? current.items.slice((spinePage - 1) * 8, spinePage * 8) : current.items;

  // Auto-rotate spine carousel every 5 seconds
  useEffect(() => {
    if (!isSpineTab) return;
    
    const timer = setInterval(() => {
      setSpinePage((p) => (p % 2) + 1);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [isSpineTab]);

  return (
    <section id="expertise" className="bg-slate-50 py-10 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-light tracking-tight text-slate-900 sm:text-4xl">
          Направления <span className="font-semibold">лечения</span>
        </h2>

        <div className="mx-auto mt-6 flex max-w-3xl border border-slate-200 bg-white shadow-sm sm:mt-10">
          {expertiseTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => {
                setActiveTab(tab.id);
                if (tab.id !== "spine") setSpinePage(1);
              }}
              onMouseEnter={() => {
                setActiveTab(tab.id);
                if (tab.id !== "spine") setSpinePage(1);
              }}
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
            key={`${current.id}-${isSpineTab ? spinePage : 1}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="mt-6 grid grid-cols-2 gap-2 sm:mt-8 sm:gap-4 lg:grid-cols-4"
          >
            {(isSpineTab ? spineItems : current.items).map((item, index) => (
              <Link
                key={item.slug}
                href={`/blog/${item.slug}`}
                className="group relative aspect-[4/3] overflow-hidden"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                  className="relative h-full w-full"
                >
                  <div
                    role="img"
                    aria-label={item.title}
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url("${item.image}")` }}
                  />
                  <div className="absolute inset-0 bg-blue-950/55 transition-colors group-hover:bg-blue-950/45" />
                  <div className="absolute inset-0 flex items-center justify-center p-2 text-center sm:p-4">
                    <h3 className="text-[0.65rem] font-semibold uppercase leading-tight tracking-wide text-white sm:text-base lg:text-lg">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </AnimatePresence>

        {isSpineTab && (
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setSpinePage((p) => Math.max(1, p - 1))}
              disabled={spinePage === 1}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 shadow-sm transition hover:border-sky-300 hover:text-sky-700 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="text-sm text-slate-600">
              {spinePage} / 2
            </span>
            <button
              type="button"
              onClick={() => setSpinePage((p) => Math.min(2, p + 1))}
              disabled={spinePage === 2}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 shadow-sm transition hover:border-sky-300 hover:text-sky-700 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
