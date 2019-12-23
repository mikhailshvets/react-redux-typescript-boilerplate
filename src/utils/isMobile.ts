import window from 'global';

export const isMobile = () => !!window.navigator.userAgent.match(/Mobi/);
