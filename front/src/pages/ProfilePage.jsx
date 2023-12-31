import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "../redux/slices/user";
import useToken from "../hooks/useToken";
import { Card } from "../components/AnimalsSection/Card/Card";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 32px;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(320px, 1fr));
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, minmax(290px, 1fr));
    gap: 10px;
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, minmax(290px, 1fr));
  }
  place-items: center;
  gap: 16px;
`;

const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 32px;
`;

const CompleteButton = styled.button`
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  border-radius: 8px;
`;

function Profile() {
  const data = useSelector((state) => state.user.user);
  const { token, errors } = useToken();

  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(getUser()).then(r => console.log("data", data, r));
    } else if (errors) {
      alert("Vuelve a iniciar sesion");
    }
  }, [token, dispatch, errors]);

  return (
    <>
      <Header />
      <ProfileContainer>
        {token ? (
          <>
            <InfoCard>
              <h1 className="text-3xl font-extrabold">Info</h1>
              <p>{data?.name}</p>
              <p>{data?.email}</p>
              <p>✆ {data?.tel}</p>
            </InfoCard>
            <h1 className="text-3xl font-extrabold">
              My Pets ({data?.Pets.length})
            </h1>
            <Wrapper>
              {data?.Pets.map((pet, index) => (
                <div key={index}>
                  <Card data={pet} />
                  <CompleteButton
                    className={`text-red ${
                      pet.completed
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-teal-600 cursor-pointer"
                    }`}
                  >
                    {pet.completed ? "Closed" : "Open"}
                  </CompleteButton>
                </div>
              ))}
            </Wrapper>
          </>
        ) : (
          <p>LogIn to see this</p>
        )}
      </ProfileContainer>
      <Footer />
    </>
  );
}

export default Profile;
