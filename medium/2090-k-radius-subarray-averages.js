/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function(nums, k) {
    // preprocess prefix sum array
    const prefixSumArray = [nums[0]];

    // O(n)
    for (let i = 1; i < nums.length; i++) {
        prefixSumArray.push(prefixSumArray[i-1] + nums[i]);
    }

    const answer = []
    
    // O(n)
    for (let i = 0; i < nums.length; i++) {
        if (i < k || i >= nums.length - k) {
            answer.push(-1);
        } else {
            const avg = (prefixSumArray[i+k] - prefixSumArray[i-k] + nums[i-k]) / (k * 2 + 1); // (sum of numbers within radius / amount of numbers in radius) = radius avg
            answer.push(Math.floor(avg));
        }
    }

    // algo time complexity O(2n) => O(n)
    // algo space complexity O(2n) => O(n)
    return answer;
};

getAverages([7,4,3,9,1,8,5,2,6], 3) // [-1,-1,-1,5,4,4,-1,-1,-1]
getAverages([100000], 0) // [100000]
getAverages([8], 100000) // [-1]