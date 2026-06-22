import {
  CalendarDays,
  MapPin,
  PhoneCall,
} from "lucide-react";

import {
  CLINIC_ADDRESS,
  CLINIC_HOURS,
  PHONE,
  PHONE_DISPLAY,
} from "../lib/contacts";
import AppointmentForm from "./AppointmentForm";

export default function ContactPanel() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-sm bg-white/95 px-6 py-8 shadow-2xl backdrop-blur sm:px-8 sm:py-10">
        <h2 className="text-2xl font-light uppercase tracking-[0.12em] text-slate-900 sm:text-3xl">
          Контакты
        </h2>

        <div className="mt-6 space-y-5 border-l-4 border-sky-500 pl-5">
          <div className="flex items-start gap-3">
            <MapPin className="mt-1 h-5 w-5 shrink-0 text-sky-700" />
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                Клиника Кортекс
              </p>
              <p className="mt-1 text-sm leading-7 text-slate-700 sm:text-base">{CLINIC_ADDRESS}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <PhoneCall className="mt-1 h-5 w-5 shrink-0 text-sky-700" />
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                Телефон
              </p>
              <a
                href={`tel:${PHONE}`}
                className="mt-1 block text-lg text-sky-700 hover:text-sky-800"
              >
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CalendarDays className="mt-1 h-5 w-5 shrink-0 text-sky-700" />
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                График работы
              </p>
              <p className="mt-1 text-sm leading-7 text-slate-700 sm:text-base">{CLINIC_HOURS}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-sm bg-blue-950/90 px-6 py-8 shadow-2xl backdrop-blur sm:px-8 sm:py-10">
        <h2 className="text-xl font-bold uppercase tracking-[0.14em] text-white sm:text-2xl">
          Записаться на приём
        </h2>
        <p className="mt-3 text-sm leading-7 text-sky-100">
          Заполните форму — откроется WhatsApp с готовым сообщением для записи.
        </p>
        <div className="mt-6">
          <AppointmentForm variant="dark" />
        </div>
      </div>
    </div>
  );
}
