import { useEffect, useState, useRef } from "react";
import styled from "@emotion/styled";
import getPrompt from "../../hooks/usePrompt";
import RecommendationsSection from "./RecommendationsSection";

const Chat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  height: 100%;
  padding: 50px 20px 0;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  max-width: 800px;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Response = styled.textarea`
  background: white;
  width: 100%;
  max-width: 1024px;
  padding: 10px;
  height: 30vh;
  border-radius: 5px;
  border: none;
  resize: none;
`;

const Form = styled.form`
  width: 90%;
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

const Title = styled.h2`
  font-family: sans-serif;
  font-size: 24px;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

export default function PromptAndResponse() {
  const inputRef = useRef();
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
    if (!text) alert("Something went wrong, try again later.");
    else {
      setResponse(textInput + "\n\n" + text); // incluimos la pregunta en la respuesta antes de borrar el input
      setLoading(false);
    }
    setTextInput(""); // Reiniciamos el texto del input
  };
  useEffect(() => {
    inputRef.current.focus();
    if (response && !loading) {
      const responseElement = document.getElementById("response-textarea");
      responseElement.style.height = "auto";
      responseElement.style.height = responseElement.scrollHeight + "px";
    }
  }, [response, loading]);
  return (
    <Chat>
      <Title>How can I care for my pet? Ask or write about a problem</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          ref={inputRef}
          placeholder="How can I teach my cat to not climb on the sofa?..."
          onChange={handleInputChange}
          value={textInput}
          // El input muestra lo que diga el estado (value)
        />
        <SubmitButton type="submit">Send to Mascotop-IA</SubmitButton>
      </Form>
      {loading ? (
        <div
          style={{
            height: "25vh",
            backgroundColor: "#fff",
            width: "55%",
            textAlign: "center",
            borderRadius: "10px",
          }}
        >
          Generating... Please wait
        </div>
      ) : (
        <Response id="response-textarea" value={response} readOnly />
      )}
      <Title>Users recommendations</Title>
      <RecommendationsSection />
    </Chat>
  );
}
