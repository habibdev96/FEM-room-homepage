import { useState, useEffect } from "react";
import styled from "styled-components";
import { headingStyles, textStyles } from "../abstracts/Mixins";
import Navbar from "./Navbar";
import Controls from "./Controls";
import Cta from "./Cta";
import showcaseData from "../data";
import Responsive from "../abstracts/Responsive";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  align-items: center;
  overflow-x: hidden;

  ${Responsive.xl`
    grid-template-columns: repeat(2, 1fr); 
  `}

  ${Responsive.md`
    grid-template-columns: 1fr;
  `}

  .hero {
    height: 100%;
  }

  .hero-img {
    pointer-events: none;
    height: 100%;
  }

  .info {
    position: relative;
    height: 100%;
  }

  .info-content {
    padding: 15rem 10rem;

    ${Responsive.xl`
      padding: 15rem 5rem;     
    `}

    ${Responsive.md`
      padding: 5rem;     
    `}
  }

  .info-title {
    ${headingStyles}
    font-size: 5rem;
    color: var(--veryDarkGray);

    ${Responsive.sm`
      font-size: var(--lg);
    `}
  }

  .info-lead {
    ${textStyles}
    font-size: var(--xxs);
    color: var(--darkGray);
    padding: 4rem 0;
  }

  .img-container {
    overflow: hidden;
    height: 100%;
  }

  .info-content.activeSlide,
  .img-container.activeSlide {
    opacity: 1;
    display: block;
    animation: fadeIn 1s linear;
  }

  .info-content.lastSlide,
  .img-container.lastSlide {
    opacity: 0;
    display: none;
    visibility: hidden;
  }

  .info-content.nextSlide,
  .img-container.nextSlide {
    opacity: 0;
    display: none;
    visibility: hidden;
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

const Showcase = () => {
  const [showcase] = useState(showcaseData);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = showcase.length - 1;

    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, showcase]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 15000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section>
      <Container>
        <div className="hero">
          <Navbar />
          {showcase.map((show, showcaseIndex) => {
            const { desktopHero, id } = show;

            let position = "nextSlide";

            if (showcaseIndex === index) {
              position = "activeSlide";
            }

            if (
              showcaseIndex === index - 1 ||
              (index === 0 && showcaseIndex === showcase.length - 1)
            ) {
              position = "lastSlide";
            }

            return (
              <div className={`img-container ${position}`} key={id}>
                <img className="hero-img" src={desktopHero} alt="hero" />
              </div>
            );
          })}
        </div>
        <div className="info">
          {showcase.map((show, showcaseIndex) => {
            const { title, description, id } = show;

            let position = "nextSlide";

            if (showcaseIndex === index) {
              position = "activeSlide";
            }

            if (
              showcaseIndex === index - 1 ||
              (index === 0 && showcaseIndex === showcase.length - 1)
            ) {
              position = "lastSlide";
            }

            return (
              <div className={`info-content ${position}`} key={id}>
                <h1 className="info-title">{title}</h1>
                <p className="info-lead">{description}</p>
                <Cta />
              </div>
            );
          })}
          <Controls index={index} setIndex={setIndex} />
        </div>
      </Container>
    </section>
  );
};

export default Showcase;
