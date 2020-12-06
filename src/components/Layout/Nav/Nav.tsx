import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import LangDropdown from 'components/UI/LangDropdown/LangDropdown';

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 200;
  width: 6.5rem;
  height: 100vh;
  background: white;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 576px) {
    width: 100%;
    height: 10rem;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 3rem;
  }

  @media (max-width: 812px) and (orientation: landscape) {
    width: 6.5rem;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
`;

const StyledLink = styled(Link)`
  font-weight: 900;
  font-size: 2.5rem;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  margin: auto;

  @media (max-width: 576px) {
    writing-mode: initial;
    text-orientation: initial;
    margin: 0;
    order: 1;
  }

  @media (max-width: 812px) and (orientation: landscape) {
    font-size: 2.5rem;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    order: initial;
    margin: auto;
  }
`;

const Nav: React.FC = () => {
  return (
    <Wrapper>
      <LangDropdown />
      <StyledLink to="/">Suyeon.</StyledLink>
    </Wrapper>
  );
};

export default Nav;
