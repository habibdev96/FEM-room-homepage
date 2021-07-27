import styled from "styled-components";
import NavLink from "./NavLink";

const Aside = styled.aside`
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  border-radius: 2rem;
  width: 85%;
  margin: 5rem auto 0 auto;
  animation: fadeIn 0.5s linear;

  @media (min-width: 600px) {
    display: none;
  }

  .menu-content {
    align-items: center;
    flex-direction: column;
    padding: 5rem;
  }

  .menu-links {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 5rem;
    text-align: center;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

const MobileMenu = ({ isActive }) => {
  if (isActive) {
    return (
      <Aside>
        <div className="menu-content">
          <ul className="menu-links">
            <NavLink text="home" />
            <NavLink text="shop" />
            <NavLink text="about" />
            <NavLink text="contact" />
          </ul>
        </div>
      </Aside>
    );
  } else {
    return null;
  }
};

export default MobileMenu;
