/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const prefixSumArray = [nums[0]]

    for (let i = 1; i < nums.length; i++) {
        prefixSumArray.push(prefixSumArray[i-1] + nums[i])
    }

    return prefixSumArray
};

runningSum([1,2,3,4]) // [1,3,6,10]
runningSum([1,1,1,1,1]) // [1,2,3,4,5]