import styled from "@emotion/styled";
import imgUrl from "../../assets/images/perritos.png";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";

const NoPetsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  width: 100%;
  grid-column: span 3;
  background-color: #f8f9fa;
  text-align: center;
  padding: 0 20px;
  margin-bottom: 180px;
`;

const NoPetsTitle = styled.h1`
  font-size: 80px;
  margin-bottom: 24px;
`;

const NoPetsMessage = styled.p`
  font-size: 24px;
  margin-bottom: 24px;
`;

const NoPetsImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  margin-bottom: 40px;
`;

const NoPets = () => {
  return (
    <NoPetsContainer>
      <NoPetsTitle>No Pets Found</NoPetsTitle>
      <NoPetsImage src={imgUrl} alt="Pet" />
      <NoPetsMessage>
        Oops! There are no pets available at the moment.
      </NoPetsMessage>
      <Link to="/post">
        <Button type="primary" size="small">
          ADD PET
        </Button>
      </Link>
      <Link to="/home">
        <Button type="primary" size="small">
          Go Back Home
        </Button>
      </Link>
    </NoPetsContainer>
  );
};

export default NoPets;
