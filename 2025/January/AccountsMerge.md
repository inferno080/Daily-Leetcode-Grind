# Solution References

https://www.youtube.com/watch?v=6st4IxEF-90

https://www.youtube.com/watch?v=KbFlZYCpONw&t=302s

# Complexity
- Time complexity: $$O(N + 2* (E · α(n)) + ElogE)$$ = $$O(E log E)$$
, where E = number of Emails and  α(n) is the inverse Ackermann function, whihc is amortized constant time
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(3N + E)$$, worst case
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
class UnionFind {

    private ids: Map<number, number>;
    private sz: Map<number, number>;
    private numSets : number;

    constructor(ufLength : number) {
        this.ids = new Map<number, number>();
        this.sz = new Map<number, number>();
        for(let i = 0; i < ufLength; i++) {
            this.ids.set(i, i);
            this.sz.set(i, 1);
            this.numSets += 1;
        }
    }

    public union(p: number, q: number) {
        let rootP = this.findRoot(p);
        let rootQ = this.findRoot(q);
        if(rootP === rootQ)
            return;
        if(this.sz.get(rootP) > this.sz.get(rootQ)) {
            this.ids.set(rootQ, rootP);
            this.sz.set(rootP, this.sz.get(rootP) + this.sz.get(rootQ));
        } else {
            this.ids.set(rootP, rootQ);
            this.sz.set(rootQ, this.sz.get(rootP) + this.sz.get(rootQ));
        }
        this.numSets--;
    }

    public findRoot(p: number) {
        let root = p;
        while(root != this.ids.get(root))
            root = this.ids.get(root);

        // path compression
        while(p != root) {
            let temp = this.ids.get(p);
            this.ids.set(p, root);
            p = temp;
        }
        return root;
    }
}
function accountsMerge(accounts: string[][]): string[][] {
    let uf : UnionFind = new UnionFind(accounts.length);
    let emailToAccNumMap : Map<string, number> = new Map<string, number>();
    for(let i = 0; i < accounts.length; i++) {
        let emails = accounts[i];
        for(let j = 1; j < accounts[i].length; j++) {
            if(emailToAccNumMap.has(accounts[i][j])) {
                uf.union(emailToAccNumMap.get(accounts[i][j]), i);
            } else {
                emailToAccNumMap.set(accounts[i][j], i);
            }
        }
    }
    let leaderEmailsMap : Map<number, string[]> = new Map<number, string[]>();
    for(let [k, v] of emailToAccNumMap) {
        let leader = uf.findRoot(v);
        if(!leaderEmailsMap.has(leader))
            leaderEmailsMap.set(leader, []);
        leaderEmailsMap.get(leader).push(k)
    }

    // format output
    let res = [];
    for(let [k,v] of leaderEmailsMap) {
        res.push([accounts[k][0], ...v.sort()]);
    }

    return res;
};
```
