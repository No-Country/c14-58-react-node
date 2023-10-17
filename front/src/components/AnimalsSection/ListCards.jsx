import styled from "@emotion/styled";
import Button from "../../ui/Button";
import { Card } from "./Card/Card";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 32px;
  padding: 64px 100px;
`;
const CardContainer = styled.div`
  display: flex;
  gap:48px;
  @media (max-width: 1200px) {
    background-color: red;
    display:none;
  }
`;

const CardContainer2 = styled.div`
  display: none;
  gap: 48px;
  
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
  }
`;
const Header = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  h2 {
    font-family: "Montserrat";
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.1px;
    color: #373737;
  }
  h3 {
    font-family: "Montserrat";
    font-size: 36px;
    font-weight: 400;
    line-height: 48px;
    letter-spacing: 0.25px;
    color: #bf5f82;
  }
`;
const data1 = {
  type: "Lost",
  photo: "https://purina.com.pe/sites/default/files/styles/webp/public/2022-10/purina-que-sabes-de-los-perros-poodle_0.jpg.webp?itok=pi6SunYq",
  role: "tenant",
  active: false,
};
const data2 = {
  type: "Found",
  photo: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  role: "tenant",
  active: false,
};
const data3 = {
  type: "Found",
  photo: "https://mymodernmet.com/wp/wp-content/uploads/2018/11/dogs-catching-treats-christian-vieler-12.jpg",
  role: "tenant",
  active: false,
};
const data4 = {
  type: "Found",
  photo: "https://as01.epimg.net/diarioas/imagenes/2022/05/29/actualidad/1653826510_995351_1653826595_noticia_normal_recorte1.jpg",
  role: "tenant",
  active: false,
};
const data5 = {
  type: "Lost",
  photo: "https://mott.pe/noticias/wp-content/uploads/2016/04/Estos-perros-no-podr%C3%ADan-lucir-m%C3%A1s-adorables-en-esta-tierna-sesi%C3%B3n-de-fotos-1280x720.jpg",
  role: "tenant",
  active: false,
};
function ListCards() {
  return (
    <Container>


      <CardContainer>
        <Card data={data1} />
        <Card data={data2} />
        <Card data={data3} />

        
      </CardContainer>
      <Button type="primary" size="large">Otras mascostas perdidas</Button>
      <CardContainer2>
        <Card data={data4} />

        <Card data={data5} />
      </CardContainer2>
    </Container>
  );
}

export default ListCards