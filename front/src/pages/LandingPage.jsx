import { useEffect } from "react";
import About from "../components/About/About";
import ListCards from "../components/AnimalsSection/ListCards";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate()
  useEffect(()=>{
    if (token) {
      navigate("/home");
    }
  },[])
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
