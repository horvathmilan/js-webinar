'use strict';
/**
 * It recieves an array of strings and returns
 * the first longest string from it.
 * Also in the alphabetically first in case of more.
 *
 * @param {Array.<string>} strings
 * @returns {string} longest string or empty string in other cases
 */

function longestString(strings) {
    if (typeof strings === 'string') {
        return '';
    }

    if (strings.length < 0) {
        throw new Error(`Give an array which is not empty!`);
    }

    if (Array.isArray(strings) === false) {
        throw new Error(`Give an array not a(n) ${Array.isArray(strings)}`);
    }

    strings.sort();
    strings.sort((a, b) => {
        return b.length - a.length;
    });
    // console.log(strings);
    return strings[0];
}

module.exports = longestString;