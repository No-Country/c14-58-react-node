import About from "../components/About/About";
import ListCards from "../components/AnimalsSection/ListCards";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";

function LandingPage() {
  return (
    <>
      <Header />
      <HeroSection />
      <About />
      <ListCards />
      <Footer />
    </>
  );
}

export default LandingPage;
