// Time: O(1)    Space: O(1)    
getSum(a, b) {
        while (b !== 0) {
            let carry = (a & b) << 1;
            a ^= b;
            b = carry;
        }
        return a;
    }
