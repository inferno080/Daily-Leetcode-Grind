// Time: O(m*n*log(m * n) + m*n)
// Space: O(3 * m * n)

function numIslands(grid: string[][]): number {
    let ids = new Map<number, number>();
    let sz = new Map<number, number>();
    let numSets = 0;
    let find = (p : number) => {
        let root = p
        while(ids.get(root) !== root) {
            root = ids.get(root);
        }
        // compress
        while(ids.get(p) !== root) {
            let next = ids.get(p);
            ids.set(p, root);
            p = next;
        }
        return root;
    }
    let union = (p : number, q: number) => {
        let r1 = find(p);
        let r2 = find(q);
        if(r1 === r2)
            return;
        if(sz.get(r1) > sz.get(r2)) {
            ids.set(r2, r1);
            sz.set(r1, sz.get(r1) + sz.get(r2));
        } else {
            ids.set(r1, r2);
            sz.set(r2, sz.get(r1) + sz.get(r2));
        }
        numSets--;
    }   

    // create VertexMap for Islands 

    let c = 0;
    let vertexMap = new Map<number, number[]>();

    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] === "1") {
                ids.set(c, c);
                sz.set(c, 1);
                numSets++;
                vertexMap.set(c, []);
                if(i+1 < grid.length && grid[i+1][j] == "1" ){
                    vertexMap.get(c).push(c + grid[0].length);
                }
                if(i-1 >= 0 && grid[i-1][j] == "1") {
                    vertexMap.get(c).push(c - grid[0].length);
                }
                if(j-1 >= 0 && grid[i][j-1] == "1") {
                    vertexMap.get(c).push(c - 1);
                }
                if(j+1 < grid[0].length && grid[i][j+1] == "1") {
                    vertexMap.get(c).push(c + 1);
                }
            }
            c++;
        }
    }
    if(numSets === 0)
        return 0;
    else {
        for(let [k,v] of vertexMap) {
            for(let n of v) {
                union(k, n);
            }
        }
    }
    return numSets;

};
