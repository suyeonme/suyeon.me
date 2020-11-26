import React, { useState } from 'react';
import styled from 'styled-components';
import { Wrapper, H1Title } from 'styles/styles';

import metta from 'images/metta.jpg';
import chaplinHair from 'images/chaplinhair.jpg';
import gwcSchool from 'images/gwcschool.jpg';
import googleKeep from 'images/google-keep.jpg';

// Image optimization
// Rendering

interface PropBgImg {
  img: string;
}

interface Links {
  title: string;
  des: string;
  img: string;
  path: string;
}

const BgImg = styled.div<PropBgImg>`
  background: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  transition: background 0.3s ease-in;
  width: 80%;
  height: 70vh;
  opacity: 0.5;
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
  transform: translate(-50%, -50%);
  z-index: 30;

  li {
    font-size: 2rem;
    font-weight: 300;
    opacity: 0.5;
    transition: opacity 0.3s ease-in;

    &:hover {
      opacity: 1;
    }
  }

  a {
    font-size: 4rem;
    font-weight: 900;
    line-height: 1.5;
    margin-right: 3rem;
  }
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
`;

const Work: React.FC = () => {
  const [currentImg, setCurrentImg] = useState(chaplinHair);

  const links: Links[] = [
    {
      title: 'Chaplinhair.com',
      des: 'Hairsalon Website',
      img: chaplinHair,
      path: 'href://www.chaplinhair.com',
    },
    {
      title: 'Gwcschool.com',
      des: 'Barista&Woodcraft School Website',
      img: gwcSchool,
      path: 'href://www.gwcschool.com',
    },
    {
      title: 'Google Keep',
      des: 'Clone Project',
      img: googleKeep,
      path: 'href://www.clone-google-keep.netlify.app/',
    },
    {
      title: 'Diving App',
      des: 'Diving Log Application',
      img: metta,
      path: 'href://www.chaplinhair.com',
    },
    {
      title: 'Metta: loving',
      des: 'Meditation Application',
      img: metta,
      path: 'href://www.metta-meditation.netlify.app/',
    },
    {
      title: 'Ecoseason.gwangju.com',
      des: 'Ecoseason Gwangju Center Website',
      img: metta,
      path: 'href://www.ecoseason.gwangju.com',
    },
  ];

  return (
    <Wrapper padding="6rem 15rem" bgColor="white">
      <H1Title align="left">WORKS:</H1Title>
      <Content>
        <BgImg img={currentImg} />
        <TextWrapper>
          {links.map((link) => (
            <li key={link.title} onMouseEnter={() => setCurrentImg(link.img)}>
              <a href={link.path}>{link.title}</a>
              {link.des}
            </li>
          ))}
        </TextWrapper>
      </Content>
    </Wrapper>
  );
};

export default Work;
