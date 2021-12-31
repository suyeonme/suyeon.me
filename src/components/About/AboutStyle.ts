import styled from 'styled-components';

export const Tag = styled.p`
  color: #3997ed;
  cursor: pointer;
`;

export const Description = styled.p`
  font-family: 'Merriweather', 'Spoqa Han Sans';
  font-weight: 300;

  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

export const Title = styled.h1`
  font-family: 'Merriweather', 'Spoqa Han Sans';
  font-style: italic;
  font-size: 4rem;
  font-weight: 700;
  text-align: center;
  line-height: 1.5;
  width: 60%;
  margin: 0 auto;
  margin-bottom: 5rem;
  opacity: 0;
  transform: translateY(60px);

  @media (max-width: 1200px) {
    width: 85%;
  }

  @media (max-width: 576px) {
    width: 100%;
    font-size: 2.5rem;
  }
`;

export const SkillWrapper = styled.div`
  opacity: 0;
  transform: translateY(60px);

  h2,
  p {
    opacity: 1;
    transform: translateY(0);
  }
`;
