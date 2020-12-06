import React from 'react';
import styled from 'styled-components';
import Button from 'components/UI/Button/Button';

const Wrapper = styled.div`
  text-align: center;
  wdith: 100%;
  height: calc(100vh - 10.9rem);
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 576px) {
    height: calc(100vh - 31rem);
  }

  h1 {
    font-weight: 300;
    font-size: 10rem;
    margin-bottom: 5rem;

    @media (max-width: 576px) {
      font-size: 6rem;
    }
  }

  h2 {
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  p {
    opacity: 1;
    transform: translateY(0);
  }
`;

const PageNotFound = () => {
  return (
    <Wrapper>
      <h1>Ooops!</h1>
      <h2>404 - Page not found</h2>
      <p>That page doesn't exist or is unavailable.</p>
    </Wrapper>
  );
};

export default PageNotFound;
