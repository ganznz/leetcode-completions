/*
submission date: 25/01/26

time complexity:
- O(n)

space complexity (auxilary):
- O(1)

review:
- my algo uses a sliding window approach to achieve O(n) time complexity. Given that that
  window is a fixed size of k, there is no need to use a left pointer, and to initialize the window at k size
  i sum the first k elements of nums and from there, slide the window across in my second loop.
- first loop has a time complexity of O(k), but because k <= nums.length always, time complexity is O(n).

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let windowSum = 0;

    // sum first k elements of nums
    // O(k)
    for (let i = 0; i < k; i++) windowSum += nums[i];

    let maxSum = windowSum

    // O(n)
    for (let i = k; i < nums.length; i++) {
        windowSum += nums[i] - nums[i-k];
        maxSum = Math.max(maxSum, windowSum);

    }
    return maxSum / k;
};

findMaxAverage([1,12,-5,-6,50,3], k = 4) // 12.75000
findMaxAverage([5], k = 1) // 5.00000
findMaxAverage([-1], k = 1) // -1.00000