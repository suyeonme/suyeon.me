const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Suyeonme',
    description: "Suyeon's portfolio website",
    keyword:
      'portfolio, portfolio website, frontend developer, frontend, web developer, Suyeon Kang',
    siteUrl: 'http://www.suyeon.dev.com',
    image: 'http://www.suyeon.dev.com/assets/images/hero.jpg',
    author: 'Suyeon Kang',
    profiles: {
      phone: '+82 10 5348 2863',
      email: 'suyeon.dev@gmail.com',
      linkedin: 'http://www.linkedin.com/in/suyeonme',
      instagram: 'https://www.instagram.com/suyeon___kang/',
      github: 'https://github.com/suyeonme',
      blog: 'https://velog.io/@suyeonme',
      resume:
        'https://docs.google.com/document/d/1C1LLM3NTPAEFqtOeyQsmO8qSjZ5xldw6sxS_L5-zxt4/edit#',
    },
  },

  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        components: path.join(__dirname, 'src/components'),
        icons: path.join(__dirname, 'src/assets/icons'),
        fonts: path.join(__dirname, 'src/assets/fonts'),
        images: path.join(__dirname, 'src/assets/images'),
        styles: path.join(__dirname, 'src/styles'),
        hooks: path.join(__dirname, 'src/hooks'),
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: `${__dirname}/src/components/Layout/Layout.tsx`,
      },
    },
  ],
};
