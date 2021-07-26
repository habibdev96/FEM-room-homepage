import styled from "styled-components";
import desktopHeroOne from "../images/desktop-image-hero-1.jpg";
import { headingStyles, textStyles } from "../abstracts/Mixins";
import Navbar from "./Navbar";
import Controls from "./Controls";
import Cta from "./Cta";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  align-items: center;
  min-height: 50vh;

  .hero-img {
    pointer-events: none;
  }

  .info {
    position: relative;
    height: 100%;
  }

  .info-content {
    padding: 15rem 10rem;
  }

  .info-title {
    ${headingStyles}
    font-size: 5rem;
    color: var(--veryDarkGray);
  }

  .info-lead {
    ${textStyles}
    font-size: var(--xxs);
    color: var(--darkGray);
    padding: 4rem 0;
  }
`;

const Showcase = () => {
  return (
    <section>
      <Container>
        <div className="hero">
          <Navbar />
          <img className="hero-img" src={desktopHeroOne} alt="hero" />
        </div>
        <div className="info">
          <div className="info-content">
            <h1 className="info-title">Discover innovative ways to decorate</h1>
            <p className="info-lead">
              We provide unmatched quality, comfort, and style for property
              owners across the country. Our experts combine form and function
              in bringing your vision to life. Create a room in your own style
              with our collection and make your property a reflection of you and
              what you love.
            </p>
            <Cta />
          </div>
          <Controls />
        </div>
      </Container>
    </section>
  );
};

export default Showcase;
