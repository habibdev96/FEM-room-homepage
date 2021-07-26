import styled from "styled-components";
import { textStyles } from "../abstracts/Mixins";

const Container = styled.li`
  .nav-link {
    ${textStyles}
    font-size: var(--xxs);
    color: var(--white);
  }
`;

const NavLink = ({ text }) => {
  return (
    <Container>
      <a className="nav-link" href="#!">
        {text}
      </a>
    </Container>
  );
};

export default NavLink;
