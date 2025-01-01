// Time: O(V+E)   Space: O(V+E)
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    let preReqList = new Map<number, Set<number>>();
    for(let p of prerequisites) {
        let [a,b] = p;
        if(!preReqList.has(a))
            preReqList.set(a, new Set());
        preReqList.get(a).add(b);
        if(!preReqList.has(b))
            preReqList.set(b, new Set());
    }
    let queue = [];
    let queueFront = 0;
    for(let [k,v] of preReqList){
        if(v.size === 0) {
            queue.push(k);
        }
    }
    while(queueFront != queue.length) {
        let x = queue[queueFront++];
        preReqList.delete(x);
        for(let [k,v] of preReqList) {
            if(v.has(x)){
                v.delete(x);
                if(v.size === 0 && preReqList.has(k)) {
                    queue.push(k);
                }
            }
        }
    }
    return 0 >= preReqList.size;
};
