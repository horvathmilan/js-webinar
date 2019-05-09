'use strict';
/**
 * It determines, whether the given two arrays
 * are equal, by considering the number of elements,
 * those order and value, in all levels.
 * 
 * It prints out a message in case of any
 * difference in any array, using console.warn!
 * 
 * @param {Array} first The first array
 * @param {Array} second The second array
 * @returns {boolean} true if the two arrays are equal,
 *                    false otherwise
 */

function arrayEqual(first, second) {
    if (!Array.isArray(first) || !Array.isArray(second)) {
        if (!Array.isArray(first)) {
            console.warn(`The first parameter is not an array!`);
            return false;
        }
        console.warn(`The second parameter is not an array!`);
        return false;
    }

    if (first.length !== second.length) {
        console.warn(`The length of the first array (${first.length}) 
        does not equal to the length of the second array (${second.length})`);
        return false;
    }


}

module.exports = arrayEqual;