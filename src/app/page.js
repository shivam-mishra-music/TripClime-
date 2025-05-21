import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import TrendingPlaces from "./components/TrendingPlaces";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TrendingPlaces />
      <Footer />
    </>
  );
}
