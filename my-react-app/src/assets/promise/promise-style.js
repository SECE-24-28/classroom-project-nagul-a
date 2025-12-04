import styled from "styled-components";

export const PromiseStyle = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4.5rem 1.25rem;

  /* Header */
  .promise {
    text-align: center;
    margin-bottom: 1.75rem;

    h2 {
      font-family: "Work Sans", "Inter", system-ui, -apple-system, Roboto,
        "Helvetica Neue", Arial, sans-serif;
      font-size: 48px;
      line-height: 1.05;
      font-weight: 800;
      color: #0b0b0b;
      margin: 0 0 0.5rem;
      letter-spacing: -0.5px;
    }

    .para {
      font-family: "Work Sans", Inter, sans-serif;
      color: #6f7b87; /* muted blue/gray */
      font-size: 17px;
      max-width: 820px;
      margin: 0 auto;
      line-height: 1.7;
    }
  }

  /* Grid of cards: three columns desktop, two on tablet, one on mobile */
  .element {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3.25rem 2.25rem;
    margin-top: 2.5rem;
    align-items: start;
  }

  /* Card */
  .element__item {
    /* a subtle card base; the top border color will be provided by the inline style */
    background: #ffffff;
    border-radius: 4px;
    padding: 1.25rem 1.5rem 1.5rem;
    position: relative;
    /* show only a thin top border (use inline borderColor to color it) */
    border-top: 4px solid transparent;
    box-shadow: 0 6px 22px rgba(12, 22, 30, 0.04);
    transition: transform 220ms ease, box-shadow 220ms ease;
    min-height: 170px;

    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 14px 38px rgba(12, 22, 30, 0.08);
    }
  }

  /* Icon + title row */
  .item {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 0.6rem;

    svg {
      width: 34px;
      height: 34px;
      flex: 0 0 34px;
      display: block;
      /* many inline svgs already specify color attribute; leave that intact */
    }

    .item__title {
      font-size: 20px;
      font-weight: 700;
      color: #55585b;
      font-family: "Work Sans", Inter, sans-serif;
    }
  }

  /* Card body text */
  .element__content {
    color: #6f7b87;
    font-size: 15.5px;
    line-height: 1.75;
    margin-top: 0.6rem;
    max-width: 42em;
  }

  /* small decorative rule above each card (optional, in case you prefer a thin full width bar)
     If you want the colored line offset from the card content like screenshot, uncomment/use this pseudo-element instead:
  .element__item::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 4px;
    background: currentColor; // will be inherited from inline style color if set
    border-radius: 2px 2px 0 0;
  }
  */

  /* Utility classes you mentioned earlier */
  .para2 {
    text-align: center;
    font-size: 40px;
    font-weight: 600;
    font-family: Inter, sans-serif;
    margin-bottom: 2rem;
  }

  .glan {
    color: rgba(41, 146, 194, 1);
  }

  /* Responsive */
  @media (max-width: 1024px) {
    .promise h2 {
      font-size: 40px;
    }
    .element {
      grid-template-columns: repeat(2, 1fr);
      gap: 2.25rem;
    }
  }

  @media (max-width: 680px) {
    padding: 3rem 1rem;
    .promise h2 {
      font-size: 30px;
    }
    .promise .para {
      font-size: 15px;
    }
    .element {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
    .element__item {
      padding: 1rem;
    }
    .item svg {
      width: 30px;
      height: 30px;
    }
    .item__title {
      font-size: 18px;
    }
    .element__content {
      font-size: 15px;
    }
  }
`;
