import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://neuro.kg"),
  title: "Нейрохирург в Бишкеке | Доктор Байымбет Талайбеков",
  description:
    "Доктор Байымбет Талайбеков принимает в Бишкеке, специализируется на заболеваниях позвоночника и нервной системы, помогает с консультацией, лечением и дальнейшим маршрутом пациента.",
  keywords:
    "нейрохирург бишкек, доктор байымбет талайбеков, лечение позвоночника бишкек, консультация нейрохирурга, адрес клиники бишкек, связь с нейрохирургом",
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
