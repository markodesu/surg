import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "../components/Footer";
import Header from "../components/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://neuro.kg"),
  title: {
    default: "Лучший нейрохирург Бишкек | Доктор Байымбет Талайбеков",
    template: "%s | neuro.kg",
  },
  description:
    "Лучший нейрохирург в Бишкеке — доктор Байымбет Талайбеков. Операция на позвоночник в Кыргызстане, лечение грыж, консультация и запись через WhatsApp.",
  keywords: [
    "лучший нейрохирург бишкек",
    "операция на позвоночник кыргызстан",
    "нейрохирург бишкек",
    "доктор байымбет талайбеков",
    "лечение позвоночника бишкек",
    "межпозвоночная грыжа лечение",
    "консультация нейрохирурга",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
