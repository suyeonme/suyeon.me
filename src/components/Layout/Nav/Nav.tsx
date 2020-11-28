import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  width: 6rem;
  height: 100vh;
  background: white;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(Link)`
  font-weight: 900;
  font-size: 2.5rem;
  letter-spacing: 1px;
  writing-mode: vertical-rl;
  text-orientation: mixed;
`;

const Nav: React.FC = () => {
  return (
    <Wrapper>
      <StyledLink to="/">Suyeon.</StyledLink>
    </Wrapper>
  );
};

export default Nav;
