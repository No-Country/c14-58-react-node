import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";
import usePets from "../hooks/usePets";
import { Link, useParams } from "react-router-dom";
import Button from "../ui/Button";
import WhatsAppModal from "../components/WhatsAppModal";
import { TbArrowBackUp } from "react-icons/tb";

function PetPage() {
  const { id } = useParams();
  const { pets, loading } = usePets();
  const [pet, setPet] = useState({});

  useEffect(() => {
    const petFiltered = pets.find((pet) => pet.id === id);
    setPet(petFiltered);
  }, [pets, id]);

  return (
    <>
      <Header />
      <div className="max-w-5xl mx-auto w-full flex justify-between items-center">
        <Link to={-1}>
          <Button className="my-4">
            <TbArrowBackUp size={24} />
            <span className="text-2xl font-semibold">Back</span>
          </Button>
        </Link>
      </div>
      <div className="mx-auto max-w-7xl px-8">
        <h1 className="text-6xl font-bold text-center mb-8">{pet?.title}</h1>
        {loading ? (
          <h1 className="text-center text-2xl">Loading...</h1>
        ) : (
          <div className="h-[200px] md:h-[300px]">
            <img
              className="h-full mx-auto rounded-lg"
              src={pet?.image}
              alt={pet?.title}
            />
          </div>
        )}
      </div>
      <div className="max-w-2xl mx-auto w-full pl-20 pb-5">
        <p className="text-xl font-bold">{pet?.status.toUpperCase()}</p>
        <p className="text-xl mt-4">{pet?.post_date}</p>
        <div className="my-8">
          <h3 className="text-2xl font-bold">Description</h3>
          <p className="text-xl">{pet?.description}</p>
        </div>
        <div className="my-2">
          <h3 className="text-2xl font-bold">Contact</h3>
          <p className="text-xl">
            {pet?.User?.first_name} {pet?.User?.surname}
          </p>
          <p className="text-xl">{pet?.User?.email}</p>
        </div>
        <span>Send a message!</span> <br></br>
        <WhatsAppModal number={pet?.User?.tel} />
      </div>

      <Footer />
    </>
  );
}

export default PetPage;
