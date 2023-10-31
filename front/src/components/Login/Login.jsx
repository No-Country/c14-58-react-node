import styled from "@emotion/styled";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import {BsEyeFill, BsEyeSlashFill} from "react-icons/bs"

import { useDispatch, useSelector } from "react-redux";
import { getUser, loginUser } from "../../redux/slices/user";
import { useEffect, useState } from "react";

const ContainerSignup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  padding-top: 100px;
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

`;
const TitleForm = styled.h1`
  text-align: center;
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  margin-bottom: 50px;
`;
function Login() {
  const { register, handleSubmit } = useForm();
  const { error, loading } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const petPost = localStorage.getItem("petPost");

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  }, []);

  return (
    <>
      <ContainerSignup>
        <FormContainer className="relative">
          <TitleForm>Login Account</TitleForm>
          <Form
            onSubmit={handleSubmit((data) => {
              dispatch(loginUser(data))
              .then(result => {
                dispatch(getUser())
                if(petPost) {navigate("/post")}
                else if(result.payload.token){
                  
                  navigate("/home")
                }
              })
            })}
          >
            <Input>
              <label htmlFor="">EMAIL</label>
              <input {...register("email")} placeholder="user@mail.com" />
            </Input>

            <Input>
              <label htmlFor="">PASSWORD</label>
              <div className="flex justify-between items-center border-[#f48fb1] border-[1px] rounded-[8px] ">

              <input className="border-none w-full p-0"
                {...register("password")}
                placeholder="******"
                type={showPassword ? 'text' : 'password'}
                />

                <button className="mt-0 border-none pr-2 text-gray-500" type="button" onClick={togglePasswordVisibility}>
                  {showPassword ? (<BsEyeSlashFill size={24}/>): (<BsEyeFill size={24}/>)}
                </button>
              </div>
            </Input>

            <Button className = "mt-4 mx-auto" type="primary">{loading ? "Loading..." : "LOGIN"}</Button>
            
            {error && (<p style={{background:"#ccc",padding:"4px 8px", color:"red", textAlign: "center", marginTop: "8px"}}>{error}</p>)}
          </Form>
          <span className="absolute right-4 bottom-2 text-sm">
            ¿No tienes una cuenta? <Link to="/signup" className="text-[#1b74e4] font-semibold text-sm">
                        Regístrate
                      </Link>
          </span>
        </FormContainer>
      </ContainerSignup>
    </>
  );
}

export default Login;
