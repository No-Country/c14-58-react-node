import styled from "@emotion/styled";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";
import Search from "../../ui/Search";
import { FaBars } from "react-icons/fa"; // Importa el ícono de hamburguesa

const Container = styled.div`
  position: sticky;
  top: 0;
  padding: 8px 32px;
  background: #cecece;
  z-index: 1000;
`;

const Navbar = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.div`
  font-size: 36px;
  font-weight: 600;
`;

const Options = styled.ul`
  display: flex;
  gap: 48px;
  align-items: center;
  li {
    cursor: pointer;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;

const HamburgerMenu = styled.div`
  display: none;

  @media (max-width: 800px) {
    display: flex;
    align-items: center;
  }
`;

export default function Header() {
  return (
    <Container>
      <Navbar>
        <Logo><Link to="/">MascoTopia</Link></Logo>
        
        <HamburgerMenu>
          <FaBars size={30} /> 
        </HamburgerMenu>

        <Options>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>
            <div style={{ display: "flex", gap: "8px" }}>
              <Link to="/login">
                <Button type="secondary" size="small">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button type="primary" size="small">
                  Signup
                </Button>
              </Link>
            </div>
          </li>
        </Options>
      </Navbar>
    </Container>
  );
}
