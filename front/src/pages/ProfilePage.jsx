import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "../redux/slices/user";
import useToken from "../hooks/useToken";
import { Card } from "../components/AnimalsSection/Card/Card";

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 32px;
  padding: 16px 40px;
`;

function Profile() {
  const data = useSelector((state) => state.user.user);

  const { token, errors } = useToken();

  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(getUser()).then((r) => console.log(r));
    } else if (errors) {
      alert("Vuelve a iniciar sesion");
    }
  }, [token, dispatch, errors]);

  console.log("profile log", data);

  return (
    <ProfileContainer>
      {token ? (
        <>
          <h1 className="text-3xl font-extrabold">Info</h1>
          <p>{data?.name}</p>
          <p>{data?.email}</p>
          <h1 className="text-3xl font-extrabold">
            My Pets ({data?.Pets.length})
          </h1>
          {data?.Pets.map((pet, index) => (
            <Card key={index} data={pet} />
          ))}
        </>
      ) : (
        <p>LogIn to see this</p>
      )}
    </ProfileContainer>
  );
}

export default Profile;
