import { useState } from "react";
import styled from "@emotion/styled";
import getPrompt from "../../hooks/usePrompt";

const Chat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  height: 100vh;
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
  height: auto;
  border-radius: 5px;
  border: none;
`;

export default function PromptAndResponse() {
  const [response, setResponse] = useState("");
  const [textInput, setTextInput] = useState("");

  const handleInputChange = async (event) => {
    setTextInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const text = await getPrompt(textInput);
    console.log("textito", text);
    if (!text) alert("Algo salio mal");
    else setResponse(text);
  };

  return (
    <Chat>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="How can I teach my cat not to climb on the sofa?..."
          onChange={handleInputChange}
        />
        <button type="submit">Send</button>
      </form>
      <span>Response</span>
      <Response value={response} readOnly />
    </Chat>
  );
}
