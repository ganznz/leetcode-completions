/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    const counts = new Map();
    let answer = [];

    // track frequency of all numbers across entire 2d array
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums[i].length; j++) {
            const num = nums[i][j]
            counts.set(num, (counts.get(num) || 0) + 1);
        }
    }


    // store numbers in answer array that appear in every array
    for (const numFrequency of counts) {
        const [num, frequency] = numFrequency;
        if (frequency === nums.length) {
            answer.push(num);
        }
    }

    return answer.sort((a, b) => a - b);
};

intersection([[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]) // [3,4]
intersection([[1,2,3],[4,5,6]]) // []