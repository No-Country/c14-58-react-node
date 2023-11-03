/* eslint-disable react/no-unescaped-entities */
import styled from "@emotion/styled";
import imgUrl from "../../assets/images/recognition.png";
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
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: 700;
`;

const Description = styled.p`
  font-size: 24px;
  margin-top: 32px;
  margin-bottom: 16px;
`;

function Imgrecon() {
  return (
    <Container>
      <HeroContainer>
        <LeftContainer>
          <TitleContainer>
            <Title>Dogs & Cats facial recognition</Title>
            <Description>
              Tired of searching through hundreds of photos? With our service,
              you'll only see the photos you want to see
            </Description>
          </TitleContainer>

          <Link to={"/post"}>
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
              Publish pet
            </Button>
          </Link>
        </LeftContainer>
        <RightContainer>
          <img src={imgUrl} alt="animalitos" style={{ borderRadius: "32px" }} />
        </RightContainer>
      </HeroContainer>
    </Container>
  );
}

export default Imgrecon;
