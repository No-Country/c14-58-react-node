import styled from "@emotion/styled";

const Container = styled.div`
  background-color: #f5f5f6;
  width: 100%;
  margin-top: auto;
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
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 16px;
  }
`;

function Footer() {
  return (
    <Container>
      <FooterContainer>
        <span>&copy; {new Date().getFullYear()} - Mascotopia</span>
        <div>
          Made by{" "}
          <a
            href="https://hernancur.vercel.app/"
            target="blank"
            style={{ color: "blue" }}
          >
            Hernán Garcia
          </a>{" "}
          &{" "}
          <a
            href="https://www.linkedin.com/in/opaucarq/"
            target="blank"
            style={{ color: "blue" }}
          >
            Oliver Paucar
          </a>
        </div>
      </FooterContainer>
    </Container>
  );
}

export default Footer;
