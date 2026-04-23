/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    const prefixCounts = new Map().set(0, 1);
    let runningPrefixSum = 0, answer = 0;

    for (let i = 0; i < nums.length; i++) {
        runningPrefixSum += nums[i];
        const diff = runningPrefixSum - k;
        if (prefixCounts.get(diff)) answer += prefixCounts.get(diff);
        prefixCounts.set(runningPrefixSum, (prefixCounts.get(runningPrefixSum) || 0) + 1);
    }

    return answer;
};

subarraySum([1,1,1], 2) // 2
subarraySum([1,2,3], 3) // 2
subarraySum([1], 0) // 0
subarraySum([-1,-1,1], 0) // 1