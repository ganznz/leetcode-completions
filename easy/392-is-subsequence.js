/*
submission date: 22/01/26

time complexity:
- O(m)
- loose upper bound: O(m + n)

space complexity:
- O(1)
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let ptr1 = 0;
    let ptr2 = 0;

    while (ptr1 < s.length && ptr2 < t.length) {
        if (s[ptr1] == t[ptr2]) {
            ptr1++;
        }
        ptr2++;
    }

    return ptr1 == s.length;
};

isSubsequence("abc", "ahbgdc") // true
isSubsequence("axc", "ahbgdc") // false