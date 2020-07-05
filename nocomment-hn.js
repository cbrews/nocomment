/**
 * nocomment-hn.js
 * @author Chris Brousseau
 * @description Removes comment links from hacker news.
 * @license MIT
 */

// remove comments from header
document.getElementsByClassName('pagetop').forEach(function(el) {
  el.children.forEach(function(c) {
    if (c.text === 'comments') {
      console.debug("NoComment - removing HN comments header");
      el.removeChild(c);
    }
    el.innerHTML = el.innerHTML.replace(/\|\s\s\|/, '|');
  })
});

// remove comments from items
console.debug("NoComment - removing comments links");
document.getElementsByClassName('subtext').forEach(function(el) {
  var newEl = document.createElement('span');
  newEl.innerHTML = el.children.last().innerHTML;

  el.removeChild(el.children.last());
  el.appendChild(newEl);
});

// remove link on timestamp
console.debug("NoComment - removing comments link on age");
document.getElementsByClassName('age').forEach(function(el) {
  var aText = el.children[0].text;
  el.innerHTML = aText;
});