import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { LogoTicker } from "@/components/logo-ticker";
import { Introduction } from "@/components/introduction";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoTicker />
      <Introduction />
      <div className="h-1000" />
    </>
  );
};

export default Home;
