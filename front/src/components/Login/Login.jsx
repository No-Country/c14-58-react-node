import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "../../ui/Button";

import { useDispatch, useSelector } from "react-redux"
import { loginUser } from "../../redux/slices/user";
import { useEffect } from "react";

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
  margin-bottom: 50px;
`;
function Login() {
  const { register, handleSubmit } = useForm();
  const {loading} = useSelector(state => state.user)
  const {error} = useSelector(state => state.user)
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const token = localStorage.getItem("token");
  // // console.log(token)
  useEffect(()=>{
    if (token) {
      navigate("/home");
    }
  },[])

  return (
    <>
      <ContainerSignup>
        <FormContainer>
          <TitleForm>Login Account</TitleForm>
          <Form
            onSubmit={handleSubmit((data) => {
              dispatch(loginUser(data)).then(result => {
                if(result.payload.token){
                  navigate('/home')
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
              <input {...register("password") } type="password" placeholder="******" />
            </Input>


            <Button type="primary">{loading ? 'Loading...' : 'LOGIN'}</Button>
            {error && (<p style={{background:"#ccc",padding:"4px 8px", color:"red", textAlign: "center", marginTop: "8px"}}>{error}</p>)}
          </Form>
        </FormContainer>
      </ContainerSignup>
    </>
  );
}

export default Login;
