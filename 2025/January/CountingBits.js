// Time: O(n)  Space: O(1)
countBits(n) {
        let ans = [];
        for(let num = 0; num <= n; num++){
            let one = 0;
            for (let i = 0; i < 32; i++) {
                if ((num & (1 << i)) !== 0) {
                    one++;
                }
            }
            ans.push(one);

        }
        return ans;
    }
