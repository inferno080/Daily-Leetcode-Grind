# Beats 97% Runtime, 98% Memory | Typescript
## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Use a pointer to siumulate a new day, and keep track of the day the price was lowest. Then keep checking the profit for each day if you had product the stock at lowest price and sold on that day.

## Approach
<!-- Describe your approach to solving the problem. -->
Use two integers - one to keep track of curr profit and the other to keep track of the lowest price.

## Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

## Code
```typescript []
function maxProfit(prices: number[]): number {
    let currProfit = 0;
    let lowest = 0;
    for(let i = 0; i < prices.length; i++) {
        currProfit = Math.max(currProfit, prices[i] - prices[lowest]);
        if(prices[lowest] > prices[i])
            lowest = i;
    }
    return currProfit;
};
```
