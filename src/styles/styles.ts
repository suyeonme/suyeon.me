import styled from 'styled-components';

interface PropTitle {
  align: string;
}

interface PropWrapper {
  padding?: string;
  bgColor?: string;
}

export const Wrapper = styled.section<PropWrapper>`
  width: 100%;
  height: auto;
  background-color: ${(props) => props.bgColor};
  padding: ${(props) => (props.padding ? props.padding : '0')};

  @media (max-width: 1200px) {
    padding: 6rem 8rem;
  }

  @media (max-width: 576px) {
    padding: 6rem 3rem;
  }

  @media (max-width: 812px) and (orientation: landscape) {
    padding: 6rem 8rem;
  }
`;

export const H1Title = styled.h1<PropTitle>`
  font-size: 5rem;
  font-weight: 900;
  text-align: ${(props) => props.align};
  line-height: 1.5;
  margin-bottom: 1rem;
  opacity: 0;
  transform: translateY(60px);

  @media (max-width: 1200px) {
    font-size: 4rem;
  }

  @media (max-width: 576px) {
    font-size: 3.5rem;
  }
`;

export const H2 = styled.h2`
  font-size: 1.9rem;
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: 0.5rem;
  opacity: 0;
  transform: translateY(60px);
`;
