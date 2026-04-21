/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let windowSum = 0;

    // sum first k elements of nums
    for (let i = 0; i < k; i++) {
        windowSum += nums[i];
    }

    let maxSum = windowSum;

    // now calculate sums of remaining subarrays of length k
    for (let i = k; i < nums.length; i++) {
        windowSum += nums[i] - nums[i-k];
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum / k

};

findMaxAverage([1,12,-5,-6,50,3], 4) // 12.75000 (Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75)
findMaxAverage([5], 1) // 5.00000