// Map polyfill
Array.prototype.myMap = function (callback) {
  if (!callback || typeof callback !== 'function') {
    throw Error('The callback function is not a function');
  }

  if (!this) {
    throw Error('You cannot call map on null or undefined');
  }
  const result = [];
  for (let index = 0; index < this.length; index++) {
    result.push(callback(this[index], index, this));
  }
  return result;
}


// Filter polyfill
Array.prototype.myFilter = function (callback) {

  if (!callback || typeof callback !== 'function') {
    throw Error('The callback function is not a function');
  }

  if (!this) {
    throw Error('You cannot call filter for null or undefined');
  }

  const result = [];

  for (let index = 0; index < this.length; index++) {
    if (callback(this[index], index, this)) {
      result.push(this[index]);
    }
  }

  return result;
}


// Reduce polyfill
Array.prototype.myReduce = function (callback, initialValue) {

  if (!callback || typeof callback !== 'function') {
    throw Error('The callback function is not a function');
  }

  if (!this) {
    throw Error('You cannot call reduce for null or undefined');
  }

  let accumulator = initialValue;
  for (let index = 0; index < this.length; index++) {
    accumulator = callback(accumulator, this[index], index, this);
  }

  return accumulator;
}