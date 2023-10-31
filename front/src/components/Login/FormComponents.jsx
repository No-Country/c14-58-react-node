import styled from "@emotion/styled";

export const ContainerSignup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  // padding-top: 100px;
  padding: 100px 10px 0;
  margin-bottom: 50px;
`;
export const Input = styled.div`
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
    color: #444;
    padding: 8px;
    border-color: #f48fb1;
    border-radius: 8px;
  }
`;
export const FormContainer = styled.div`
  max-width: 600px;
  width: 200%;
  background-color: white;
  padding: 32px;
  padding-bottom: 48px;

  margin: 0 auto;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;

`;
export const TitleForm = styled.h1`
  text-align: center;
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  margin-bottom: 50px;
`;