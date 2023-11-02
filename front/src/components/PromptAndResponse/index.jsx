import { useState } from "react";
import styled from "@emotion/styled";
import getPrompt from "../../hooks/usePrompt";

const Chat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  height: 83vh;
  padding-top: 50px;
  margin-top: 20px;
`;

const Input = styled.input`
  width: 700px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Response = styled.textarea`
  width: 50%;
  padding: 10px;
  height: 100%;
  border-radius: 5px;
  border: none;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

const SubmitButton = styled.button`
  background-color: #f48fb1;
  color: white;
  font-family: sans-serif;
  font-size: 14px;
  padding: 10px 60px;
  border-radius: 16px;
  border: none;
  margin: 10px 0px;
  cursor: pointer;
  &:disabled {
    color: grey;
    opacity: 0.7;
    cursor: default;
  }
`;

export default function PromptAndResponse() {
  const [response, setResponse] = useState("");
  const [textInput, setTextInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = async (event) => {
    setTextInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const text = await getPrompt(textInput);
    if (!text) alert("Algo salio mal");
    else {
      setResponse(text);
      setLoading(false);
    }
  };

  return (
    <Chat>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="How can I teach my cat to not climb on the sofa?..."
          onChange={handleInputChange}
        />
        <SubmitButton type="submit">Send to Mascotop-IA</SubmitButton>
      </Form>
      {loading ? (
        <span>Generating... Please wait</span>
      ) : (
        <Response value={response} readOnly />
      )}
    </Chat>
  );
}
