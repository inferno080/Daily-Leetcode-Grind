# Simple if-else ladder | Beats 100% | O(n) Time, O(1) Space | Typescript

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Literally a simple if-else ladder

## Approach
<!-- Describe your approach to solving the problem. -->
Just implement the problem desc as is

## Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

## Code
```typescript []
function breakPalindrome(palindrome: string): string {
    if(palindrome.length === 1)
        return "";
    let char_to_change = -1;
    for(let i = 0; i < palindrome.length; i++) {
        if(palindrome.charCodeAt(i) > "a".charCodeAt(0)){
            if(char_to_change === -1) {
                // If we change the middle letter of an odd length palindrome, it still remains a palindrome
                if(palindrome.length %2 === 0 || (i != Math.floor(palindrome.length/2))){
                    char_to_change = i;
                }
            }
        }
    }
    if(char_to_change === -1)
        return palindrome.substring(0, palindrome.length-1) + "b";
    else if (char_to_change === palindrome.length - 1)
        return palindrome.substring(0, char_to_change) + "a";
    else 
        return palindrome.substring(0, char_to_change) + "a" + palindrome.substring(char_to_change+1, palindrome.length);
};
```
