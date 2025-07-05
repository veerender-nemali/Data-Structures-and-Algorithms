/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {

    let x = 0

    for (let i = 0; i < nums.length; i++) {
        //only shift if the a[i] value not equal to given value
        if (nums[i] !== val) {
            nums[x] = nums[i]
            x = x + 1
        }
    }

    return x
};

//problem no.27 : https://leetcode.com/problems/remove-element/description/