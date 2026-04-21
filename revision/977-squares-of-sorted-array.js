/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let l = 0;
    let r = nums.length-1;
    const result = []

    while (l <= r) {
        nums[l] * nums[l] >= nums[r] * nums[r] ? result.push(Math.pow(nums[l++], 2)) : result.push(Math.pow(nums[r--], 2));
    }
    return result.reverse()
};

sortedSquares([-7,-3,2,3,11]) // [4,9,9,49,121] 
sortedSquares([-4,-1,0,3,10]) // [0,1,9,16,100] 