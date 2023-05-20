import React, { useEffect, useRef } from 'react';
import { Wrapper, H1Title, H2, Bold, Capital, Link } from 'styles/styles';
import { useTranslation } from 'react-i18next';

import { revealText } from 'styles/animations';
import { Tag, Description, Title, SkillWrapper } from './AboutStyle';
import { getSkillText, BLOG_LINK } from './meta';

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
  const { t, i18n } = useTranslation();

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

        <Link
          href={i18n.language === 'en' ? BLOG_LINK.MEDIUM : BLOG_LINK.VELOG}
          target="_blank"
          id="about-text"
          fade
        >
          {t('About.Des.3')}
        </Link>
      </div>
      <div ref={skillRef}>
        <H1Title align="left" id="skill-text">
          SKILLS:
        </H1Title>
        <Skill title="CLIENT-SIDE" tags={getSkillText('client')} />
        <Skill title="SERVER-SIDE" tags={getSkillText('server')} />
        <Skill title="OTHERS" tags={getSkillText('others')} />
      </div>
    </Wrapper>
  );
};

export default About;
