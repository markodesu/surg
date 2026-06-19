import {
  WHATSAPP_LINK_CONSULTATION,
  WHATSAPP_LINK_TECH_SUPPORT,
  TECH_SUPPORT_PHONE_DISPLAY,
} from "../lib/contacts";

export default function Footer() {
  return (
    <footer className="border-t border-white/80 bg-white/70">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Байымбет Талайбеков, нейрохирург. Все права защищены.</p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/dr.baimbet?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-slate-900"
            >
              Instagram
            </a>
            <a
              href={WHATSAPP_LINK_CONSULTATION}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-slate-900"
            >
              WhatsApp
            </a>
          </div>
        </div>
        <p className="mt-4 border-t border-slate-200/80 pt-4 text-center text-xs text-slate-500 sm:text-left">
          При технических неполадках на сайте напишите в{" "}
          <a
            href={WHATSAPP_LINK_TECH_SUPPORT}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-sky-700 transition-colors hover:text-sky-800"
          >
            WhatsApp {TECH_SUPPORT_PHONE_DISPLAY}
          </a>
        </p>
      </div>
    </footer>
  );
}
