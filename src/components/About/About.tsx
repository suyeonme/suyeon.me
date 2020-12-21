import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Wrapper, H1Title, H2, Bold, Capital, Link } from 'styles/styles';
import { useTranslation } from 'react-i18next';

import { revealText } from 'styles/animations';

const Tag = styled.p`
  color: #3997ed;
  cursor: pointer;
`;

const Description = styled.p`
  font-family: 'Merriweather', 'Spoqa Han Sans';
  font-weight: 300;

  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

const Title = styled.h1`
  font-family: 'Merriweather', 'Spoqa Han Sans';
  font-style: italic;
  font-size: 4rem;
  font-weight: 700;
  text-align: center;
  line-height: 1.5;
  width: 60%;
  margin: 0 auto;
  margin-bottom: 5rem;
  opacity: 0;
  transform: translateY(60px);

  @media (max-width: 1200px) {
    width: 85%;
  }

  @media (max-width: 576px) {
    width: 100%;
    font-size: 2.5rem;
  }
`;

const SkillWrapper = styled.div`
  opacity: 0;
  transform: translateY(60px);

  h2,
  p {
    opacity: 1;
    transform: translateY(0);
  }
`;

interface SkillProp {
  title: string;
  tags: string;
}

const Skill: React.FC<SkillProp> = ({ title, tags }) => {
  return (
    <SkillWrapper style={{ marginBottom: '3rem' }} id="skill-text">
      <H2>{title}</H2>
      <Tag>{tags}</Tag>
    </SkillWrapper>
  );
};

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    revealText(sectionRef.current, '#about-text');
    revealText(skillRef.current, '#skill-text');
  }, []);

  const techSkills: string =
    '#html5 #css #scss #javascript #react #redux #gatsby.js #next.js #typescript #d3.js';
  const otherSkills: string =
    '#babel #webpack #git #github #firebase #googleAnalytics #figma';
  const postLink: string =
    'https://velog.io/@suyeonme/%EC%96%B4%EC%A9%8C%EB%8B%A4-%EA%B0%9C%EB%B0%9C%EC%9E%90%EA%B0%80-%EB%90%98%EC%97%88%EB%82%98';

  return (
    <Wrapper padding="6rem 15rem" bgColor="white" id="about" ref={sectionRef}>
      <div style={{ marginBottom: '6rem' }}>
        <Title id="about-text">
          &ldquo;
          {t('About.Title')}
          &rdquo;
        </Title>
        <Description id="about-text">
          <Bold>{t('About.Des.Capital')}</Bold>
          <Capital>{t('About.Des.0')}</Capital>
          {t('About.Des.1')}
        </Description>
        <Description id="about-text">{t('About.Des.2')}</Description>
        <Link href={postLink} target="_blank" id="about-text" fade>
          {t('About.Des.3')}
        </Link>
      </div>
      <div ref={skillRef}>
        <H1Title align="left" id="skill-text">
          SKILLS:
        </H1Title>
        <Skill title="FRONT-END" tags={techSkills} />
        <Skill title="OTHERS" tags={otherSkills} />
      </div>
    </Wrapper>
  );
};

export default About;
