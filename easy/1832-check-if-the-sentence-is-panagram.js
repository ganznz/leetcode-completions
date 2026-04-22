/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    const seenLetters = new Set();

    for (let i = 0; i < sentence.length; i++) {
        if (!seenLetters.has(sentence[i])) seenLetters.add(sentence[i]);
        if (seenLetters.size === 26) return true;
    }

    return false;
};

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog")) // true
console.log(checkIfPangram("leetcode")) // false