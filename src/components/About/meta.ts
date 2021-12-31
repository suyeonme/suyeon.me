export const VELOG_LINK =
  'https://velog.io/@suyeonme/%EC%96%B4%EC%A9%8C%EB%8B%A4-%EA%B0%9C%EB%B0%9C%EC%9E%90%EA%B0%80-%EB%90%98%EC%97%88%EB%82%98';

export const getSkillText = (type: 'client' | 'server' | 'others'): string => {
  switch (type) {
    case 'client':
      return '#html5 #css #scss #javascript #typescript(frequently) #react(frequently) #redux #jest #gatsby.js #next.js  #d3.js #GSAP #websocket';
    case 'server':
      return '#node.js #express #mongodb #mongoose';
    case 'others':
      return '#jenkins #babel #webpack #git #firebase #googleAnalytics #figma #zeplin';
  }
};
