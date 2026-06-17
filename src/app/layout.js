import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://neuro.kg"),
  title: "Лучший нейрохирург в Бишкеке | Доктор Нурлан Абдрахманов",
  description:
    "Ищете квалифицированного нейрохирурга в Бишкеке? Доктор Нурлан Абдрахманов проводит консультации, операции на позвоночнике и лечение заболеваний нервной системы.",
  keywords:
    "нейрохирург бишкек, лучший нейрохирург кыргызстан, операция на позвоночник бишкек, удаление грыжи цена бишкек, прием нейрохирурга бишкек",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        {children}
      </body>
    </html>
  );
}
