import styled from "@emotion/styled";
import imgUrl from "../../assets/images/perritos.png";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f9fa;
  text-align: center;
  padding: 0 20px;
`;

const NotFoundTitle = styled.h1`
  font-size: 80px;
  margin-bottom: 24px;
`;

const NotFoundMessage = styled.p`
  font-size: 24px;
  margin-bottom: 24px;
`;

const NotFoundImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  margin-bottom: 40px;
`;

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundTitle>404 Not Found</NotFoundTitle>
      <NotFoundImage src={imgUrl} alt="Pet" />
      <NotFoundMessage>
        Oops! The page you are looking for does not exist.
      </NotFoundMessage>
      <Link to="/home">
        <Button type="primary" size="small">
          Go Back Home
        </Button>
      </Link>
    </NotFoundContainer>
  );
};

export default NotFound;
