export const MEDIUM_BLOG_LINK =
  'https://medium.com/suyeonme/why-i-decided-to-become-a-developer-a88966b829ce';

export const getSkillText = (type: 'client' | 'server' | 'others'): string => {
  switch (type) {
    case 'client':
      return '#HTML #CSS #Javascript #Typescript(frequently) #React(frequently) #Tailwindcss #Gatsby.js #Next.js  #D3.js #GSAP #Storybook #Jest  #State #Babel #Bundle #Performance #Sentry';
    case 'server':
      return '#Node.js #Nest.js #Express #MySQL #Redis #Java #Python #FastAPI';
    case 'others':
      return '#Jenkins #ArgoCD #Docker #Firebase #GoogleAnalytics #Monitoring #BigQuery';
  }
};
