import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="h-1000" />
    </>
  );
};

export default Home;
