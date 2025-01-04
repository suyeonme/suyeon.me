import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { revealText } from 'styles/animations';

const Wrapper = styled.footer`
  background-color: white;
  color: black;
  border-top: 2px solid black;
  padding: 2rem 0;

  @media (max-width: 576px) {
    padding: 6rem 0;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12rem;

  @media (max-width: 1200px) {
    padding: 0 12rem 0 6rem;
  }

  @media (max-width: 768px) {
    padding: 0 10rem 0 8rem;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    jusity-content: center;
    align-items: flex-start;
    padding: 0 3rem;
  }

  @media (max-width: 812px) and (orientation: landscape) {
    padding: 0 10rem 0 8rem;
  }

  p,
  ul {
    opacity: 1;
    transform: translateY(0);
  }

  a,
  li,
  p {
    font-size: 1.5rem;
    font-weight: 300;
    text-align: left;
    letter-spacing: 1px;
  }

  p {
    @media (max-width: 576px) {
      order: 3;
    }
  }
`;

const InfoList = styled.ul`
  @media (max-width: 576px) {
    order: 1;
    margin-bottom: 3rem;
  }

  li:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const LinkList = styled.ul`
  @media (max-width: 576px) {
    order: 2;
    margin-bottom: 3rem;
  }

  a {
    font-weight: 500;
  }

  li {
    display: inline-block;

    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
`;

const Footer: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          profiles {
            phone
            email
            linkedin
            github
            resume
            velog
            medium
            tistory
          }
        }
      }
    }
  `);

  interface Links {
    text: string;
    link: string;
  }

  const links: Links[] = [
    {
      text: 'Github |',
      link: data.site.siteMetadata.profiles.github,
    },
    {
      text: 'Linkedin |',
      link: data.site.siteMetadata.profiles.linkedin,
    },
    {
      text: 'Tistory |',
      link: data.site.siteMetadata.profiles.tistory,
    },
    {
      text: 'Medium |',
      link: data.site.siteMetadata.profiles.medium,
    },
    {
      text: 'Resume',
      link: data.site.siteMetadata.profiles.resume,
    },
  ];

  return (
    <Wrapper id="contact">
      <InnerWrapper>
        <p>© Suyeon 2020</p>
        <LinkList>
          {links.map((link) => (
            <li key={link.text}>
              <a href={link.link} target="_blank">
                {link.text}
              </a>
            </li>
          ))}
        </LinkList>
        <InfoList>
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
        </InfoList>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Footer;
