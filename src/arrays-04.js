/* eslint-disable no-unused-vars */
/*
 * arrays-04.js
 * Language: javascript
 * Test: tests/arrays-04.test.js
 * Path: src/arrays-04.js
 *
 * Description: Advanced array challenges.
 *
 * Concepts:
 *  - Uses Math.abs, splice, join, and the spread operator.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 */

/**
 * Returns the sum of the absolute values of numbers in an array.
 * @param {Array<number>} nums - The array of numbers.
 * @returns {number} The sum.
 */
function getAbsoluteSum(nums) {
  let sum = 0;
  for (let num of nums) {
    sum += Math.abs(num);
  }
  return sum;
}

/**
 * Creates a new array excluding any string elements.
 * @param {Array} arr - The array containing various data types.
 * @returns {Array} A new array with only non-string elements.
 */
function removeStrings(arr) {
  return arr.filter(item => typeof item !== 'string');
}

/**
 * Finds and returns the minimum and maximum values in an array.
 * @param {Array<number>} arr - The array of numbers.
 * @returns {Array<number>} An array [min, max] or [] if empty.
 */
function findMinMax(arr) {
  if (arr.length === 0) return [];
  return [Math.min(...arr), Math.max(...arr)];
}

/**
 * Formats an array of 10 digits into a telephone number string.
 * Format: (123) 456-7890
 * @param {Array<number>} numbers - An array with 10 digits.
 * @returns {string} The formatted telephone number.
 */
function getTelNo(numbers) {
  let str = numbers.join('');
  return `(${str.slice(0, 3)}) ${str.slice(3, 6)}-${str.slice(6)}`;
}

module.exports = {
  getAbsoluteSum,
  removeStrings,
  findMinMax,
  getTelNo,
};