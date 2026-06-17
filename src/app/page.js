import Header from "../components/Header";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Services from "../components/Services";
import Experience from "../components/Experience";
import Location from "../components/Location";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fafc_0%,#effdfa_100%)] text-slate-900">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Experience />
      <Location />
      <Footer />
    </main>
  );
}
