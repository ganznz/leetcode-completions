/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    const oddNumberCounts = new Map().set(0, 1);
    let currentOddNumbers = 0, answer = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 1) currentOddNumbers += 1;

        if (oddNumberCounts.get(currentOddNumbers - k)) {
            answer += oddNumberCounts.get(currentOddNumbers - k);
        }

        oddNumberCounts.set(currentOddNumbers, (oddNumberCounts.get(currentOddNumbers) || 0) + 1)
    }

    return answer;
};

numberOfSubarrays([1,1,2,1,1], 3) // 2
numberOfSubarrays([2,4,6], 1) // 0
numberOfSubarrays([2,2,2,1,2,2,1,2,2,2,1], 2) // 16