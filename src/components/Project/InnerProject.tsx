import React from 'react';
import { H2, Link, TemplateWrapper } from 'styles/styles';
import { Project } from './Project';

interface ProjectProp {
  project: Project;
}

const InnerProject = ({ project }: ProjectProp) => {
  const { title, des, github, link, techStacks } = project;
  return (
    <TemplateWrapper id="project-text">
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
    </TemplateWrapper>
  );
};

export default InnerProject;
