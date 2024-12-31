# Beats 100% | Stack | Typescript
## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
If you encounter a closing bracket, there should be a corresponding opening brack somewhere earlier in the string. If there is a mismatch, return false.

## Approach
<!-- Describe your approach to solving the problem. -->
Use a stack to push open bracket and pop once closing bracket is found. If there is a closing bracket that is out of place, return false.

## Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

## Code
```typescript []
function isValid(s: string): boolean {
    let stack = [];
    for(let x of s) {
        if(x === "(" || x === "[" || x === "{")
            stack.push(x);
        else if (x === ")")
            if(stack[stack.length - 1] !== "(")
                return false;
            else stack.pop();
        else if (x === "}")
            if(stack[stack.length - 1] !== "{")
                return false;
            else stack.pop();
        else if (x === "]")
            if(stack[stack.length - 1] !== "[")
                return false;
            else stack.pop();
    }
    return stack.length === 0;
};
```
