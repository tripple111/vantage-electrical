import { Hero } from "@/components/hero";
import { TrustStats } from "@/components/trust-stats";
import { FeaturedServices } from "@/components/featured-services";
import { Reviews } from "@/components/reviews";
import { CtaBand } from "@/components/cta-band";

export default function Home() {
  return (
    <>
    <Hero />
    <TrustStats />
    <FeaturedServices />
    <Reviews />
    <CtaBand />
    </>
  );
}
