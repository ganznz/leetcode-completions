/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    // because of constraint 1 <= nums[i] <= 1000, if k = 0 then return 0
    if (k === 0) {
        return 0
    }

    let leftPtr = 0, curr = 1, answer = 0;

    for (let rightPtr = 0; rightPtr < nums.length; rightPtr++) {
        curr *= nums[rightPtr];

        while (curr >= k && leftPtr <= rightPtr) {
            curr /= nums[leftPtr];
            leftPtr++;
        }

        // if the products of each item in the subarray < k, we have window size amount of subarrays that meet the constraint
        answer += rightPtr - leftPtr + 1;
    }

    return answer;
};

numSubarrayProductLessThanK([10,5,2,6], 100) // 8
numSubarrayProductLessThanK([1,2,3], 0) // 0
numSubarrayProductLessThanK([1,1,1], 1) // 0