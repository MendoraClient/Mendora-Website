import Navbar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";

const Main = () => {
  return (
    <>
      <div className="relative min-h-screen  text-white">
        <div className="bg-block-grid fixed inset-0 pointer-events-none -z-10" />

        <main className="relative z-10">

          <HeroSection />
          <FeaturesSection />
        </main>
      </div>
    </>
  );
};

export default Main;
