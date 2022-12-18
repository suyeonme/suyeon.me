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
      des: t('Works.0.Des'),
      date: t('Works.0.Date'),
      list: [
        {
          title: t('Works.0.List.0.Title'),
        },
        {
          title: t('Works.0.List.1.Title'),
          link: t('Works.0.List.1.Link'),
        },
        {
          title: t('Works.0.List.2.Title'),
        },
        {
          title: t('Works.0.List.3.Title'),
          link: t('Works.0.List.3.Link'),
        },
        {
          title: t('Works.0.List.4.Title'),
          link: t('Works.0.List.4.Link'),
        },
        {
          title: t('Works.0.List.5.Title'),
          link: t('Works.0.List.5.Link'),
        },
        {
          title: t('Works.0.List.6.Title'),
          link: t('Works.0.List.6.Link'),
        },
        {
          title: t('Works.0.List.7.Title'),
          link: t('Works.0.List.7.Link'),
        },
      ],
    },
    {
      title: t('Works.1.Title'),
      des: t('Works.1.Des'),
      date: t('Works.1.Date'),
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
          link: t('Works.1.List.2Link'),
        },
      ],
    }
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
