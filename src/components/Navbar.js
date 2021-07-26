import styled from "styled-components";
import logo from "../images/logo.svg";
import NavLink from "./NavLink";

const Nav = styled.nav`
  position: absolute;
  padding: 5rem;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;

  .nav-logo {
    width: 10rem;
  }

  .nav-list {
    display: flex;
    gap: 5rem;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Container>
        <img className="nav-logo" src={logo} alt="room logo" />
        <ul className="nav-list">
          <NavLink text="home" />
          <NavLink text="shop" />
          <NavLink text="about" />
          <NavLink text="contact" />
        </ul>
      </Container>
    </Nav>
  );
};

export default Navbar;
