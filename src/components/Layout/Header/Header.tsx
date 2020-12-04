import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';
import gsap from 'gsap';

import heroImg from 'images/hero.jpg';
import { moveToLeft } from 'styles/animations';
import ScrollIndicator from 'components/Layout/Header/ScrollIndicator';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${heroImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left top;
  display: flex;
  align-items: center;

  @media (max-width: 1200px) {
    background-position: 25%;
  }

  @media (max-width: 576px) {
    background-position: 40%;
  }
`;

const TextWrapper = styled.div`
  margin-left: 15rem;

  @media (max-width: 1200px) {
    margin-left: 10rem;
    transform: translateY(-10rem);
  }

  @media (max-width: 576px) {
    margin-left: 3rem;
    transform: translateY(-10rem);
  }

  @media (max-width: 812px) and (orientation: landscape) {
    transform: translateY(0);
    margin-left: 6rem;
  }

  p {
    margin-top: 3rem;

    @media (max-width: 576px) {
      font-size: 2rem;
    }
  }

  span {
    display: block;
    font-weight: 500;
    font-size: 1.8rem;

    @media (max-width: 576px) {
      font-size: 2.3rem;
    }
  }
`;

const Navs = styled.ul`
  @media (max-width: 576px) {
    display: none;
  }

  @media (max-width: 812px) and (orientation: landscape) {
    display: block;
  }

  button {
    font-size: 7rem;
    font-weight: 900;
    line-height: 1.7;

    @media (max-width: 1024px) and (orientation: landscape) {
      font-size: 5rem;
    }

    @media (max-width: 812px) and (orientation: landscape) {
      font-size: 4rem;
    }
  }

  li:hover {
    animation: ${moveToLeft} 1s cubic-bezier(0.22, 0.68, 0, 1.71) forwards;
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
              <button onClick={() => scrollTo(link.link)}>{link.text}</button>
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
      <ScrollIndicator />
    </Wrapper>
  );
};

export default Header;
