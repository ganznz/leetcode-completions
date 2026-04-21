/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let leftPtr = 0, currentZeroes = 0, answer = 0;

    for (let rightPtr = 0; rightPtr < nums.length; rightPtr++) {
        if (nums[rightPtr] === 0) {
            currentZeroes++;
        }
        // shrink subarray if we have too many zeroes
        while (currentZeroes > k) {
            if (nums[leftPtr] === 0) {
                currentZeroes--;
            }
            leftPtr++;
        }
        answer = Math.max(answer, rightPtr - leftPtr + 1);
    }
    return answer;
};

longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2) // 6
longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3) // 10