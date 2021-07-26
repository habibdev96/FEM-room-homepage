import styled from "styled-components";
import aboutImageDark from "../images/image-about-dark.jpg";
import aboutImageLight from "../images/image-about-light.jpg";
import { headingStyles, textStyles } from "../abstracts/Mixins";
import Responsive from "../abstracts/Responsive";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;

  ${Responsive.lg`
    grid-template-columns: 1fr 1.5fr 1fr;
  `}

  ${Responsive.md`
    grid-template-columns: 1fr;
  `}

  .about-img {
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .about-info {
    padding: 5rem;
  }

  .about-title {
    ${headingStyles}
    color: var(--veryDarkGray);
    font-size: var(--xl);
    margin-bottom: 3rem;

    ${Responsive.md`
      font-size: var(--lg);
    `}
  }

  .about-desc {
    ${textStyles}
    color: var(--darkGray);
    font-size: var(--xxs);
  }
`;

const About = () => {
  return (
    <section>
      <Container>
        <img className="about-img" src={aboutImageDark} alt="about" />
        <div className="about-info">
          <h2 className="about-title">About our furniture</h2>
          <p className="about-desc">
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </div>
        <img className="about-img" src={aboutImageLight} alt="about" />
      </Container>
    </section>
  );
};

export default About;
