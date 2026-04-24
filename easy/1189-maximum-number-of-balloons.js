/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    const lettersFrequencyMap = new Map([
        ["b", 0],
        ["a", 0],
        ["l", 0],
        ["o", 0],
        ["n", 0],
    ]);

    for (let i = 0; i < text.length; i++) {
        if (lettersFrequencyMap.has(text[i])) {
            const letterFreq = lettersFrequencyMap.get(text[i])
            lettersFrequencyMap.set(text[i], letterFreq + (text[i] == "l" || text[i] == "o" ? 0.5 : 1))
        }
    }

    const letterLowestFrequency = Math.min(...lettersFrequencyMap.values())
    return Number.isInteger(letterLowestFrequency) ? letterLowestFrequency : Math.floor(letterLowestFrequency)
};

maxNumberOfBalloons("nlaebolko") // 1
maxNumberOfBalloons("loonbalxballpoon") // 2
maxNumberOfBalloons("leetcode") // 0