// Time & Space: O(1)    
reverseBits(n) {
        let res = 0;
        for(let i = 0; i < 31; i++) {
            let bit = (n >>> i) & 1;
            res += bit << (31 - i);
        }
        return res >>> 0;
    }
