const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Suyeonme',
    description: "Suyeon's portfolio website",
    keyword:
      'portfolio, website, portfolio website, frontend developer, frontend, web developer',
    siteUrl: 'http://www.suyeonme.com',
    // image: 'http://www.gwcschool.com/assets/images/home-small.jpg',
    author: 'Suyeon Kang',
    phone: '+82 10 5348 2863',
    email: 'suyeon.dev@gmail.com',
  },

  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        components: path.join(__dirname, 'src/components'),
        // images: path.join(__dirname, 'src/assets/images'),
        // styles: path.join(__dirname, 'src/styles'),
      },
    },
  ],
};
