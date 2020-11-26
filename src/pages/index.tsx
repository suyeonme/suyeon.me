import React from 'react';
import Layout from 'components/Layout/Layout';
import About from 'components/About/About';
import Work from 'components/Work/Work';

function Home() {
  return (
    <Layout>
      <About />
      <Work />
    </Layout>
  );
}

export default Home;
