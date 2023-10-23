import { useEffect } from "react";
import About from "../components/About/About";
import ListCards from "../components/AnimalsSection/ListCards";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import { useDispatch, useSelector } from "react-redux";
import { fetchPets } from "../redux/slices/pets";

function LandingPage() {
  const dispatch = useDispatch();
  const pets = useSelector((state) => state.pets.list);
  const loading = useSelector((state) => state.pets.loading);
  const error = useSelector((state) => state.pets.error);

  useEffect(() => {
    // solicitud al back
    dispatch(fetchPets());
  }, [dispatch]);

  console.log("pets", pets);
  console.log("loading", loading);
  console.log("error", error);

  return (
    <>
      <Header />
      <HeroSection />
      <About />
      <ListCards loading={loading} error={error} pets={pets} />
      <Footer />
    </>
  );
}

export default LandingPage;
