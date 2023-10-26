import styled from "@emotion/styled";
import Button from "../../ui/Button";
import { Card } from "./Card/Card";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 32px;
  padding: 16px 100px;
`;
const CardContainer = styled.div`
  display: flex;
  gap: 48px;
  @media (max-width: 1200px) {
    background-color: red;
    display: none;
  }
`;


function ListCards() {
  const {loading} = useSelector(state => state.user)
  const data = useSelector(state => state.user.user)
  console.log(data?.Pets)

  return (
    <Container>
      <h1 className="text-3xl font-extrabold">Your Pets</h1>
      <CardContainer>
      {

        data?.Pets.map(pet=>(<Card key={data.id} data={pet} />))
      }
        </CardContainer>

      <Button type="primary" size="large">
        <Link to="/pets">Otras mascostas perdidas</Link>
      </Button>

    </Container>
  );
}

export default ListCards;
