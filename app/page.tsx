import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { LogoTicker } from "@/components/logo-ticker";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoTicker />
      <div className="h-1000" />
    </>
  );
};

export default Home;
