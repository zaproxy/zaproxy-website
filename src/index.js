// JS Goes here - ES6 supported

import "./css/main.css";
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

