import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import gsap from 'gsap';

import heroImg from 'images/hero.jpg';
import { moveToLeft } from 'styles/animations';

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

  p {
    margin-top: 3rem;
  }

  span {
    display: block;
    font-weight: 500;
  }
`;

const Navs = styled.ul`
  a {
    font-size: 7rem;
    font-weight: 900;
    line-height: 1.7;
  }

  li:hover {
    animation: ${moveToLeft} 0.3s ease-in forwards;
  }
`;

const Links = styled.ul`
  li {
    display: inline-block;
    margin-top: 3rem;
    margin-right: 1rem;
  }
`;

interface Link {
  text: string;
  link: string;
}

const Header: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          profiles {
            linkedin
            github
            blog
          }
        }
      }
    }
  `);

  const navLinks: Link[] = [
    { text: 'ABOUT.', link: '#about' },
    { text: 'WORK.', link: '#work' },
    { text: 'CONTACT.', link: '#contact' },
  ];

  const pageLinks: Link[] = [
    { text: 'Blog |', link: data.site.siteMetadata.profiles.blog },
    { text: 'Github |', link: data.site.siteMetadata.profiles.github },
    { text: 'Linkedin', link: data.site.siteMetadata.profiles.linkedin },
  ];

  useEffect(() => {
    gsap.to('#header-text', {
      opacity: 1,
      stagger: 0.4,
      y: 0,
      duration: 1,
      ease: 'power2.inOut',
    });
  }, []);

  return (
    <Wrapper>
      <TextWrapper>
        <Navs id="header-text">
          {navLinks.map((link) => (
            <li key={link.text}>
              <a href={link.link}>{link.text}</a>
            </li>
          ))}
        </Navs>
        <p id="header-text">
          <span>Suyeon Kang</span>
          Frontend Developer
        </p>
        <Links id="header-text">
          {pageLinks.map((link) => (
            <li key={link.text}>
              <a href={link.link} target="_blank">
                {link.text}
              </a>
            </li>
          ))}
        </Links>
      </TextWrapper>
    </Wrapper>
  );
};

export default Header;
