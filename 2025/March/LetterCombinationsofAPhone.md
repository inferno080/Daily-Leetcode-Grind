# Beats 100% | Typescript | Recursion

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem is exponential in nature, so the first thought theat propped in my mind was recursion.

## Approach
<!-- Describe your approach to solving the problem. -->
We create a map to easily fetch letters for each digit in O(1) time. After that we define a helper function that helps us navigate each and every possible permutation.

## Complexity
- Time complexity: $$O(4^n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(4^n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

## Code
```typescript []
function letterCombinations(digits: string): string[] {
    let phoneKeyboard = new Map<string, string[]>();
    phoneKeyboard.set("2", ["a","b","c"]);
    phoneKeyboard.set("3", ["d","e","f"]);
    phoneKeyboard.set("4", ["g","h","i"]);
    phoneKeyboard.set("5", ["j","k","l"]);
    phoneKeyboard.set("6", ["m","n","o"]);
    phoneKeyboard.set("7", ["p","q","r","s"]);
    phoneKeyboard.set("8", ["t","u","v"]);
    phoneKeyboard.set("9", ["w","x","y","z"]);

    let temp: string[] = [];

    const helper = (digitIndex: number, tempStr: string) => {
        if (digitIndex === digits.length) {
            temp.push(tempStr);
            return;
        }
        for (let letter of phoneKeyboard.get(digits[digitIndex])) {
            helper(digitIndex + 1, tempStr + letter);
        }
    }

    if (digits.length > 0) {
        helper(0, "");
    }

    return temp;
}

```
