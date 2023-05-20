export const BLOG_LINK = {
  VELOG: 'https://velog.io/@suyeonme/%EC%96%B4%EC%A9%8C%EB%8B%A4-%EA%B0%9C%EB%B0%9C%EC%9E%90%EA%B0%80-%EB%90%98%EC%97%88%EB%82%98',
  MEDIUM: 'https://medium.com/suyeonme/why-i-decided-to-become-a-developer-a88966b829ce'
}

export const getSkillText = (type: 'client' | 'server' | 'others'): string => {
  switch (type) {
    case 'client':
      return '#HTML #CSS #SCSS #Javascript #Typescript(frequently) #React(frequently) #Redux #Jest #Gatsby.js #Next.js  #D3.js #GSAP #Websocket #Storybook';
    case 'server':
      return '#Node.js #Express #Mongodb #Mongoose #Java #Springboot #MySQL #Redis #Docker';
    case 'others':
      return '#Jenkins #Babel #Webpack #Git #Firebase #GoogleAnalytics #Figma #Zeplin';
  }
};