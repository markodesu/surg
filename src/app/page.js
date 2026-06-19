import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Reviews from "../components/Reviews";
import Services from "../components/Services";
import Experience from "../components/Experience";
import Location from "../components/Location";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen text-slate-900">
      <Header />
      <Hero />
      <div className="bg-[linear-gradient(180deg,#f8fafc_0%,#f0f9ff_100%)]">
        <About />
      </div>
      <Reviews />
      <div className="bg-[linear-gradient(180deg,#f8fafc_0%,#f0f9ff_100%)]">
        <Services />
        <Experience />
        <Location />
        <Footer />
      </div>
    </main>
  );
}
