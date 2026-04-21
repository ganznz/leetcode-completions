/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
    // preprocess prefix sum array
    const prefixArray = [nums[0]]
    for (let i = 1; i < nums.length; i++) {
        prefixArray.push(prefixArray[i-1] + nums[i]);
    }

    let answer = 0;

    for (let i = 0; i < nums.length-1; i++) {
        let leftHalfSum = prefixArray[i];
        let rightHalfSum = prefixArray[nums.length-1] - prefixArray[i+1] + nums[i+1]
        
        if (leftHalfSum >= rightHalfSum) {
            answer++;
        }
    }

    return answer;
};

/*
    re-solve without using a prefix array
*/
var waysToSplitArrayNoPrefixArr = function(nums) {
    const total = nums.reduce((a, b) => a + b, 0)
    let leftHalfSum = 0, answer = 0;

    for (let i = 0; i < nums.length-1; i++) {
        leftHalfSum += nums[i]
        const rightHalfSum = total - leftHalfSum;
        
        if (leftHalfSum >= rightHalfSum) {
            answer++;
        }
    }

    return answer;
};

waysToSplitArray([10,4,-8,7]) // 2
waysToSplitArray([2,3,1,0]) // 2
waysToSplitArrayNoPrefixArr([10,4,-8,7]) // 2
waysToSplitArrayNoPrefixArr([2,3,1,0]) // 2
