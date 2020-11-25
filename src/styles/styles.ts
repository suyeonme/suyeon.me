import styled from 'styled-components';

interface PropTitle {
  align: string;
}

export const Wrapper = styled.section`
  width: 100%;
  height: auto;
`;

export const H1Title = styled.h1<PropTitle>`
  font-size: 5rem;
  font-weight: 900;
  text-align: ${(props) => props.align};
  line-height: 1.5;
  margin-bottom: 1rem;
`;

export const H2 = styled.h2`
  text-transform: uppercase;
  font-weight: 400;
  font-size: 1.9rem;
  margin-bottom: 0.5rem;
`;
