import styled from "@emotion/styled";
import imgUrl from "../../assets/images/ai-dog.png";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  padding: 64px 16px;
  @media (max-width: 1000px) {
    padding: 32px 16px;
  }
`;
const HeroContainer = styled.div`
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
`;
const LeftContainer = styled.div`
  max-width: 500px;
  @media (max-width: 1000px) {
    h1 {
      text-align: center;
      font-size: 48px;
    }
  }
  img {
    @media (max-width: 1000px) {
      display: block;
    }
  }
`;
const RightContainer = styled.div`
  max-width: 600px;
  img {
    display: block;
    @media (max-width: 1000px) {
      display: none;
    }
  }
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

const Title = styled.h1`
  font-size: 60px;
`;

const BlackBar = styled.div`
  height: 4px;
  background: black;
  flex-grow: 1;
  margin-left: 16px; /* Espacio entre el título y la barra */
`;

function AIInfo() {
  return (
    <Container>
      <HeroContainer>
        <LeftContainer>
          <img src={imgUrl} alt="animalitos" />
        </LeftContainer>
        <RightContainer>
          <TitleContainer>
            <Title>Empower your pet care with our AI assistance</Title>
            <BlackBar></BlackBar>
          </TitleContainer>

          <Link to={"/mascotop-IA"}>
            <Button
              type="primary"
              size="small"
              style={{
                paddingLeft: "40px",
                paddingRight: "40px",
                fontSize: "20px",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
            >
              Consult our AI now
            </Button>
          </Link>
        </RightContainer>
      </HeroContainer>
    </Container>
  );
}

export default AIInfo;
