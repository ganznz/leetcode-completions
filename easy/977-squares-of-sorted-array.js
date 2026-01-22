/*
submission date: 23/01/26

time complexity:
- O(n)

space complexity (auxilary):
- O(1)

review:
- as the question stated it wanted a solution of time complexity O(n), i realised
the trivial solution of squaring then sorting wouldn't work as it results in O(n^2) complexity.

- i knew a 2-pointer approach would work, with one at the start and the other at the end, eventually meeting in the middle.
because the nums array is sorted in non-decreasing order, the largest values after being squared are on the leftmost and rightmost
sides of the array, with the squared values becoming smaller the more you move into the middle of the array.
in doing this, the resulting array became decreasing order and with a O(n) reverse method I get the expected output in O(n) time complexity.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let ptrL = 0;
    let ptrR = nums.length-1;
    let result = [];

    while (ptrL <= ptrR) { // O(n)
        if (nums[ptrL] ** 2 > nums[ptrR] ** 2) {
            result.push(nums[ptrL] ** 2);
            ptrL++;
        } else {
            result.push(nums[ptrR] ** 2);
            ptrR--;
        }
    }
    result.reverse(); // O(n)
    return result;
};

sortedSquares([-4,-1,0,3,10]) // [0,1,9,16,100]
sortedSquares([-7,-3,2,3,11]) // [4,9,9,49,121]