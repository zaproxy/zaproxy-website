// JS Goes here - ES6 supported

import "./css/main.css";
import "./js/prism.js";
import Glide from '@glidejs/glide';
import BadgerAccordion from 'badger-accordion';

// Say hello
const glide = new Glide('.glide', {
  autoplay: 4000
})

glide.mount()

new BadgerAccordion('.js-badger-accordion', {
  openHeadersOnLoad: [0]
});


/*
dl.weekly.Stable Windows
action = dl
category = weekly
label = Stable Windows

ga('send', {
  hitType: 'event',
  eventAction: 'play',
  eventCategory: 'Videos',
  eventLabel: 'Fall Campaign'
});
*/
