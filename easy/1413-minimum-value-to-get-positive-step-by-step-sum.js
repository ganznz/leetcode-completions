/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    // get prefix sum array
    const prefixSumArray = [nums[0]];
    let minStepByStepValue = nums[0];
    
    for (let i = 1; i < nums.length; i++) { 
        prefixSumArray.push(prefixSumArray[i-1] + nums[i]);
        minStepByStepValue = Math.min(minStepByStepValue, prefixSumArray[i])
    }

    /*
    we use variable minStepByStepValue to store the minimum value in the prefix sum array because:
    - index 0 of the sorted array gives us the lowest step-by-step sum assuming our startValue=0.
    - therefore, to ensure our step-step-step sum is never < 1, we ensure the following conditions:
    -- if result[0] is negative, then our startSum needs to be Math.abs(result[0]) + 1
    -- if result[0] is positive, then minimum start value should be positive (lowest is 1)
    */
    
    return minStepByStepValue < 0 ? Math.abs(minStepByStepValue) + 1 : 1;
};

minStartValue([-3,2,-3,4,2]) // 5
minStartValue([1,2]) // 1
minStartValue([1,-2,-3]) // 5
minStartValue([12]) // 5