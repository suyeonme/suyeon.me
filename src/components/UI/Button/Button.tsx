import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

interface PropBtnWrapper {
  paddingTop: string;
}

const Btn = styled.a`
  display: inline-block;
  font-size: 1.1rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 3px;
  padding: 2.4rem 3.5rem;
  border: 1px solid black;
`;

const BtnWrapper = styled.div<PropBtnWrapper>`
  width: 100%;
  height: auto;
  text-align: center;
  padding-top: ${(props) => (props.paddingTop ? props.paddingTop : 0)};
`;

interface PropButton {
  text: string;
  paddingTop: string;
}

const Button: React.FC<PropButton> = ({ text, paddingTop }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          profiles {
            github
          }
        }
      }
    }
  `);

  const githubRepo: string = `${data.site.siteMetadata.profiles.github}?tab=repositories`;

  return (
    <BtnWrapper paddingTop={paddingTop}>
      <Btn href={githubRepo} target="_blank">
        {text}
      </Btn>
    </BtnWrapper>
  );
};

export default React.memo(Button);
