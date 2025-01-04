import React from 'react';
import { Work } from './Work';
import { H2, Date, Link, TemplateWrapper } from 'styles/styles';

interface InnerWorkProps {
  work: Work;
}

const InnerWork = ({ work }: InnerWorkProps) => {
  const { title, des, date, list } = work;
  return (
    <TemplateWrapper id="work-text">
      <H2>{title}</H2>
      <Date>{date}</Date>
      <p>{des}</p>
      <ul>
        {list?.map((l) => {
          if (l.hasOwnProperty('link')) {
            return (
              <li key={l.title}>
                <Link href={l.link} target="_blank">
                  {l.title}
                </Link>
              </li>
            );
          } else {
            return <li key={l.title}>{l.title}</li>;
          }
        })}
      </ul>
    </TemplateWrapper>
  );
};

export default InnerWork;
