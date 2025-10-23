import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Features } from "@/components/features";
import { LogoTicker } from "@/components/logo-ticker";
import { Introduction } from "@/components/introduction";
import { Integrations } from "@/components/integrations";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoTicker />
      <Introduction />
      <Features />
      <Integrations />
      <div className="h-1000" />
    </>
  );
};

export default Home;
