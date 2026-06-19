"use client";

import { MapPin, Navigation } from "lucide-react";
import { CLINIC_2GIS_URL, CLINIC_2GIS_WIDGET_URL } from "../lib/contacts";

export default function Map2Gis() {
  return (
    <>
      <a
        href={CLINIC_2GIS_URL}
        target="_blank"
        rel="noreferrer"
        className="group relative block overflow-hidden rounded-[1.35rem] border border-slate-200 bg-white md:hidden"
      >
        <div
          className="relative flex h-64 flex-col items-center justify-center gap-4 bg-[linear-gradient(180deg,#e0f2fe_0%,#f0f9ff_50%,#e2e8f0_100%)] px-6 text-center"
          aria-hidden="true"
        >
          <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(14,165,233,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.08)_1px,transparent_1px)] [background-size:24px_24px]" />
          <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-sky-500 text-white shadow-lg shadow-sky-500/30">
            <MapPin className="h-7 w-7" />
          </span>
          <div className="relative">
            <p className="text-sm font-semibold text-slate-900">Кортекс</p>
            <p className="mt-1 text-sm text-slate-600">пр. Жибек-Жолу, 224</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 border-t border-slate-200 bg-white px-4 py-4 text-sm font-semibold text-sky-600 transition-colors group-hover:bg-sky-50">
          <Navigation className="h-4 w-4" />
          Открыть карту в 2ГИС
        </div>
      </a>

      <div className="hidden overflow-hidden rounded-[1.35rem] border border-slate-200 bg-white md:block">
        <iframe
          title="Клиника Кортекс на карте 2ГИС"
          src={CLINIC_2GIS_WIDGET_URL}
          className="h-[28rem] w-full border-0"
          allowFullScreen
        />
      </div>
    </>
  );
}
