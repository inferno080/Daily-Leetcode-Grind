// Time: O(n) and constant space
function maxProfit(prices: number[]): number {
    let maxProfit: number = 0;
    let currBuy: number = prices[0];
    for(let i = 0; i < prices.length; i++) {
        maxProfit = Math.max(maxProfit, prices[i] - currBuy);
        currBuy = Math.min(currBuy, prices[i]);
    }
    return maxProfit;
};
