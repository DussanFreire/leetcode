// You are given a string s and an array of strings words. All the strings of words are of the same length.
// A concatenated string is a string that exactly contains all the strings of any permutation of words concatenated.

// For example, if words = ["ab","cd","ef"], then "abcdef", "abefcd", "cdabef", "cdefab", "efabcd", and "efcdab" are all concatenated strings. "acdbef" is not a concatenated string because it is not the concatenation of any permutation of words.
// Return an array of the starting indices of all the concatenated substrings in s. You can return the answer in any order.

// Example 1:
// Input: s = "barfoothefoobarman", words = ["foo","bar"]
// Output: [0,9]
// Explanation:
// The substring starting at 0 is "barfoo". It is the concatenation of ["bar","foo"] which is a permutation of words.
// The substring starting at 9 is "foobar". It is the concatenation of ["foo","bar"] which is a permutation of words.

// Example 2:
// Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
// Output: []
// Explanation:
// There is no concatenated substring.

// Example 3:
// Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
// Output: [6,9,12]
// Explanation:
// The substring starting at 6 is "foobarthe". It is the concatenation of ["foo","bar","the"].
// The substring starting at 9 is "barthefoo". It is the concatenation of ["bar","the","foo"].
// The substring starting at 12 is "thefoobar". It is the concatenation of ["the","foo","bar"].

// Constraints:
// 1 <= s.length <= 104
// 1 <= words.length <= 5000
// 1 <= words[i].length <= 30
// s and words[i] consist of lowercase English letters.


/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    const map = new Map();
    const wordLength = words[0].length;
    const slideWindow = wordLength * words.length;
    const result = [];
    let leftIndex = 0;
    let rightIndex = slideWindow - 1;

    fillMap(words, map);

    while (rightIndex < s.length) {
        if (rightIndex - leftIndex + 1 === slideWindow) {
            const tempStr = s.substring(leftIndex, rightIndex + 1);
            if (helper(tempStr, wordLength, map)) {
                result.push(leftIndex);
            }
            leftIndex++;
        }
        rightIndex++;
    }
    return result;
};

function fillMap(words, map) {
    for (const word of words) {
        addElementToMap(word, map);
    }
}

function helper(tempStr, wordLength, map) {
    const visited = new Map();
    for (let i = 0; i < tempStr.length; i += wordLength) {
        const word = tempStr.substr(i, wordLength);
        addElementToMap(word, visited);
    }
    for (const [key, val] of visited) {
        if (map.get(key) !== val) {
            return false;
        }
    }
    return true;
}
function addElementToMap(word, map) {
    map.has(word) ? map.set(word, map.get(word) + 1) : map.set(word, 1);
}
