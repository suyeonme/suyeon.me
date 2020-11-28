import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import linkedin from 'icons/linkedin.svg';
import instagram from 'icons/instagram.svg';
import github from 'icons/github.svg';
import resume from 'icons/resume.svg';
import { revealText } from 'styles/animations';

const Wrapper = styled.footer`
  background-color: black;
  color: white;
  padding-top: 10rem;
`;

const TextWrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  margin: 0 auto;

  h1,
  ul {
    opacity: 0;
    transform: translateY(60px);
  }

  h1 {
    font-weight: 900;
    font-style: italic;
    font-size: 7rem;
  }

  a,
  li {
    font-size: 1.7rem;
    font-weight: 300;
    line-height: 2;
    text-align: left;
  }
`;

const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10rem;

  opacity: 0;
  transform: translateY(60px);

  a:not(:last-child) {
    margin-right: 3.5rem;
  }

  img {
    width: 3rem;
    height: 3rem;
  }
`;

const Copyright = styled.p`
  font-size: 1.5rem;
  text-align: center;
  padding-top: 10rem;
  padding-bottom: 1rem;
`;

const Footer: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    revealText(sectionRef.current, '#footer-text');
  }, []);

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          profiles {
            phone
            email
            linkedin
            instagram
            github
            resume
            blog
          }
        }
      }
    }
  `);

  interface Icons {
    icon: string;
    alt: string;
    link: string;
  }

  const icons: Icons[] = [
    {
      icon: linkedin,
      alt: 'Linkedin',
      link: data.site.siteMetadata.profiles.linkedin,
    },
    {
      icon: github,
      alt: 'Github',
      link: data.site.siteMetadata.profiles.github,
    },
    {
      icon: instagram,
      alt: 'Instagram',
      link: data.site.siteMetadata.profiles.instagram,
    },
    {
      icon: resume,
      alt: 'Resume',
      link: data.site.siteMetadata.profiles.resume,
    },
  ];

  return (
    <Wrapper id="contact" ref={sectionRef}>
      <TextWrapper>
        <h1 id="footer-text">Let's build something cool.</h1>
        <ul id="footer-text">
          <li>
            <a href={`mailto:${data.site.siteMetadata.profiles.email}`}>
              {data.site.siteMetadata.profiles.email}
            </a>
          </li>
          <li>
            <a href={`tel:${data.site.siteMetadata.profiles.phone}`}>
              {data.site.siteMetadata.profiles.phone}
            </a>
          </li>
          <li>Seoul, Korea</li>
        </ul>
      </TextWrapper>
      <IconsWrapper id="footer-text">
        {icons.map((icon, i) => (
          <a href={icon.link} target="_blank" key={i}>
            <img src={icon.icon} alt={icon.link} />
          </a>
        ))}
      </IconsWrapper>
      <Copyright id="footer-text">© Suyeon Kang 2020</Copyright>
    </Wrapper>
  );
};

export default Footer;
