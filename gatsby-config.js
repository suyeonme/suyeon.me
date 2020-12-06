const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Suyeonme',
    description: "Suyeon's portfolio website",
    keyword:
      'suyeon.me, portfolio, portfolio website, frontend developer, frontend, web developer, Suyeon Kang',
    siteUrl: 'https://suyeon.me',
    image: 'https://suyeon.me/assets/images/hero.jpg',
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
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://suyeon.me',
        sitemap: 'https://suyeon.me//sitemap.xml',
        policy: [
          {
            userAgent: '*',
            allow: '/$',
            disallow: '/',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `G-4DK16HDDQZ`,
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en',
      },
    },
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
