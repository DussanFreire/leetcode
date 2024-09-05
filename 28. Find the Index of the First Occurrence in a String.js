// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:
// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.

// Example 2:
// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.
 
// Constraints:
// 1 <= haystack.length, needle.length <= 104
// haystack and needle consist of only lowercase English characters.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle)
};

// OTHER OPTION
// /**
//  * @param {string} haystack
//  * @param {string} needle
//  * @return {number}
//  */
// var strStr = function (haystack, needle) {
//     for (let i = 0; i < haystack.length && haystack.length - i >= needle.length; i++) {
//         if (needle[0] === haystack[i]) {
//             for (let j = 0; j < needle.length; j++) {
//                 if (needle[j] !== haystack[j + i]) {
//                     break;
//                 } else if (j === needle.length - 1) {
//                     return i;
//                 }
//             }
//         }
//     }
//     return -1;
// };
