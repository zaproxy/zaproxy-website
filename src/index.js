// JS Goes here - ES6 supported

import "./css/main.css";
import "./js/prism.js";
import BadgerAccordion from 'badger-accordion';

new BadgerAccordion('.js-badger-accordion', {
  openHeadersOnLoad: [0]
});

document.addEventListener("DOMContentLoaded", function() {
  Array.from(document.querySelectorAll('[track-event]')).map(el => el.addEventListener('click', function(e) {
    e.preventDefault();
    let [action, category, label] = el.getAttribute('track-event').split('.')
    if (!window.ga) {
      console.log("track-event", action, category, label);
    } else {
      ga('send', {
        hitType: 'event',
        eventAction: action,
        eventCategory: category,
        eventLabel: label,
      });
    }

    // Timeout to give time for the event can be tracked
    setTimeout(() => {
      window.location = el.href;
    }, 400);
  }));
});