export const MEDIUM_BLOG_LINK =
  'https://medium.com/suyeonme/why-i-decided-to-become-a-developer-a88966b829ce';

export const getSkillText = (type: 'client' | 'server' | 'others'): string => {
  switch (type) {
    case 'client':
      return '#HTML #CSS #SCSS #Javascript #Typescript(frequently) #React(frequently) #Redux #Jest #Gatsby.js #Next.js  #D3.js #GSAP #Websocket #Storybook';
    case 'server':
      return '#Node.js #Nest.js #Express #Mongodb #Mongoose #Java #Springboot #MySQL #Redis';
    case 'others':
      return '#Jenkins #Docker #Babel #Webpack #Firebase #GoogleAnalytics';
  }
};
