/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import About from "../components/About/About";
import ListCards from "../components/AnimalsSection/ListCards";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AIInfo from "../components/AInfo";
import { useNavigate } from "react-router-dom";
import useToken from "../hooks/useToken";
import Imgrecon from "../components/Imgrecon";

function LandingPage() {
  const { token } = useToken();
  console.log("token", token);
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  }, []);
  return (
    <>
      <Header />
      <HeroSection />
      <About />
      <Imgrecon />
      <AIInfo />
      <ListCards />
      <Footer />
    </>
  );
}

export default LandingPage;
