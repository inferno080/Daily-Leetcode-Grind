// Time: O(V + E)    Space: O(V)
function isBipartite(graph: number[][]): boolean {
    let paints : Map<number, boolean> = new Map<number, boolean>();
    for(let i = 0; i < graph.length; i++) {
        if(paints.has(i))
            continue;
        let queue = [i];
        let queueFront = 0;
        paints.set(i, true);
        while(queue.length > queueFront) {
            let x : number = queue[queueFront++];
            for(let node of graph[x]) {
                if(paints.has(node)){
                    if(paints.get(node) !== !paints.get(x))
                        return false;
                } else {
                    paints.set(node, !paints.get(x))
                    queue.push(node)
                }
            }
        }
    }
    return true;
};
