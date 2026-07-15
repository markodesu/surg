"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { trustTiles } from "../data/trustTiles";

export default function TrustTiles() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-0.5 sm:gap-1 lg:grid-cols-3">
        {trustTiles.map((tile, index) => {
          const content = (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="group relative h-24 overflow-hidden sm:h-40 lg:h-52"
            >
              <div
                role="img"
                aria-label={tile.title}
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url("${tile.image}")` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/45 to-blue-950/15" />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-2 text-center text-white sm:px-5">
                <h3 className="text-[0.6rem] font-semibold uppercase tracking-[0.12em] sm:text-base sm:tracking-[0.16em]">
                  {tile.title}
                </h3>
                <span className="my-1 h-px w-6 bg-gradient-to-r from-sky-400 to-indigo-400 sm:my-2 sm:w-8" />
                <p className="max-w-[8rem] text-[0.55rem] leading-tight text-slate-200 sm:max-w-xs sm:text-sm sm:leading-6">
                  {tile.tagline}
                </p>
              </div>
            </motion.div>
          );

          if (tile.clickable && tile.href) {
            return (
              <Link key={tile.id} href={tile.href} className="block">
                {content}
              </Link>
            );
          }

          return <div key={tile.id}>{content}</div>;
        })}
      </div>
    </section>
  );
}
