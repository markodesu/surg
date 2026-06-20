"use client";

import { CLINIC_2GIS_WIDGET_URL } from "../lib/contacts";

export default function Map2Gis() {
  return (
    <div className="overflow-hidden rounded-[1.35rem] border border-slate-200 bg-white">
      <iframe
        title="Клиника Кортекс на карте 2ГИС"
        src={CLINIC_2GIS_WIDGET_URL}
        className="h-[24rem] w-full border-0 md:h-[28rem]"
        loading="lazy"
        allowFullScreen
      />
    </div>
  );
}
