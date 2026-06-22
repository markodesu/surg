import HeroCarousel from "../components/HeroCarousel";
import TrustTiles from "../components/TrustTiles";
import WelcomeBlock from "../components/WelcomeBlock";
import ExpertiseTabs from "../components/ExpertiseTabs";
import ReviewsContactsSection from "../components/ReviewsContactsSection";

export default function Home() {
  return (
    <main className="min-h-screen text-slate-900">
      <HeroCarousel />
      <TrustTiles />
      <WelcomeBlock />
      <ExpertiseTabs />
      <ReviewsContactsSection />
    </main>
  );
}
