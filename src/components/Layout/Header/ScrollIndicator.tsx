import React from 'react';
import styled from 'styled-components';
import scrollTo from 'gatsby-plugin-smoothscroll';

import arrow from 'icons/arrow.svg';
import { bounce } from 'styles/animations';

const Wrapper = styled.div`
  display: none;
  position: absolute;
  bottom: 5rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;

  @media (max-width: 567px) {
    display: block;
  }

  button {
    display: block;
    font-weight: 400;
    text-transform: uppercase;
    color: white;
    letter-spacing: 3px;
    transform: translateY(0);
    font-size: 1.5rem;
  }

  img {
    width: 3rem;
    height: 3rem;
    margin-top: 1.5rem;
    animation: ${bounce} 2s infinite;
  }

  button,
  img {
    opacity: 0.7;
  }
`;

const ScrollIndicator: React.FC = () => {
  return (
    <Wrapper>
      <button onClick={() => scrollTo('#about')}>Scroll</button>
      <img src={arrow} />
    </Wrapper>
  );
};

export default ScrollIndicator;
