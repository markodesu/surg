"use client";

import { MessageCircle } from "lucide-react";
import { useState } from "react";

import { buildWhatsAppAppointmentLink } from "../lib/contacts";

export default function AppointmentForm({ variant = "light" }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const isDark = variant === "dark";

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setError("Укажите имя и телефон для записи.");
      return;
    }
    setError("");
    window.open(buildWhatsAppAppointmentLink({ name, phone, message }), "_blank", "noreferrer");
  };

  const labelClass = isDark ? "text-sky-100" : "text-slate-700";
  const inputClass = isDark
    ? "border-white/20 bg-white/10 text-white placeholder:text-slate-300 focus:border-sky-300 focus:ring-sky-400/30"
    : "border-slate-200 bg-white text-slate-900 focus:border-sky-400 focus:ring-sky-500/20";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="appointment-name" className={`text-sm font-medium ${labelClass}`}>
          Имя *
        </label>
        <input
          id="appointment-name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className={`mt-1.5 w-full rounded-sm border px-4 py-3 text-sm outline-none transition focus:ring-2 ${inputClass}`}
          placeholder="Ваше имя"
        />
      </div>
      <div>
        <label htmlFor="appointment-phone" className={`text-sm font-medium ${labelClass}`}>
          Телефон *
        </label>
        <input
          id="appointment-phone"
          type="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          className={`mt-1.5 w-full rounded-sm border px-4 py-3 text-sm outline-none transition focus:ring-2 ${inputClass}`}
          placeholder="+996 ..."
        />
      </div>
      <div>
        <label htmlFor="appointment-message" className={`text-sm font-medium ${labelClass}`}>
          Комментарий
        </label>
        <textarea
          id="appointment-message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          rows={3}
          className={`mt-1.5 w-full resize-none rounded-sm border px-4 py-3 text-sm outline-none transition focus:ring-2 ${inputClass}`}
          placeholder="Опишите симптомы или удобное время"
        />
      </div>
      {error ? <p className="text-sm text-red-400">{error}</p> : null}
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-700 px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white shadow-lg transition-transform hover:-translate-y-0.5"
      >
        <MessageCircle className="h-4 w-4" />
        Записаться
      </button>
    </form>
  );
}
