/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let tempNumberX = x
    let reverseInteger = 0

    tempNumberX = Math.abs(tempNumberX) // converts negative number to positive

    while (tempNumberX > 0) {
        let lastDigit = tempNumberX % 10
        reverseInteger = reverseInteger * 10 + lastDigit
        tempNumberX = Math.floor(tempNumberX / 10)
    }

    //checking if integer falls under signed 32-bit integer range [-2 power 31, 2 power 31 - 1]
    let limit = Math.pow(2, 31)
    if (reverseInteger < -limit || reverseInteger > limit) return 0

    return x < 0 ? -reverseInteger : reverseInteger  //if given number is negative we return it as a negative reverse integer
};

//problem link : https://leetcode.com/problems/reverse-integer/description/