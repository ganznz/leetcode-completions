/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let rangeTotal = 0;
    let actualTotal = 0;

    // O(n)
    for (let i = 0; i < nums.length; i++) {
        rangeTotal += i;
        actualTotal += nums[i];
    }
    // compensate for the last value not being added to rangeTotal in the loop
    rangeTotal += nums.length;

    // the difference between rangeTotal and actualTotal is the missing number
    // algo time complexity: O(n)
    // algo space complexity: O(1)
    return rangeTotal - actualTotal;
};

// re-solve using set
var missingNumberUsingSet = function(nums) {
    const numSet = new Set(nums);

    // O(n)
    for (let i = 0; i <= nums.length; i++) {
        if (!numSet.has(i)) return i;
    }

    // algo time complexity: O(n)
    // algo space complexity: O(n)
    // note: while more succint than previous solution, it is not as space optimal
};

missingNumber([3,0,1]) // 2
missingNumber([0,1]) // 2
missingNumber([9,6,4,2,3,5,7,0,1]) // 8

missingNumberUsingSet([3,0,1]) // 2
missingNumberUsingSet([0,1]) // 2
missingNumberUsingSet([9,6,4,2,3,5,7,0,1]) // 8