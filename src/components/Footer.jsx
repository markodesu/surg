export default function Footer() {
  return (
    <footer className="border-t border-white/80 bg-white/70">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>© 2026 Байымбет Талайбеков, нейрохирург. Все права защищены.</p>
        <div className="flex items-center gap-4">
          <a href="https://www.instagram.com/dr.baimbet?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" className="transition-colors hover:text-slate-900">
            Instagram
          </a>
          <a href="https://wa.me/996555800766" target="_blank" rel="noreferrer" className="transition-colors hover:text-slate-900">
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
