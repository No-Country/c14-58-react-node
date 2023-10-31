import styled from "@emotion/styled";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { createUser, getUser } from "../../redux/slices/user";

const ContainerSignup = styled.div`
  padding: 0 16px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  padding-top: 50px;
`;
const Input = styled.div`
  display: flex;
  flex-direction: column;
  color: #373737;
  gap: 4px;
  label {
    font-family: Inter;
    font-size: 10px;
    font-weight: 400;
    line-height: 12px;
    letter-spacing: 1.5px;
    text-align: left;
  }
  input {
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.5px;
    text-align: left;
    color: #8e8e8e;
    padding: 8px;
    border-color: #f48fb1;
    border-radius: 8px;
  }
`;
const FormContainer = styled.div`
  max-width: 600px;
  width: 200%;
  background-color: white;
  padding: 32px;
  padding-bottom: 48px;
  margin: 0 auto;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4px;
  button {
    margin: 16px auto 0;
  }
`;
const TitleForm = styled.h1`
  text-align: center;
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
`;
function Signup() {
  const token = localStorage.getItem("token");
  // // console.log(token)
  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  }, []);
  const { register, handleSubmit } = useForm();
  const { loading } = useSelector((state) => state.user);
  const { error } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <ContainerSignup>
        <FormContainer className="relative">
          <TitleForm>Create your Account</TitleForm>
          <Form
            onSubmit={handleSubmit((data) => {
              dispatch(createUser(data)).then((result) => {
                dispatch(getUser());
                if (result.payload.token) {
                  navigate("/home");
                }
              });
            })}
          >
            <Input>
              <label htmlFor="">FIRST NAME</label>
              <input {...register("first_name")} placeholder="John" />
            </Input>
            <Input>
              <label htmlFor="">SURNAME</label>
              <input {...register("surname")} placeholder="Doe" />
            </Input>
            <Input>
              <label htmlFor="">EMAIL</label>
              <input {...register("email")} placeholder="user@mail.com" />
            </Input>
            <Input>
              <label htmlFor="">PASSWORD</label>
              <input
                {...register("password")}
                type="password"
                placeholder="******"
              />
            </Input>
            {/* <Input>
              <label htmlFor="">PASSWORD CONFIRMATION</label>
              <input {...register("password_confirmation")} placeholder="******" />
            </Input> */}

            <Button type="primary">
              {loading ? "Loading..." : "CREATE ACCOUNT"}
            </Button>
            {error && (<p style={{background:"#ccc",padding:"4px 8px", color:"red", textAlign: "center", marginTop: "8px"}}>{error}</p>)}

          </Form>
          <span className="absolute right-4 bottom-2 text-sm">
            ¿Ya tienes una cuenta? <Link to="/login" className="text-[#1b74e4] font-semibold text-sm">
                        Iniciar sesión
                      </Link>
          </span>
        </FormContainer>
      </ContainerSignup>
    </>
  );
}

export default Signup;
