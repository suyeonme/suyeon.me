import React from 'react';
import styled from 'styled-components';

import heroImg from 'images/hero.jpg';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${heroImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top right;
  display: flex;
  align-items: center;
`;

const TextWrapper = styled.div`
  margin-left: 15rem;

  a {
    font-size: 7rem;
    font-weight: 900;
    line-height: 1.5;
  }

  p {
    margin-top: 3rem;
  }

  span {
    display: block;
    font-weight: 500;
  }
`;

interface Link {
  text: string;
  link: string;
}

const Header: React.FC = () => {
  const links: Link[] = [
    { text: 'ABOUT.', link: '#about' },
    { text: 'WORK.', link: '#work' },
    { text: 'CONTACT.', link: '#contact' },
  ];

  return (
    <Wrapper>
      <TextWrapper>
        <ul>
          {links.map((link) => (
            <li key={link.text}>
              <a href={link.link}>{link.text}</a>
            </li>
          ))}
        </ul>
        <p>
          <span>Suyeon Kang</span>
          Frontend Developer
        </p>
      </TextWrapper>
    </Wrapper>
  );
};

export default Header;
