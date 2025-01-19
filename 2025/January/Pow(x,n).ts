// Time: O(logn)    Space: O(logn), due to stack space
function myPow(x: number, n: number): number {
    if (n === 0) return 1; // Base case: x^0 = 1

    if (n < 0) {
        x = 1 / x; // Convert x to reciprocal for negative exponents
        n = -n;    // Make n positive
    }

    if (n % 2 === 0) {
        return myPow(x * x, Math.floor(n / 2));
    } else {
        return x * myPow(x * x, Math.floor(n / 2));
    }
}
