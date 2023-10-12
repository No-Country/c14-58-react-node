import styled from "@emotion/styled";
import Button from "../../ui/Button";

const Container = styled.div`
  padding: 8px 32px;
  background: #cecece;
  
`
const Navbar = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
`
const Logo = styled.div`
  background-color: red;
`
const Options = styled.ul`
  display: flex;
  gap: 32px;
  align-items: center;
  li{
    cursor: pointer;
  }
`
export default function Header (){
  return (
    <Container>
      <Navbar>
        <Logo>MascoTopia</Logo>
        <Options>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>
            <Button type="primary" size="small">Login</Button>
          </li>
        </Options>
      </Navbar>
    </Container>
    
  )
}