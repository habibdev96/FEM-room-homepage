import { useState } from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import NavLink from "./NavLink";
import Responsive from "../abstracts/Responsive";
import MobileMenuToggle from "./MobileMenuToggle";

const Nav = styled.nav`
  position: absolute;
  padding: 5rem;
  z-index: 500;

  ${Responsive.sm`
    padding: 2rem;
    width: 100%;
  `}
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;

  ${Responsive.xl`
    flex-direction: column;
  `}

  ${Responsive.md`
    flex-direction: row;
  `}

  .nav-logo {
    width: 10rem;
  }

  .nav-list {
    display: flex;
    gap: 5rem;

    ${Responsive.xl`
      flex-direction: column
    `}

    ${Responsive.md`
      flex-direction: row;
    `}

    ${Responsive.sm`
      display: none;
    `}
  }
`;

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

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
        <MobileMenuToggle isActive={isActive} setIsActive={setIsActive} />
      </Container>
    </Nav>
  );
};

export default Navbar;
