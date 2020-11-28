import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Wrapper, H1Title, H2 } from 'styles/styles';

import { revealText } from 'styles/animations';

const Title = styled(H1Title)`
  width: 60%;
  margin: 0 auto;
  margin-bottom: 5rem;
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
        <p id="about-text">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" The Extremes of Good.
        </p>
        <p id="about-text">
          I am also a yogini and a diver. I am a huge fan of underwater sports,
          especially scuba diving and freediving. these kind of sports challenge
          me. So I love it.
        </p>
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
