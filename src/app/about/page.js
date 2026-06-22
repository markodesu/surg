import Link from "next/link";
import { MessageCircle } from "lucide-react";

import CertificatesGallery from "../../components/CertificatesGallery";
import { DOCTOR_PHOTO } from "../../data/heroBanners";
import { WHATSAPP_LINK_CONSULTATION } from "../../lib/contacts";

export const metadata = {
  title: "О докторе | Байымбет Талайбеков — нейрохирург Бишкек",
  description:
    "Биография, образование и сертификаты нейрохирурга Байымбета Талайбекова. Специалист по нейроэндоскопии и микронейрохирургии в Кыргызстане.",
};

const highlights = [
  {
    title: "Нейроэндоскопия",
    text: "Малоинвазивные вмешательства с точным доступом к очагу без лишней травмы тканей.",
  },
  {
    title: "Микронейрохирургия",
    text: "Работа под увеличением — бережное отношение к нервным структурам и сосудам.",
  },
  {
    title: "Приём в Бишкеке",
    text: "Консультация, диагностика и сопровождение пациентов из Кыргызстана на всех этапах лечения.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="relative mx-auto w-full max-w-sm lg:mx-0">
            <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-2 shadow-lg">
              <img
                src={DOCTOR_PHOTO}
                alt="Доктор Байымбет Талайбеков"
                className="aspect-[3/4] w-full rounded-[1.35rem] object-cover object-top"
              />
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-700">
              О докторе
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Байымбет Талайбеков — нейрохирург в Бишкеке
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Практикующий нейрохирург с опытом более 10 лет. Принимает пациентов
              с болями в спине и шее, межпозвоночными грыжами, неврологическими
              жалобами и другими заболеваниями позвоночника и нервной системы.
            </p>
            <p className="mt-4 rounded-2xl border border-sky-100 bg-sky-50/80 px-5 py-4 text-base font-medium leading-7 text-blue-950">
              Специалист по нейроэндоскопии и микронейрохирургии
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              В клинике в Бишкеке доктор проводит первичный приём, разбирает
              результаты обследований, объясняет варианты лечения и сопровождает
              пациента от консультации до восстановления.
            </p>
            <a
              href={WHATSAPP_LINK_CONSULTATION}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg"
            >
              <MessageCircle className="h-4 w-4" />
              Записаться на консультацию
            </a>
          </div>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Образование и квалификация
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Дипломы, сертификаты и подтверждение профильной подготовки доктора.
          </p>
          <CertificatesGallery />
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="text-sm font-semibold text-sky-700 hover:text-indigo-700"
          >
            Читать статьи о лечении →
          </Link>
        </div>
      </section>
    </main>
  );
}
