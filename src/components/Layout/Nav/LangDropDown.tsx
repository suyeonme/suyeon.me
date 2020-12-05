import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import arrow from 'icons/arrow-down.svg';
import korea from 'icons/korea.png';
import usa from 'icons/usa.png';

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-top: 2rem;
  cursor: pointer;

  span {
    font-size: 1.5rem;
    margin-right: 0.3rem;
  }

  img {
    width: 1rem;
    height: 1rem;
  }
`;

const Dropdown = styled.ul`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 1;
  width: 6.5rem;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  opacity: 1;

  li {
    font-size: 1.5rem;
    line-height: 2;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: #f9f9f9;
    }
  }

  img {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.8rem;
  }
`;

type Languages = {
  lang: string;
  icon: string;
};

const LangDropDown: React.FC = () => {
  const [lang, setLang] = useState('en');
  const [isHover, setIsHover] = useState(false);
  const { i18n } = useTranslation();

  const languages: Languages[] = [
    { lang: 'en', icon: usa },
    { lang: 'ko', icon: korea },
  ];

  const handleClick = (lang: string): void => {
    i18n.changeLanguage(lang);
    setLang(lang);
  };

  return (
    <Wrapper
      onMouseEnter={(): void => setIsHover(true)}
      onMouseLeave={(): void => setIsHover(false)}
    >
      <span>{lang}</span>
      {isHover && (
        <Dropdown>
          {languages.map((lang) => (
            <li onClick={() => handleClick(lang.lang)}>
              <img src={lang.icon} alt={lang.lang} />
              {lang.lang}
            </li>
          ))}
        </Dropdown>
      )}
      <img src={arrow} alt="Options of Languages" />
    </Wrapper>
  );
};

export default LangDropDown;
