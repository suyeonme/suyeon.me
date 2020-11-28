import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Wrapper, H1Title } from 'styles/styles';

import metta from 'images/metta.jpg';
import chaplinHair from 'images/chaplinhair.jpg';
import gwcSchool from 'images/gwcschool.jpg';
import googleKeep from 'images/google-keep.jpg';
import { revealText } from 'styles/animations';

interface PropBgImg {
  img: string;
}

interface PropLink {
  isshow: string;
}

interface Links {
  title: string;
  des: string;
  img: string;
  path: string;
  github: string;
}

const BgImg = styled.div<PropBgImg>`
  background: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  transition: background 0.3s ease-in;
  width: 80%;
  height: 70vh;
  opacity: 0.3;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
`;

const TextWrapper = styled.ul`
  width: 90%;
  position: absolute;
  top: 50%;
  left: 53%;
  z-index: 30;
  opacity: 1;
  transform: translate(-50%, -50%);

  li {
    font-size: 2rem;
    font-weight: 300;
    opacity: 0.5;
    transition: opacity 0.3s ease-in;

    &:hover {
      opacity: 1;
    }
  }
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
`;

const PageLink = styled.a`
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.7;
  margin-right: 3rem;
`;

const GithubLink = styled.a<PropLink>`
  font-size: 1.5rem;
  font-weight: 500;
  margin-left: 1rem;
  opacity: ${(props) => (props.isshow === 'true' ? 1 : 0)};
  transition: opacity 0.3s ease-in;
`;

const Work: React.FC = () => {
  const [currentImg, setCurrentImg] = useState(chaplinHair);
  const [isHover, setIsHover] = useState('');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    revealText(sectionRef.current, '#work-text');
  }, []);

  const links: Links[] = [
    {
      title: 'Chaplinhair.com',
      des: 'Hairsalon Website',
      img: chaplinHair,
      path: 'http://www.chaplinhair.com',
      github: 'http://github.com/suyeonme/chaplinhair.com-gatsby',
    },
    {
      title: 'Gwcschool.com',
      des: 'Barista&Woodcraft School Website',
      img: gwcSchool,
      path: 'http://www.gwcschool.com',
      github: 'https://github.com/suyeonme/gwcschool.com',
    },
    {
      title: 'Google Keep',
      des: 'Clone Project',
      img: googleKeep,
      path: 'https://clone-google-keep.netlify.app/',
      github: 'https://github.com/suyeonme/google-keep-clone',
    },
    {
      title: 'Diving App',
      des: 'Diving Log Application',
      img: metta,
      path: 'http://www.chaplinhair.com',
      github: 'https://github.com/suyeonme/chaplinhair.com-gatsby',
    },
    {
      title: 'Metta: loving',
      des: 'Meditation Application',
      img: metta,
      path: 'https://metta-meditation.netlify.app/',
      github: 'https://github.com/suyeonme/metta-meditation-app',
    },
    {
      title: 'Ecoseason.com',
      des: 'Ecoseason Gwangju Center Website',
      img: metta,
      path: 'http://www.ecoseason.gwangju.com',
      github: 'https://github.com/suyeonme/chaplinhair.com-gatsby',
    },
  ];

  const handleMouseEnter = (img: string, title: string): void => {
    setCurrentImg(img);
    setIsHover(title);
  };

  return (
    <Wrapper padding="6rem 15rem" bgColor="white" id="work" ref={sectionRef}>
      <H1Title align="left" id="work-text">
        WORKS:
      </H1Title>
      <Content>
        <BgImg img={currentImg} />
        <TextWrapper>
          {links.map((link) => (
            <li
              key={link.title}
              onMouseEnter={() => handleMouseEnter(link.img, link.title)}
              onMouseLeave={(): void => setIsHover('')}
            >
              <PageLink href={link.path} target="_blank">
                {link.title}
              </PageLink>
              {link.des}
              <GithubLink
                href={link.github}
                target="_blank"
                isshow={(link.title === isHover).toString()}
              >
                | Github
              </GithubLink>
            </li>
          ))}
        </TextWrapper>
      </Content>
    </Wrapper>
  );
};

export default Work;
