/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {

    let tempNumberX = x
    let reverseNumber = 0

    while (tempNumberX > 0) {
        let lastDigit = tempNumberX % 10
        reverseNumber = (reverseNumber * 10) + lastDigit
        tempNumberX = Math.floor(tempNumberX / 10)  //converts 3.2 to 3, it does not give decimal values
    }

    return reverseNumber == x
};