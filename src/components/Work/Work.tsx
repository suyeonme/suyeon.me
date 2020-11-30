import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Wrapper, H1Title } from 'styles/styles';

import metta from 'images/metta.jpg';
import chaplinHair from 'images/chaplinhair.jpg';
import gwcSchool from 'images/gwcschool.jpg';
import googleKeep from 'images/google-keep.jpg';
import { revealText } from 'styles/animations';
import Button from 'components/Button/Button';

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
  width: 90%;
  opacity: 0.23;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  display: inline-block;
  position: relative;
  background-size: contain;
  margin-left: 3rem;

  @media (max-width: 576px) {
    display: none;
  }

  @media (max-width: 812px) and (orientation: landscape) {
    display: block;
  }

  &:after {
    padding-top: 50.25%;
    display: block;
    content: '';
  }
`;

const TextWrapper = styled.ul`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 0;
  z-index: 30;
  opacity: 1;
  transform: translateY(-50%);

  @media (max-width: 576px) {
    position: static;
    top: unset;
    left: unset;
    transform: translateY(0);
  }

  @media (max-width: 812px) and (orientation: landscape) {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }

  li,
  span {
    font-size: 1.7rem;
    font-weight: 300;
    opacity: 0.5;
    transition: opacity 0.3s ease-in;

    @media (max-width: 576px) {
      opacity: 1;
    }

    @media (max-width: 812px) and (orientation: landscape) {
      opacity: 0.5;
    }
  }

  li:hover {
    opacity: 1;

    span {
      opacity: 1;
    }
  }

  span {
    @media (max-width: 576px) {
      display: block;
      font-size: 1.7rem;
      margin-left: 2.6rem;
      margin-top: 1rem;
      opacity: 0.8;
    }

    @media (max-width: 812px) and (orientation: landscape) {
      display: inline;
    }
  }

  li {
    @media (max-width: 576px) {
      list-style: disc;
      list-style-position: inside;
    }

    @media (max-width: 812px) and (orientation: landscape) {
      list-style: none;
    }
  }
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
`;

const PageLink = styled.a`
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.7;
  margin-right: 3rem;

  @media (max-width: 1200px) {
    font-size: 3rem;
  }

  @media (max-width: 576px) {
    font-size: 2.2rem;
    font-weight: 500;
    line-height: 0;
  }

  @media (max-width: 812px) and (orientation: landscape) {
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.7;
  }
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
      path: 'http://www.metta-meditation.netlify.app/',
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
              <span>{link.des}</span>
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
      <Button text="Show More" paddingTop="6rem" />
    </Wrapper>
  );
};

export default Work;
