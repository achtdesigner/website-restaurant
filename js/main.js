'use strict';

class HTML {
  addNavigationBackground() {
    const boddyOffset =
      document.body.scrollTop || document.documentElement.scrollTop;
    const navigation = document.querySelector('.navigation');
    boddyOffset > 500
      ? navigation.classList.add('navigation-fixed')
      : navigation.classList.remove('navigation-fixed');
  }
}

const html = new HTML();

const eventListeners = () => {
  window.addEventListener('scroll', html.addNavigationBackground);
};

document.addEventListener('DOMContentLoaded', e => {
  eventListeners();
});
