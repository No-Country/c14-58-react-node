import styled from "@emotion/styled";
import Button from "../../ui/Button";
import { Card } from "./Card/Card";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"; // Importa useDispatch
import usePets from "../../hooks/usePets";
import { useEffect } from "react";
import { fetchPets } from "../../redux/slices/pets";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 32px;
  padding: 16px 100px;
`;


function ListCards() {
  const { loading } = useSelector((state) => state.user);
  const data = useSelector((state) => state.user.user);
  const token = localStorage.getItem("token");
  const { pets } = usePets();
  console.log(pets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(fetchPets()); 
    }
  }, [token, dispatch]);

  return (
    <Container>
      {token && <h1 className="text-3xl font-extrabold">Your Pets</h1>}
      <div className="flex gap-2 justify-center">
      {token ? data?.Pets.map((pet) => <Card key={pet.id} data={pet} />) : pets.slice(0,4).map((pet) => <Card key={pet.id} data={pet} />)}
      </div>

      <Button type="primary" size="large">
        <Link to="/pets">Otras mascotas perdidas</Link>
      </Button>
    </Container>
  );
}

export default ListCards;
