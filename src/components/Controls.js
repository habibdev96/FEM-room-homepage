import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  bottom: 0.3rem;

  .control-btn {
    outline: 0;
    border: 0;
    background-color: var(--black);
    padding: 3rem;
    transition: var(--mainTransition);

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
