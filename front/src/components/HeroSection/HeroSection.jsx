/* eslint-disable react/no-unescaped-entities */
import styled from "@emotion/styled";
import imgUrl from "../../assets/images/perritos.png";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 64px 16px;
  @media (max-width: 1000px) {
    padding: 32px 16px;
  }
`;
const HeroContainer = styled.div`
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
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
    display: none;
    @media (max-width: 1000px) {
      display: block;
    }
  }
`;
const RightContainer = styled.div`
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
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 700;
`;

const BlackBar = styled.div`
  height: 4px;
  background: black;
  flex-grow: 1;
  margin-left: 16px; /* Espacio entre el título y la barra */
`;

const Description = styled.p`
  font-size: 24px;
  margin-bottom: 36px;
`;

function HeroSection() {
  return (
    <Container>
      <HeroContainer>
        <LeftContainer>
          <TitleContainer>
            <Title>Find your best friend</Title>
            <BlackBar></BlackBar>
          </TitleContainer>
          <img src={imgUrl} alt="animalitos" />
          <Description>
            We know how hard it is to lose a furry friend. That's why our
            service is here to help you find it!
          </Description>
          <Link to={"/post"}>
            <Button type="primary" size="small">
              FIND MY PET
            </Button>
          </Link>
        </LeftContainer>
        <RightContainer>
          <img src={imgUrl} alt="animalitos" />
        </RightContainer>
      </HeroContainer>
    </Container>
  );
}

export default HeroSection;
