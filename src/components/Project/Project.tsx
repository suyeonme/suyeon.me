import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { Wrapper, H1Title } from 'styles/styles';
import { revealText } from 'styles/animations';
import Button from 'components/UI/Button/Button';
import InnerProject from './InnerProject';

export interface Project {
  title: string;
  des: string;
  github: string;
  link: string;
  techStacks: string;
}

const Project: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    revealText(sectionRef.current, '#project-text');
  }, []);

  const projects: Project[] = [
    {
      title: 'Google Keep',
      des: t('Projects.0'),
      link: 'https://clone-google-keep.netlify.app/',
      github: 'https://github.com/suyeonme/google-keep-clone',
      techStacks:
        'React, Redux, Typescript, Firebase, Styled-components, react-dnd',
    },
    {
      title: 'Data Visualization',
      des: t('Projects.4'),
      link: 'https://data-visualization-f7b1yckzn.vercel.app/',
      github: 'https://github.com/suyeonme/data-visualization',
      techStacks: 'Next.js, D3.js, Styled-components, Topojson',
    },
    {
      title: 'Gwcschool.com',
      des: t('Projects.3'),
      link: 'http://www.gwcschool.com',
      github: 'https://github.com/suyeonme/gwcschool.com',
      techStacks: 'Gatsby.js, React, Styled-components, GSAP',
    },
    {
      title: 'Chaplinhair.com',
      des: t('Projects.2'),
      link: 'http://www.chaplinhair.com',
      github: 'http://github.com/suyeonme/chaplinhair.com-gatsby',
      techStacks: 'Gatsby.js, React, Styled-components, GSAP',
    },
  ];

  return (
    <Wrapper padding="6rem 15rem" bgColor="white" id="project" ref={sectionRef}>
      <H1Title align="left" id="project-text">
        PROJECT:
      </H1Title>
      <div>
        {projects.map((project) => (
          <InnerProject project={project} key={project.title} />
        ))}
      </div>
      <Button text={t('Button.Text')} paddingTop="6rem" />
    </Wrapper>
  );
};

export default Project;
