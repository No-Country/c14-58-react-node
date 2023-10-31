import styled from "@emotion/styled";
import Button from "../../ui/Button";
import { Card } from "./Card/Card";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"; // Importa useDispatch
import usePets from "../../hooks/usePets";
import { useEffect, useState } from "react";
import { fetchPets } from "../../redux/slices/pets";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 32px;
  padding: 16px 40px;
`;

function ListCards() {
  const data = useSelector((state) => state.user.user);
  const token = localStorage.getItem("token");
  const { pets, loading } = usePets();
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      dispatch(fetchPets());
    }
  }, [token, dispatch]);

  const [currentIndex, setCurrentIndex] = useState(0)
     
  const prevSlider = ()=>{
  const isFirstSlide = currentIndex === 0
  const newIndex = isFirstSlide ? pets.length - 1 : currentIndex -1
  setCurrentIndex(newIndex)
  }  
  
  const nextSlider = ()=>{
  const isLastSlide  = currentIndex === pets.length -1
  const newIndex = isLastSlide  ? 0: currentIndex + 1
  setCurrentIndex(newIndex)
  }
  // const moveToNextSlide = (slideIndex) =>{
  //   setCurrentIndex(slideIndex)
  //  }
  


  return (
    <Container>
      {token && (
        <h1 className="text-3xl font-extrabold">
          {data?.Pets.length > 0 ? "Your Pets" : "Recent Pets"}

        </h1>
      )}
      <div className="gap-2 justify-center hidden  lg:grid lg:grid-cols-3 ">
        {token && data?.Pets.length > 0
          ? data?.Pets.map((pet) => <Card key={pet.id} data={pet} />)
          : pets.slice(0, 3).map((pet) => <Card key={pet.id} data={pet} />)}
      </div>
      {loading || pets.length === 0 ? <h1>Loading</h1> :  (
        <div className='mx-auto py-4 px-4 relative group lg:hidden'>
        <Card
          key={pets[currentIndex]?.id} 
          data={pets[currentIndex]} />

        <div className=' absolute top-[50%] -translate-x-10 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-[#F48FB1] text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlider}/>
        </div>
        <div className='absolute top-[50%] translate-x-10 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-[#F48FB1] text-white cursor-pointer'>
            <BsChevronCompactRight onClick={ nextSlider}/>
        </div>
        
    </div>
      )}
      
      <Button type="primary" size="large">
        <Link to="/pets">Otras mascotas perdidas</Link>
      </Button>
    </Container>
  );
}

export default ListCards;
