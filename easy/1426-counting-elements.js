/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
    const set = new Set(arr);
    let answer = 0;

    for (let i = 0; i < arr.length; i++) {
        if (set.has(arr[i] + 1)) answer +=1;
    }

    // algo time complexity: O(n)
    // algo space complexity: O(n)
    return answer;
};

countElements([1,2,3]) // 2
countElements([1,1,3,3,5,5,7,7]) // 0