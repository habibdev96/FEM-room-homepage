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
  }

  .control-icon {
    color: var(--white);
    font-size: var(--md);
  }
`;

const Controls = () => {
  return (
    <Container>
      <button className="control-btn">
        <FaChevronLeft className="control-icon" />
      </button>
      <button className="control-btn">
        <FaChevronRight className="control-icon" />
      </button>
    </Container>
  );
};

export default Controls;
