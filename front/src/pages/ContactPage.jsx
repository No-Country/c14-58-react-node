import { useRef, useState } from "react";
import styled from "@emotion/styled";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";
import Button from "../ui/Button";
import emailjs from "@emailjs/browser";

const ContactPageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormLabel = styled.label`
  font-size: 18px;
`;

const FormInput = styled.input`
  font-size: 16px;
  padding: 10px;
`;

const FormTextarea = styled.textarea`
  font-size: 16px;
  padding: 10px;
  height: 150px;
`;

const SubmitButton = styled(Button)`
  color: #fff;
  font-size: 16px;
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  margin: 0 auto;
`;

export default function ContactPage() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_n87kcll",
        "template_l1d1ogn",
        form.current,
        "EejymWz7DpIzWSaiy"
      )
      .then(() => {
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        alert("Gracias, mensaje enviado");
      })
      .catch((e) => console.error(e));
  };

  return (
    <>
      <Header />
      <ContactPageContainer>
        <h1>Contact Us</h1>
        <p>Feel free to get in touch with us using the form below.</p>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <FormLabel>Name:</FormLabel>
          <FormInput
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <FormLabel>Email:</FormLabel>
          <FormInput
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <FormLabel>Message:</FormLabel>
          <FormTextarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <SubmitButton type="primary">Submit</SubmitButton>
        </ContactForm>
      </ContactPageContainer>
      <Footer />
    </>
  );
}
