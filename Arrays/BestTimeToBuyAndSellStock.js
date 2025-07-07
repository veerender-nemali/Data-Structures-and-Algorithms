/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    //initially selected
    let min = prices[0]
    let maxProfit = 0

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] - min > maxProfit) { //compares profit,if profit is greater maxProfit,it will be assigned to maxProfit
            maxProfit = prices[i] - min
        }
        if (prices[i] < min) { // if we find any min price we select that price
            min = prices[i]
        }
    }

    return maxProfit
};

//problem no.121 : https://leetcode.com/problems/best-time-to-buy-and-sell-stock/