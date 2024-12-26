# Beats 95% Runtime | Typescript ✅
## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem is very similar to two sum. So it can be done with a hashMap and O(n) time.

## Approach
<!-- Describe your approach to solving the problem. -->
Create a hashMap that keeps track of each number encountered, along with it's frequency. While iterating our nums array, if we find that a number's compliment exists in our hashMap, simply decrease it's count or delete the key (if count becomes 0).

## Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$ - worst case
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

## Code
```typescript []
function maxOperations(nums: number[], k: number): number {
    let hashMap : Map<number, number> = new Map<number, number>(); // compliment, count
    let answer = 0;
    for(let i = 0; i < nums.length; i++) {
        if(hashMap.has(k - nums[i])) {
            answer += 1;
            let count = hashMap.get(k - nums[i]);
            if(count > 1)
                hashMap.set(k - nums[i], count-1);
            else hashMap.delete(k - nums[i]);
        } else { 
            if(!hashMap.has(nums[i]))
                hashMap.set(nums[i], 0)
            hashMap.set(nums[i], (hashMap.get(nums[i]) + 1));
        }
    }
    return answer;
};
```
