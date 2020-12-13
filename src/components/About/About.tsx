import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Wrapper, H1Title, H2, Bold, Capital, Link } from 'styles/styles';
import { useTranslation } from 'react-i18next';

import { revealText } from 'styles/animations';

/*
Technical Skills
Proficient: #html #css #javascript
Familiar: #next.js #grapQL
*/

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

const Tag = styled.p`
  color: #3997ed;
  cursor: pointer;
`;

interface PropSkillDiv {
  title: string;
  tags: string;
}

enum Skill {
  Tech = '#html5 #css #scss #javascript #react #redux #gatsby.js #next.js #typescript #graphQL #apollo #babel #webpack #git #github',
  Others = '#d3.js #firebase #googleAnalytics #figma #photoshop',
}

const SkillBox: React.FC<PropSkillDiv> = ({ title, tags }) => {
  return (
    <div style={{ marginBottom: '3rem' }}>
      <H2 id="skill-text">{title}</H2>
      <Tag id="skill-text">{tags}</Tag>
    </div>
  );
};

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const velogLink =
    'https://velog.io/@suyeonme/%EC%96%B4%EC%A9%8C%EB%8B%A4-%EA%B0%9C%EB%B0%9C%EC%9E%90%EA%B0%80-%EB%90%98%EC%97%88%EB%82%98';

  useEffect(() => {
    revealText(sectionRef.current, '#about-text');
    revealText(skillRef.current, '#skill-text');
  }, []);

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
        <Description id="about-text">{t('About.Des.3')}</Description>
        <Link href={velogLink} target="_blank">
          {t('About.Des.4')}
        </Link>
      </div>
      <div ref={skillRef}>
        <H1Title align="left" id="skill-text">
          SKILLS:
        </H1Title>
        <SkillBox title="TECHNICAL SKILLS" tags={Skill.Tech} />
        <SkillBox title="OTHER SKILLS" tags={Skill.Others} />
      </div>
    </Wrapper>
  );
};

export default About;
