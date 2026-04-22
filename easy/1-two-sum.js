/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement), i]
        }

        map.set(nums[i], i);
    }
};

twoSum([2,7,11,15], 9) // [0,1]
twoSum([3,2,4], 6) // [1,2]