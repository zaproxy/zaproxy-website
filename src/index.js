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

  function clearFilter(menu) {
    menu.classList.remove("is-filtering");
    Array.from(menu.getElementsByTagName('li')).map(function(el) {
      el.classList.remove("tree-filter-match");
    });
    Array.from(menu.getElementsByTagName('ul')).map(function(el) {
     el.classList.remove("tree-branch-filter");
    });
  }

  function applyFilter(menu, filter) {
    menu.classList.add("is-filtering");
    Array.from(menu.getElementsByTagName('li')).map(function(el) {
      const text = el.textContent.toLowerCase();
      if (text.indexOf(filter) !== -1) {
        el.classList.add("tree-filter-match");
      } else {
        el.classList.remove("tree-filter-match");
      }
    });
    Array.from(menu.getElementsByTagName('ul')).map(function(el) {
      const text = el.textContent.toLowerCase();

      if (text.indexOf(filter) !== -1) {
        el.classList.add("tree-branch-filter");
      } else {
        el.classList.remove("tree-branch-filter");
      }
    });
  }
  Array.from(document.querySelectorAll("[data-tree-filter]")).map((el) => {
    el.addEventListener("change", function(e) {
      const filter = e.target.value.toLowerCase();
      const menu = e.target.nextElementSibling;
      if (filter.length > 1) {
        applyFilter(menu, filter);
      } else {
        clearFilter(menu);
      }
    });
  });

  const menu = document.getElementById('primary-menu');
  menu.querySelector('.toggler').addEventListener("click", function(e) {
    e.preventDefault();
    menu.classList.toggle("in-search");
  });

  Array.from(document.querySelectorAll("[track-event]")).map((el) => {
    el.addEventListener("click", function(e) {
      e.preventDefault();
      const [action, category, label] = el.getAttribute("track-event").split(".")
      if (window.ga === undefined) {
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