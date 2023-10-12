import styled from "@emotion/styled";
import { DiRuby, DiReact } from "react-icons/di";
const Container = styled.div`
  background-color: #f5f5f6;
  width: 100%;
  
`;
const FooterContainer = styled.div`
max-width: 1200px;
  display: flex;
  justify-content: space-between;
  font-family: "Montserrat";
  padding: 1rem 2rem;
  margin: 0 auto;
  span {
    color: var(--DarkGray, #373737);
    text-align: center;

    /* Regular/Subtitle2 */
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px; /* 128.571% */
    letter-spacing: 0.1px;
  }
  @media (max-width: 600px){
    flex-direction:column;
    gap: 16px
  }
`;
const Source = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  div {
    display: flex;
    gap: 8px;
    align-items: center
  }
  span,
  p {
    color: var(--DarkGray, #373737);
    text-align: center;

    /* Regular/Subtitle2 */
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px; /* 128.571% */
    letter-spacing: 0.1px;
  }
`;
function Footer() {
  return (
    <Container>
      <FooterContainer>
        <span>&copy; {new Date().getFullYear()} - Mascotopia</span>

        <Source>
          <span>Source Code</span>
          <div>
              <DiReact size={24} /> <span>React responsive SPA</span>
          </div>
        </Source>
        <span>NoCountry - C14 Project</span>
      </FooterContainer>
    </Container>
  );
}

export default Footer;
