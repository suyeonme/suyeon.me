import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import { Wrapper, H1Title, H2, Link } from 'styles/styles';
import { revealText } from 'styles/animations';
import Button from 'components/UI/Button/Button';

const ProjectWrapper = styled.div`
  opacity: 0;
  transform: translateY(60px);

  p,
  ul,
  h2 {
    opacity: 1;
    transform: translateY(0);
  }

  &:not(:last-child) {
    margin-bottom: 5rem;
  }

  li {
    line-height: 1.7;
  }

  p {
    font-family: 'Merriweather', 'Spoqa Han Sans';
    font-weight: 300;
  }
`;

interface PropjectObj {
  title: string;
  des: string;
  github: string;
  link: string;
  techStacks: string;
}

interface ProjectProp {
  project: PropjectObj;
}

const Project = ({ project }: ProjectProp) => {
  const { title, des, github, link, techStacks } = project;
  return (
    <ProjectWrapper id="work-text">
      <H2>{title}</H2>
      <p>{des}</p>
      <ul>
        <li>
          <Link href={link} target="_blank">
            {link}
          </Link>
        </li>
        <li>
          <a href={github} target="_blank">
            Github Repo
          </a>
        </li>
        <li>{techStacks}</li>
      </ul>
    </ProjectWrapper>
  );
};

const Work: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    revealText(sectionRef.current, '#work-text');
  }, []);

  const projects: PropjectObj[] = [
    {
      title: 'Google Keep',
      des: t('Works.0'),
      link: 'https://clone-google-keep.netlify.app/',
      github: 'https://github.com/suyeonme/google-keep-clone',
      techStacks:
        'React, Redux, Typescript, Firebase, Styled-components, react-dnd',
    },
    {
      title: 'Data Visualization',
      des: t('Works.4'),
      link: 'https://data-visualization-f7b1yckzn.vercel.app/',
      github: 'https://github.com/suyeonme/data-visualization',
      techStacks: 'Next.js, D3.js, Styled-components, Topojson',
    },
    {
      title: 'Gwcschool.com',
      des: t('Works.3'),
      link: 'http://www.gwcschool.com',
      github: 'https://github.com/suyeonme/gwcschool.com',
      techStacks: 'Gatsby.js, React, Styled-components, GSAP',
    },
    {
      title: 'Chaplinhair.com',
      des: t('Works.2'),
      link: 'http://www.chaplinhair.com',
      github: 'http://github.com/suyeonme/chaplinhair.com-gatsby',
      techStacks: 'Gatsby.js, React, Styled-components, GSAP',
    },
  ];

  return (
    <Wrapper padding="6rem 15rem" bgColor="white" id="work" ref={sectionRef}>
      <H1Title align="left" id="work-text">
        PROJECT:
      </H1Title>
      <div>
        {projects.map((project) => (
          <Project project={project} key={project.title} />
        ))}
      </div>
      <Button text={t('Button.Text')} paddingTop="6rem" />
    </Wrapper>
  );
};

export default Work;
