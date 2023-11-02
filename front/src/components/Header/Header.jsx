import styled from "@emotion/styled";
import Button from "../../ui/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa"; // Importa el ícono de hamburguesa
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/slices/user";
import { useState } from "react";
import { AiOutlineClose, AiOutlinePoweroff } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { MdHelp, MdOutlinePets } from "react-icons/md";

const Container = styled.div`
  position: sticky;
  top: 0;
  padding: 0px 32px;
  background: #cecece;
  z-index: 1000;
`;

const Navbar = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
`;

const Session = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavbarPhone = styled.div`
  display: none;
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

const Options = styled.ul`
  display: flex;
  align-items: center;
  justify-content: end;
  li {
    cursor: pointer;
    padding: 0 12px;
    height: 100%;
    display: flex;
    align-items: center;
  }
  @media (max-width: 1200px) {
    margin-left: 0;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const HamburgerMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

export default function Header() {
  const [sideNav, setSideNav] = useState(false);

  const { user } = useSelector((state) => state.user);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("tokenExpiration");
    dispatch(logoutUser());
    navigate("/");
  };
  return (
    <Container>
      <Navbar>
        <Options>
          <li>
            <Link to="/">
              <h2 className="text-2xl py-4 ">Mascotopia 🐾</h2>
            </Link>
          </li>
          <li className={location.pathname === "/post" ? "bg-slate-400" : ""}>
            <Link to="/post">Add pet</Link>
          </li>
          <li className={location.pathname === "/pets" ? "bg-slate-400" : ""}>
            <Link to="/pets">More pets</Link>
          </li>
          <li className={location.pathname === "/about" ? "bg-slate-400" : ""}>
            <Link to="/about">About Us</Link>
          </li>
          <li className={location.pathname === "/contact" ? "bg-slate-400" : ""}>
            <Link to="/contact">Contact</Link>
          </li>
          <li
            className={location.pathname === "/mascotop-IA" ? "bg-slate-400" : ""}
          >
            <Link to="/mascotop-IA">Ask our AI</Link>
          </li>
        </Options>
        <NavbarPhone>
          <Link to="/">
            <h2 className="text-2xl py-4">Mascotopia 🐾</h2>
          </Link>
          <HamburgerMenu
            onClick={() => setSideNav(!sideNav)}
            className="cursor-pointer"
          >
            <FaBars size={30} />
          </HamburgerMenu>
        </NavbarPhone>
        <Session>
          {user ? (
            <>
              <Link to="/profile">
                <p style={{ fontWeight: "800" }}>
                  {user.name.charAt(0).toUpperCase() + user.name.slice(1)}{" "}
                  Profile
                </p>
              </Link>
              <button
                onClick={() => handleLogout()}
                style={{ cursor: "pointer" }}
              >
                Logout
              </button>
            </>
          ) : (
            location.pathname !== "/login" &&
            location.pathname !== "/signup" && (
              <>
                <Link to="/login">
                  <Button
                    type="secondary"
                    style={{ marginTop: "0" }}
                    size="small"
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button
                    type="primary"
                    style={{ marginTop: "0" }}
                    size="small"
                  >
                    Signup
                  </Button>
                </Link>
              </>
            )
          )}
        </Session>
      </Navbar>
      {sideNav ? (
        <div
          className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0"
          onClick={() => setSideNav(!sideNav)}
        ></div>
      ) : (
        ""
      )}

      <div
        className={
          sideNav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setSideNav(!sideNav)}
          size={25}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <Link to="/">
          <h2 className="text-2xl p-4">Mascotopia 🐾</h2>
        </Link>
        <nav>
          <ul className="flex flex-col p-4 text-gray-900">
            <Link to="/post">
              <li className="text-xl py-4 flex">
                <MdOutlinePets
                  size={25}
                  className="mr-4 text-white bg-black rounded-full"
                />
                Add Pet
              </li>
            </Link>
            <Link to="/pets">
              <li className="text-xl py-4 flex">
                <MdOutlinePets
                  size={25}
                  className="mr-4 text-white bg-black rounded-full"
                />
                More Pets
              </li>
            </Link>

            <Link to="/about">
              <li className="text-xl py-4 flex">
                <MdOutlinePets
                  size={25}
                  className="mr-4 text-white bg-black rounded-full"
                />
                About Us
              </li>
            </Link>
            <hr className="h-[2px] bg-gray-400 border-0 rounded" />
            <Link to="/contact">
              <li className="text-xl py-4 flex">
                <MdHelp
                  size={25}
                  className="mr-4 text-white bg-black rounded-full"
                />
                Contact
              </li>
            </Link>

            {user && (
              <>
                <li className="text-xl py-4 flex">
                  <BsPerson
                    size={25}
                    className="mr-4 text-white bg-black rounded-full"
                  />
                  My Account
                </li>
                <li
                  className="text-xl py-4 flex cursor-pointer"
                  onClick={() => handleLogout()}
                >
                  <AiOutlinePoweroff
                    size={25}
                    className="mr-4 text-white bg-black rounded-full"
                  />
                  Logout
                </li>
              </>
            )}

            {!user && (
              <div className="flex justify-around">
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
            )}
          </ul>
        </nav>
      </div>
    </Container>
  );
}
