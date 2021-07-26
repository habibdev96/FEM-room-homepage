import styled from "styled-components";
import { textStyles } from "../abstracts/Mixins";
import { FaArrowRight } from "react-icons/fa";

const Container = styled.a`
  display: flex;
  align-items: center;
  gap: 3rem;
  cursor: pointer;

  &:hover,
  &:focus {
    .cta-link {
      margin-right: 1rem;
    }

    .cta-link,
    .cta-icon {
      color: var(--darkGray);
    }
  }

  .cta-link {
    ${textStyles}
    text-transform: uppercase;
    color: var(--veryDarkGray);
    font-size: var(--xs);
    letter-spacing: 1rem;
    transition: var(--mainTransition);
  }

  .cta-icon {
    color: var(--veryDarkGray);
    font-size: var(--xs);
    transition: var(--mainTransition);
  }
`;

const Cta = () => {
  return (
    <Container href="#!">
      <span className="cta-link" href="#!">
        Shop Now
      </span>
      <FaArrowRight className="cta-icon" />
    </Container>
  );
};

export default Cta;
