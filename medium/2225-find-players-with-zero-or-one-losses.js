/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    const losersFrequency = new Map(); // map tracking how many times each player lost
    const lostZeroTimes = []
    const lostOneTime = []

    // O(n)
    for (let i = 0; i < matches.length; i++) {
        const [winner, loser] = matches[i];
        losersFrequency.set(winner, losersFrequency.get(winner) || 0); // if winner is not in map, add them
        losersFrequency.set(loser, (losersFrequency.get(loser) || 0) + 1);
    }

    // O(n)
    for (const [player, lossCount] of losersFrequency) {
        if (lossCount === 0) lostZeroTimes.push(player);
        if (lossCount === 1) lostOneTime.push(player);
    }

    return [
        lostZeroTimes.sort((a, b) => a - b),
        lostOneTime.sort((a, b) => a - b)
    ]
};

findWinners([[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]])
// [[1,2,10],[4,5,7,8]]

findWinners([[2,3],[1,3],[5,4],[6,4]])
// [[1,2,5,6],[]]