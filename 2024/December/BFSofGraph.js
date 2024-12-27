    
// Time : O(n)    Space : O(2n)
bfsOfGraph(adj) {
      // code here
      let queue = [0];
      let queueFront = 0;
      let out = [];
      let visited = new Set();
      visited.add(0);
      while(queue.length !== queueFront) {
          let x = queue[queueFront++];
          out.push(x);
          for(let node of adj[x]) {
              if(!visited.has(node)){
                  queue.push(node);
                  visited.add(node);
              }
          }
      }
      return out;
  }
