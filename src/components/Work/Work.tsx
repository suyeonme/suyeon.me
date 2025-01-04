import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { Wrapper, H1Title } from 'styles/styles';
import { revealText } from 'styles/animations';
import InnerWork from './InnerWork';

export interface Work {
  title: string;
  des: string;
  date: string;
  list?: { title: string; link?: string }[];
}

const Work: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    revealText(sectionRef.current, '#work-text');
  }, []);

  const works: Work[] = [
    {
      title: t('Works.0.Title'),
      date: t('Works.0.Date'),
      des: t('Works.0.Des'),
    },
    {
      title: t('Works.1.Title'),
      date: t('Works.1.Date'),
      des: t('Works.1.Des'),
      list: [
        {
          title: t('Works.1.List.0.Title'),
        },
        {
          title: t('Works.1.List.1.Title'),
          link: t('Works.1.List.1.Link'),
        },
        {
          title: t('Works.1.List.2.Title'),
        },
        {
          title: t('Works.1.List.3.Title'),
        },
      ],
    },
    {
      title: t('Works.2.Title'),
      date: t('Works.2.Date'),
      des: t('Works.2.Des'),
      list: [
        {
          title: t('Works.2.List.0.Title'),
        },
        {
          title: t('Works.2.List.1.Title'),
          link: t('Works.2.List.1.Link'),
        },
      ],
    },
  ];

  return (
    <Wrapper padding="6rem 15rem" bgColor="white" id="work" ref={sectionRef}>
      <H1Title align="left" id="work-text">
        WORK:
      </H1Title>
      <div>
        {works.map((work, i) => (
          <InnerWork work={work} key={i} />
        ))}
      </div>
    </Wrapper>
  );
};

export default Work;
