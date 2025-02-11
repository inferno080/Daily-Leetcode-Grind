// Time: O(N+P)    Space: O(3N + P)
class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        let preReqMap = new Map();
        let visited = new Set();
        for(let p of prerequisites) {
            if(!preReqMap.has(p[0]))
                preReqMap.set(p[0], new Set());
            preReqMap.get(p[0]).add(p[1]);
        }
        let noPreReqQueue  = [];
        for(let i = 0 ; i < numCourses; i++) {
            if(!preReqMap.has(i)){
                noPreReqQueue.push(i);
            }
        }
        if(noPreReqQueue.length === 0)
            return false;
        let queueFront = 0;
        while(queueFront < noPreReqQueue.length) {
            let node = noPreReqQueue[queueFront++];
            visited.add(node);
            for(let [k,v] of preReqMap) {
                if(v.has(node)) {
                    v.delete(node);
                }
                if(v.size === 0){
                   noPreReqQueue.push(k);
                   preReqMap.delete(k);
                }
        
            }
        }
        return visited.size === numCourses;
    }
}
