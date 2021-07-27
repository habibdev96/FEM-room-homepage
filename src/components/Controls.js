import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Responsive from "../abstracts/Responsive";

const Container = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  bottom: 0;

  ${Responsive.md`
    top: -120%;
    left: 0;
  `}

  ${Responsive.sm`
    top: -111%;
    left: 0;
  `}

  .control-btn {
    outline: 0;
    border: 0;
    background-color: var(--black);
    padding: 3rem;
    transition: var(--mainTransition);

    ${Responsive.sm`
      padding: 1.5rem;  
    `}

    &:hover,
    &:focus {
      background-color: var(--veryDarkGray);
    }
  }

  .control-icon {
    color: var(--white);
    font-size: var(--md);
  }
`;

const Controls = ({ index, setIndex }) => {
  return (
    <Container>
      <button className="control-btn" onClick={() => setIndex(index - 1)}>
        <FaChevronLeft className="control-icon" />
      </button>
      <button className="control-btn" onClick={() => setIndex(index + 1)}>
        <FaChevronRight className="control-icon" />
      </button>
    </Container>
  );
};

export default Controls;
