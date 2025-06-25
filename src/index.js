/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
// JS Goes here - ES6 supported

import "./css/main.css";
import "./js/prism.js";
import BadgerAccordion from "badger-accordion";

new BadgerAccordion(".js-badger-accordion", {
  openHeadersOnLoad: [0]
});

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  // Basic attempt to obfuscate emails
  Array.from(document.querySelectorAll("[data-mail]")).map(function(el) {
    el.addEventListener("mouseover", function(evt) {
      const data = el.getAttribute("data-mail");
      el.setAttribute("href", "mailto:" + atob(data));
      el.removeAttribute("data-mail");
    }, {once: true});
  });

  // Make tables filterable
  Array.from(document.querySelectorAll("[data-sort-filter]")).map(function(el) {
    const widget = {
      options: {},
      filters: {}    
    };

    // Checks if row matches against filter
    function isFilterMatch(row) {
      for (let index in widget.filters) {
        const filter = widget.filters[index].toLowerCase();
        const rowValue = row.columns[index].toLowerCase();
        if (rowValue.indexOf(filter) === -1) {
          return false;
        }
      }
      return true;
    }

    // Create datalist that input can use for suggetions
    function setupDatalist(el, label, idx) {
      widget.options[idx] = document.createElement('datalist');
      widget.options[idx].setAttribute('id', 'opts_for_'  + label);
      widget.options[idx]._options = []
      el.appendChild(widget.options[idx]);
    }
  
    // Add input for filtering
    function addInput(el, label, idx) {
      const container = document.createElement('div');
      container.setAttribute('style', 'display: flex; align-items: center;');

      const input = document.createElement('input');
      input.addEventListener("change", function(e) {
        widget.filters[idx] = e.target.value;
        removeAllChildNodes(tbody);
        elements = [];
        rows.filter(isFilterMatch).map(r => {
          tbody.appendChild(r.el)
          elements.push(r)
        });
        console.log(elements);
      });
      input.setAttribute('style', 'width:100%;display:block')
      input.setAttribute('type', 'text');
      input.setAttribute('name', 'filter_'  + label);
      input.setAttribute('list', 'opts_for_'  + label);

      container.appendChild(input);
      addSortButton(container, idx);  

      el.appendChild(container);
    }
    const tbody = el.querySelector('tbody');
    const headings = Array.from(el.querySelectorAll('thead th')).map((el, idx) => {
      const isSuggested = el.getAttribute("data-suggest") !== null;
      const label = el.innerText.toLowerCase();
      el.appendChild(document.createElement('br'));
      addInput(el, label, idx);
      
      if (isSuggested) {
        setupDatalist(el, label, idx);      
      }
      return {idx, isSuggested, label};
    });

    const rows = Array.from(el.querySelectorAll('tbody tr')).map(tr => {
      const columns = Array.from(tr.querySelectorAll('td')).map((c, idx) => {
        // For columns that match the index of the `data-suggest` headers
        // ... add the text value to options
        if (widget.options[idx]) {
          widget.options[idx]._options.push(c.innerText)
        }
        return c.innerText;
      });
      return {
        el: tr,  // Needed for writing to dom
        columns, // Needed for filtered
      };
    });
    let elements = rows;

    function addSortButton(el, idx) {
      const img = document.createElement('img');
      img.src = "/img/up-down-arrows-icon.png"
      img.addEventListener("click", function() {
        sortTable(idx);
      });
      img.setAttribute('style', 'width: 16px; margin-left: 5px' )
    
      el.appendChild(img)
    }

    let direction = false;
    function sortTable(columnIndex) {
      console.log(elements);
      removeAllChildNodes(tbody);
      if (isNaN(elements[0].columns[columnIndex][0]) && isNaN(elements[elements.length - 1].columns[columnIndex][0])) {
        elements.sort((a, b) => {
          a = a.columns[columnIndex];
          b = b.columns[columnIndex];
          return direction ? a.localeCompare(b) : b.localeCompare(a);
        });
      } else {
        if (!columnIndex && window.location.href.includes("docs/alerts")) {
          elements.sort((a, b) => {
            a = a.columns[columnIndex].split("-");
            b = b.columns[columnIndex].split("-");
            return direction ? a[0] - b[0] : b[0] - a[0];
          });
        } else {
          elements.sort((a, b) => {
            a = a.columns[columnIndex];
            b = b.columns[columnIndex];
            return direction ? a - b : b - a;
          });
        }
      }
      for (let i = 0; i <= elements.length - 1; i++) {
        tbody.appendChild(elements[i].el);
      }
      direction = !direction;
    }

    // Go through options elements and populate lists with column aggregates
    // gathered in previous loop
    Object.entries(widget.options).map(pair => {
      const [idx, el] = pair;
      const opts = [...new Set(el._options)];
      opts.sort((a, b) => a.length - b.length);
      opts.map(o => {
        const ol = document.createElement('option');
        ol.innerText = o;
        return ol;
      }).map(ol => el.appendChild(ol));
    });
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
  
  // Sortable tables
  // Based on https://stackoverflow.com/questions/14267781/sorting-html-table-with-javascript
  const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;

  const comparer = (idx, asc) => (a, b) => ((v1, v2) => 
      v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)
      )(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));

  document.querySelectorAll('th.sortable').forEach(th => th.addEventListener('click', (() => {
      const table = th.closest('table');
      Array.from(table.querySelectorAll('tr:nth-child(n+2)'))
          .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
          .forEach(tr => table.appendChild(tr) );
  })));

  // Tables with hidden rows
  document.querySelectorAll('input.togglehidetablerows').forEach(input => input.addEventListener('change', (() => {
    const table = input.closest('table');
    Array.from(table.querySelectorAll('tr.togglehide'))
      .forEach(tr => tr.style.display = input.checked ? '' : 'none');
  })));

});