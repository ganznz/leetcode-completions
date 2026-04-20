/*
submission date: 25/01/26

time complexity:
- O(n)

space complexity (auxilary):
- O(1)

review:
- the question asks us to find the maximum number of consecutive 1's given that we're allowed to flip
  at most k 0's. another way of interpreting this problem is to find the maximum number of 1's in a subarray
  that contains at most k 0's. i found solving this problem was easier with this interpretation.

- because i can include a subarray that includes up to k 0's, i kept track of the number of 0's in the subarray window
  and if the number became > k, i incremented the left pointer until the number of 0's satisfied the constraint again.
  as long as this constraint is satisfied, the 0's in the subarray can be considered in the subarray length as 1's.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let left = 0;
    let currZeroes = 0;
    let ans = 0;

    // O(n)
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] == 0) currZeroes++;

        while (currZeroes > k) {
            if (nums[left] == 0) currZeroes--;
            left++;
        }
        ans = Math.max(ans, right-left+1);
    }
    return ans;
};

longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2); // 6
longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3); // 10