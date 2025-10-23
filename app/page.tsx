import { Hero } from "@/components/hero";
import { Faqs } from "@/components/faqs";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Features } from "@/components/features";
import { LogoTicker } from "@/components/logo-ticker";
import { Introduction } from "@/components/introduction";
import { Integrations } from "@/components/integrations";
import { CallToAction } from "@/components/call-to-action";

const Home = () => {
  return (
    <>
      <Navbar />
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
};

export default Home;
