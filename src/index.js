// JS Goes here - ES6 supported

import "./css/main.css";
import "./js/prism.js";
import BadgerAccordion from "badger-accordion";

new BadgerAccordion(".js-badger-accordion", {
  openHeadersOnLoad: [0]
});

document.addEventListener("DOMContentLoaded", function() {
  // Basic attempt to obfuscate emails
  Array.from(document.querySelectorAll("[data-mail]")).map(function(el) {
    el.addEventListener("mouseover", function(evt) {
      const data = el.getAttribute("data-mail");
      el.setAttribute("href", "mailto:" + atob(data));
      el.removeAttribute("data-mail");
    }, {once: true});
  });

  Array.from(document.querySelectorAll("[track-event]")).map((el) => {
    el.addEventListener("click", function(e) {
      e.preventDefault();
      const [action, category, label] = el.getAttribute("track-event").split(".")
      if (ga === undefined) {
        console.log("track-event", action, category, label);
      } else {
        ga("send", {
          hitType: "event",
          eventAction: action,
          eventCategory: category,
          eventLabel: label,
        });
      }
      // Timeout to give time for the event can be tracked
      setTimeout(() => {
        window.location = el.href;
      }, 400);
    });
  });
});