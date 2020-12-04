/*
Technical Skills
Proficient: #html #css #javascript
Familiar: #next.js #grapQL
*/

import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Wrapper, H1Title, H2, Bold, Capital } from 'styles/styles';

import { revealText } from 'styles/animations';

const Description = styled.p`
  font-family: 'Merriweather', serif;
  font-weight: 300;

  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

const Title = styled(H1Title)`
  font-family: 'Merriweather', serif;
  font-style: italic;
  font-weight: 700;
  width: 60%;
  margin: 0 auto;
  margin-bottom: 5rem;

  @media (max-width: 1200px) {
    width: 80%;
  }

  @media (max-width: 576px) {
    width: 100%;
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
  Tech = '#html5 #css #scss #javascript #react #redux #gatsby.js #next.js #typescript #graphQL #apollo #node.js #express #babel #webpack #git #github',
  Others = '#firebase #googleAnalytics #figma #photoshop',
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

  useEffect(() => {
    revealText(sectionRef.current, '#about-text');
    revealText(skillRef.current, '#skill-text');
  }, []);

  return (
    <Wrapper padding="6rem 15rem" bgColor="white" id="about" ref={sectionRef}>
      <div style={{ marginBottom: '6rem' }}>
        <Title align="center" id="about-text">
          &ldquo; I am an artist who love to build cool things. &rdquo;
        </Title>
        <Description id="about-text">
          <Bold>D</Bold>
          <Capital>eveloper is like an artist</Capital> who can build their work
          based on creativity, philosophy, and ideas from scratch. From white
          empty paper, I believe, we have a power to draw and transform it into
          a beautiful work which can give an inspiration, encourage, and help
          other people. I want to contribute a beautiful journey making the
          better world and having positive impact.
        </Description>
        <Description id="about-text">
          I have an endless curiosity about whatever, especially learning new
          skills. This makes me feel alive. This energy fuels me keep
          challenging and pushing me out of a comfort zone. I will be a rascal
          who never exhausted to come up with fun ideas and act on them until I
          become a grandma.
        </Description>
        <Description id="about-text">
          You can also call me an enthusiast of underwater sports, yogini, and
          backpacker. I am a divemaster in scuba diving and also a freediver.
          These are my biggest hobbies.
        </Description>
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
