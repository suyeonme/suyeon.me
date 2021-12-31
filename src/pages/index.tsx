import React from 'react';
import Header from 'components/Layout/Header/Header';
import About from 'components/About/About';
import Project from 'components/Project/Project';
import Work from 'components/Work/Work';

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Work />
      <Project />
    </>
  );
};

export default Home;
