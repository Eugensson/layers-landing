import { Hero } from "@/components/hero";
import { Faqs } from "@/components/faqs";
import { Footer } from "@/components/footer";
import { NavBar } from "@/components/nav-bar";
import { Features } from "@/components/features";
import { LogoTicker } from "@/components/logo-ticker";
import { Introduction } from "@/components/introduction";
import { Integrations } from "@/components/integrations";
import { CallToAction } from "@/components/call-to-action";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <LogoTicker />
      <Introduction />
      <Features />
      <Integrations />
      <Faqs />
      <CallToAction />
      <Footer />
    </>
  );
}
