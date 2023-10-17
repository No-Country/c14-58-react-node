import styled from "@emotion/styled";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Button from "../../ui/Button";

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
  let { state } = useLocation();
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  return (
    <>
      <ContainerSignup>
        <FormContainer>
          <TitleForm>Login Account</TitleForm>
          <Form
            onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
          >
            <Input>
              <label htmlFor="">EMAIL</label>
              <input {...register("EMAIL")} placeholder="user@mail.com" />
            </Input>

            <Input>
              <label htmlFor="">PASSWORD</label>
              <input {...register("phone")} placeholder="******" />
            </Input>


            <Button type="primary">LOGIN</Button>
          </Form>
        </FormContainer>
      </ContainerSignup>
    </>
  );
}

export default Login;
