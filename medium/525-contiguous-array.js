/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    // map stores running sum as keys & indice as value
    const runningSumMap = new Map().set(0, -1);
    let currRunningSum = 0, answer = 0;

    for (let i = 0; i < nums.length; i++) {
        currRunningSum += nums[i] === 0 ? -1 : 1;

        if (runningSumMap.has(currRunningSum)) {
            const jRunSumIndex = runningSumMap.get(currRunningSum);
            answer = Math.max(answer, i-jRunSumIndex);
        } else {
            runningSumMap.set(currRunningSum, i)   
        }
    }

    return answer;
};

findMaxLength([0,1]) // 2
findMaxLength([0,1,0]) // 2

findMaxLength([0,1,1,1,1,1,0,0,0]) // 6
// [-1,1,1,1,1,1,-1,-1,-1]
// [-1,0,1,2,3,4,3,2,1]
// -------|2,3,4,3,2,1|