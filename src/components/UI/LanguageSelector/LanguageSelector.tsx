import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import useClickInside from 'hooks/useClickInside';
import arrow from 'icons/arrow-down.svg';
import korea from 'icons/korea.png';
import usa from 'icons/usa.png';

import {
  Wrapper,
  ArrowIcon,
  Dropdown,
  DropdownItem,
  Flag,
} from './LanguageSelector.style';

interface LanguageInterface {
  language: LanguageEnum;
  icon: string;
}

enum LanguageEnum {
  KOREAN = 'ko',
  ENGLISH = 'en',
}

const LANGUAGE_OPTION: LanguageInterface[] = [
  { language: LanguageEnum.ENGLISH, icon: usa },
  { language: LanguageEnum.KOREAN, icon: korea },
];

const LanguageSelector: React.FC = () => {
  const [language, setLanguage] = useState<LanguageEnum>(LanguageEnum.ENGLISH);

  const { i18n } = useTranslation();
  const { ref, clickInside, setClickInside } = useClickInside(false);

  useEffect(() => {
    const userLanguage = window.navigator.language;
    onChangeLanguage(getUserLanguage(userLanguage));
  }, []);

  const getUserLanguage = (language: string): LanguageEnum => {
    const result = language?.toLowerCase()?.substring(0, 2);
    return result === LanguageEnum.KOREAN
      ? LanguageEnum.KOREAN
      : LanguageEnum.ENGLISH;
  };

  const onChangeDropdown = (language: LanguageEnum): void => {
    onChangeLanguage(language);
    setClickInside(false);
  };

  const onChangeLanguage = (language: LanguageEnum): void => {
    setLanguage(language);
    i18n.changeLanguage(language);
  };

  return (
    <Wrapper ref={ref}>
      <span>{language}</span>
      {clickInside && (
        <Dropdown>
          {LANGUAGE_OPTION.map((option) => (
            <DropdownItem
              key={option.language}
              onClick={() => onChangeDropdown(option.language)}
              selected={language === option.language}
            >
              <Flag src={option.icon} alt={option.language} />
              {option.language}
            </DropdownItem>
          ))}
        </Dropdown>
      )}
      <ArrowIcon src={arrow} alt="Options of Languages" />
    </Wrapper>
  );
};

export default React.memo(LanguageSelector);
