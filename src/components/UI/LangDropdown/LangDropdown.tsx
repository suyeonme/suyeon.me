import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import useClickInside from 'hooks/useClickInside';
import arrow from 'icons/arrow-down.svg';
import korea from 'icons/korea.png';
import usa from 'icons/usa.png';

interface PropDropdownItem {
  iscurrent?: string;
}

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-top: 2rem;
  cursor: pointer;

  @media (max-width: 576px) {
    order: 2;
    margin-top: 0;
  }

  @media (max-width: 812px) and (orientation: landscape) {
    margin-top: 2rem;
    order: initial;
  }

  span {
    font-size: 1.5rem;
    margin-right: 0.5rem;

    @media (max-width: 576px) {
      font-size: 2.3rem;
      margin-right: 1rem;
    }

    @media (max-width: 812px) and (orientation: landscape) {
      font-size: 1.5rem;
      margin-right: 0.5rem;
    }
  }
`;

const ArrowIcon = styled.img`
  width: 1rem;
  height: 1rem;

  @media (max-width: 576px) {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media (max-width: 812px) and (orientation: landscape) {
    width: 1rem;
    height: 1rem;
  }
`;

const Dropdown = styled.ul`
  width: 6.5rem;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 10;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  opacity: 1;
  background-color: white;

  @media (max-width: 576px) {
    width: 10rem;
  }

  @media (max-width: 812px) and (orientation: landscape) {
    width: 6.5rem;
  }
`;

const DropdownItem = styled.li<PropDropdownItem>`
  font-size: 1.5rem;
  line-height: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.iscurrent === 'true' ? '#f2efef' : 'inherit'};

  &:hover {
    background-color: #f2efef;
  }

  @media (max-width: 576px) {
    font-size: 2.3rem;
  }

  @media (max-width: 812px) and (orientation: landscape) {
    font-size: 1.5rem;
  }
`;

const Flag = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.8rem;

  @media (max-width: 576px) {
    width: 2rem;
    height: 2rem;
  }
`;

type Languages = {
  lang: string;
  icon: string;
};

const LangDropdown: React.FC = () => {
  const [lang, setLang] = useState('en');
  const { i18n } = useTranslation();
  const { ref, clickInside, setClickInside } = useClickInside(false);

  const languages: Languages[] = [
    { lang: 'en', icon: usa },
    { lang: 'ko', icon: korea },
  ];

  const handleClick = (l: string): void => {
    setLang(l);
    i18n.changeLanguage(l);
    setClickInside(false);
  };

  useEffect(() => {
    // Detect user's browser language and change default language of dropdown
    const userLanguage: string = window.navigator.language;

    if (userLanguage === 'ko') {
      setLang('ko');
      i18n.changeLanguage('ko');
    } else {
      setLang('en');
      i18n.changeLanguage('en');
    }
  }, []);

  return (
    <Wrapper ref={ref}>
      <span>{lang}</span>
      {clickInside && (
        <Dropdown>
          {languages.map((l) => (
            <DropdownItem
              key={l.lang}
              onClick={() => handleClick(l.lang)}
              iscurrent={(lang === l.lang).toString()}
            >
              <Flag src={l.icon} alt={l.lang} />
              {l.lang}
            </DropdownItem>
          ))}
        </Dropdown>
      )}
      <ArrowIcon src={arrow} alt="Options of Languages" />
    </Wrapper>
  );
};

export default React.memo(LangDropdown);
