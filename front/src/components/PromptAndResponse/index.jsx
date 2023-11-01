import { useState } from "react";
import styled from "@emotion/styled";

const Chat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  height: auto;
  padding: 100px;
  margin-top: 20px;
  border: 1px solid #ccc;
`;

const Input = styled.input`
  width: 50%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Response = styled.textarea`
  width: 50%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  resize: none;
  pointer-events: none;
  outline: none;
`;

export default function PromptAndResponse() {
  const [response, setResponse] = useState("");

  // Imagina que esta función se conecta con la API de OpenAI y obtiene la respuesta
  const getAIResponse = async (prompt) => {
    // Aquí iría el código para obtener la respuesta de la API de OpenAI
    // Por ahora, solo devolveremos una respuesta simulada
    console.log(prompt);
    return "Response...";
  };

  const handleInputChange = async (event) => {
    const prompt = event.target.value;
    const aiResponse = await getAIResponse(prompt);
    setResponse(aiResponse);
  };

  return (
    <Chat>
      <Input
        placeholder="How can I teach my cat not to climb on the sofa?..."
        onChange={handleInputChange}
      />
      <Response value={response} readOnly />
    </Chat>
  );
}
