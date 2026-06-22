"use client";

import { partnerLogos } from "../data/partners";
import {
  CLINIC_2GIS_URL,
  TECH_SUPPORT_PHONE_DISPLAY,
  WHATSAPP_LINK_CONSULTATION,
  WHATSAPP_LINK_TECH_SUPPORT,
} from "../lib/contacts";
import ContactPanel from "./ContactPanel";
import Map2Gis from "./Map2Gis";

export default function Footer() {
  return (
    <footer id="contacts">
      <div
        className="h-28 bg-cover bg-center sm:h-36"
        style={{ backgroundImage: "url('/images/kyrgyzstan.jpg')" }}
        aria-hidden="true"
      >
        <div className="h-full bg-blue-950/40" />
      </div>

      <section className="border-t border-slate-200 bg-slate-50 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-5xl">
          <ContactPanel />
        </div>
      </section>

      <section className="bg-white">
        <Map2Gis />
        <div className="px-4 pb-4 sm:px-6">
          <a
            href={CLINIC_2GIS_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex text-sm font-medium text-sky-700 hover:text-sky-800"
          >
            Открыть в 2ГИС →
          </a>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-4 sm:px-6 lg:px-8">
          {partnerLogos.map((logo) => (
            <div
              key={logo.id}
              className="flex h-14 min-w-[7rem] items-center justify-center rounded-sm border border-slate-200 bg-white px-4 text-center"
            >
              <div>
                <p className="text-[0.65rem] font-bold uppercase tracking-wider text-sky-700">
                  {logo.label}
                </p>
                <p className="text-sm font-semibold text-blue-950">{logo.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-blue-950 py-8 text-slate-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Байымбет Талайбеков, нейрохирург. Все права защищены.</p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/dr.baimbet?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-white"
              >
                Instagram
              </a>
              <a
                href={WHATSAPP_LINK_CONSULTATION}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-white"
              >
                WhatsApp
              </a>
            </div>
          </div>
          <p className="mt-4 border-t border-slate-700 pt-4 text-xs text-slate-400">
            При технических неполадках напишите в{" "}
            <a
              href={WHATSAPP_LINK_TECH_SUPPORT}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-sky-400 hover:text-sky-300"
            >
              WhatsApp {TECH_SUPPORT_PHONE_DISPLAY}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
