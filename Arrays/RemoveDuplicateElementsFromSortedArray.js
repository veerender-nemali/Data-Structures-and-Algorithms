/**
 * @param {number[]} nums
 * @return {number}
 */

// 2 pointer approach
var removeDuplicates = function (nums) {
    let x = 0 //pointer x holds the responsibility where to place the unique element

    //pointer i loops through array and finds unique element
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[x]) {
            x = x + 1
            nums[x] = nums[i]
        }
    }

    return x + 1
};

//problem no.26 : https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/