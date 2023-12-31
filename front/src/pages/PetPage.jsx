import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";
import usePets from "../hooks/usePets";
import { Link, useParams } from "react-router-dom";
import Button from "../ui/Button";
import WhatsAppModal from "../components/WhatsAppModal";
import { TbArrowBackUp } from "react-icons/tb";
import { editPet } from "../../utils/editPet";
import { useDispatch, useSelector } from "react-redux";
import { fetchPets } from "../redux/slices/pets";

function PetPage() {
  const { id } = useParams();
  const { pets, loading } = usePets();
  const [pet, setPet] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const petFiltered = pets.find((pet) => pet.id === id);
    setPet(petFiltered);
  }, [pets, id]);

  const { user } = useSelector((state) => state.user);

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
        {console.log(user?.Pets.map((obj) => obj.id).includes(id))}
        {user?.Pets.map((obj) => obj.id).includes(id) && (
          <div className="form-control w-52">
            <label
              className="cursor-pointer flex gap-4 items-center"
              onClick={() => {
                editPet({
                  id: id,
                  pet: {
                    completed: !pet?.completed,
                  },
                });
                dispatch(fetchPets());
              }}
            >
              <span className="text-xl font-semibold">Open/Close</span>
              <input
                type="checkbox"
                className="toggle toggle-primary"
                checked={!pet?.completed}
                style={{
                  backgroundColor: !pet?.completed ? "#047857" : "#CCC",
                  borderColor: !pet?.completed ? "#047857" : "#CCC",
                }}
              />
            </label>
          </div>
        )}
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
      <div className="max-w-2xl m-auto w-full pl-20 pb-5">
        <p className="text-xl">
          <b>{pet?.status}</b>
        </p>
        <p className="text-xl mt-4">
          <b>{pet?.post_date}</b>
        </p>

        <div className="my-8">
          <h4 className="text-4xl font-bold">Description</h4>
          <p className="text-xl">{pet?.description}</p>
        </div>

        <div className="my-2">
          <h4 className="text-2xl font-bold">Contact</h4>
          <p className="text-xl">
            {pet?.User?.first_name} {pet?.User?.surname}
          </p>
          <p>{pet?.User?.email}</p>
        </div>

        <WhatsAppModal number={pet?.User?.tel} />
      </div>

      <Footer />
    </>
  );
}

export default PetPage;
