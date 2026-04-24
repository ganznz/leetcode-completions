/**
 * @param {number[]} nums
 * @return {number}
 */
var largestUniqueNumber = function(nums) {
    const frequencyMap = new Map();

    // O(n)
    for (let i = 0; i < nums.length; i++) {
        frequencyMap.set(nums[i], (frequencyMap.get(nums[i]) || 0) + 1);
    }

    const uniqueNums = []
    for (const [num, freq] of frequencyMap) {
        if (freq === 1) uniqueNums.push(num);
    }

    return uniqueNums.length ? uniqueNums.sort((a, b) => a - b)[uniqueNums.length-1] : -1;
};

largestUniqueNumber([5,7,3,9,4,9,8,3,1]) // 8
largestUniqueNumber([9,9,8,8]) // -1