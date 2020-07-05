/**
 * polyfill.js
 * @author Chris Brousseau
 * @description HTMLCollection utils
 * @license MIT
 */

HTMLCollection.prototype.forEach = function(fn) {
  for (var i = 0; i < this.length; ++i) {
    fn(this[i], i);
  }
  return this;
}

HTMLCollection.prototype.first = function() {
  return this[0];
}

HTMLCollection.prototype.last = function() {
  return this[this.length - 1];
}