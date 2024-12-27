// Time: O(V+E)    Space:O(V)
function isBipartite(graph: number[][]): boolean {
    let paints = new Map<number, boolean>();
    let dfs = (node : number, paints : Map<number, boolean>) => {
        let color = paints.get(node);
        for(let n of graph[node]){
            if(!paints.has(n)) {
                paints.set(n, !color);
                if(!dfs(n, paints))
                    return false;
            } else {
                if(paints.get(n) !== !color) {
                    return false;
                }
            }
        }
        return true;
    }
    for(let i = 0; i < graph.length; i++) {
        if(!paints.has(i)) {
            paints.set(i, true);
            if(!dfs(i, paints))
                return false;
        }
    }
    return true;
};
