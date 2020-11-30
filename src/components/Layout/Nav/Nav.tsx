import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 200;
  width: 6rem;
  height: 100vh;
  background: white;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 576px) {
    width: 100%;
    height: 10rem;
    justify-content: flex-start;
    padding-left: 3rem;
  }

  @media (max-width: 812px) and (orientation: landscape) {
    width: 6rem;
    height: 100vh;
    padding-left: 0;
    justify-content: center;
  }
`;

const StyledLink = styled(Link)`
  font-weight: 900;
  font-size: 2.5rem;
  writing-mode: vertical-rl;
  text-orientation: mixed;

  @media (max-width: 576px) {
    writing-mode: initial;
    text-orientation: initial;
  }

  @media (max-width: 812px) and (orientation: landscape) {
    font-size: 2.5rem;
    writing-mode: vertical-rl;
    text-orientation: mixed;
  }
`;

const Nav: React.FC = () => {
  return (
    <Wrapper>
      <StyledLink to="/">Suyeon.</StyledLink>
    </Wrapper>
  );
};

export default Nav;
