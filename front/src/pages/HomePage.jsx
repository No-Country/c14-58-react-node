import AIInfo from "../components/AInfo";
import ListCards from "../components/AnimalsSection/ListCards";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Imgrecon from "../components/Imgrecon";

function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <ListCards />
      <Imgrecon />
      <AIInfo />
      <Footer />
    </>
  );
}

export default HomePage;