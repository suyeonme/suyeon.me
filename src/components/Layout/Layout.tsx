import React from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';

import 'fonts/fonts.css';
import SEO from 'components/Layout/SEO/SEO';
import Nav from 'components/Layout/Nav/Nav';
import Footer from 'components/Layout/Footer/Footer';
import Header from 'components/Layout/Header/Header';

const GlobalStyle = createGlobalStyle`
  ${reset}

  *,
  *::before,
  *::after {
      margin: 0;
      padding: 0;
      box-sizing:border-box;
  }

  html {
    ${'' /* 10px = 1rem */}
    font-size: 62.5%; 

    @media (max-width: 992px) {
      ${'' /* 9px = 1rem */}
      font-size: 56.25%; 
    }

    @media (max-width: 768px) {
      ${'' /* 8px = 1rem */}
      font-size: 50%; 
    }

    @media (max-width: 320px) {
      ${'' /* 7px = 1rem */}
      font-size: 43.75%; 
    }

    scroll-behavior: smooth;
  }

  body {
    font-family: 'Poppins', 'Spoqa Han Sans';
    font-weight: 300;
    color: black;
    background-color: white;
    overflow-x: hidden;
  }

  img, video {
    width: 100%;
    height: 100%;
  }

  button {
    color: inherit; 
    font-family: inherit; 
    font-size: inherit;
    outline: none; 
    cursor: pointer;
    border: none;
    background-color: transparent;
  }

  p, ul {
    opacity: 0;
    transform: translateY(60px);
  }

  p, a, li {
    font-size: 1.7rem;
  }

  p {
    line-height: 2;
  }

  a {
    text-decoration:none;
    color:inherit;
  }

  ul, li {
    list-style: none;
  }

  span {
    font-weight: 500;
  }

  ::selection {
    background-color: #556052;
    color: #fff;
  }

  ::-webkit-scrollbar {
  width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: #F8F8F8; 
  }
  
  ::-webkit-scrollbar-thumb {
    background:  black;
    border-radius: 20px;
  }
`;

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <I18nextProvider i18n={i18n}>
      <div style={{ overflow: 'hidden' }}>
        <SEO />
        <GlobalStyle />
        <header>
          <Nav />
          <Header />
        </header>
        <main>{children}</main>
        <Footer />
      </div>
    </I18nextProvider>
  );
};

export default Layout;
