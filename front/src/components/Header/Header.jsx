import styled from "@emotion/styled";
import Button from "../../ui/Button";
import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa"; // Importa el ícono de hamburguesa
import { useDispatch, useSelector } from "react-redux"
import { logoutUser } from "../../redux/slices/user";


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
  const {user} = useSelector(state => state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleLogout = () =>{
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch(logoutUser())
    navigate('/')
  }
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
              {
                user ? (
                  <>
                  <p style={{fontWeight:"800"}}>
                    Hi {user.name.charAt(0).toUpperCase() + user.name.slice(1)} 
                  </p>
                  <button
                    onClick={() => handleLogout()} // Llama a la función handleLogout al hacer clic
                    style={{ cursor: "pointer" }}
                  >
                    Logout
                  </button>
                  </>
                ) : (
                  <>
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
                  </>
                )
              }
              
            </div>
          </li>
        </Options>
      </Navbar>
    </Container>
  );
}
