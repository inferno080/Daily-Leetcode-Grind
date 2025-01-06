//Time & Space : O(N)	
dNums : function(A, B){
		let answer = [];
		if(B > A.length)
			return answer;
		else {
			let map = new Map(); // number and freq;
			for(let i = 0; i < B; i++) {
				if(!map.has(A[i]))
					map.set(A[i], 0);
				map.set(A[i], map.get(A[i]) + 1);
			}
			answer.push(map.size);
			let bottom = 0;
			for(let i = B; i < A.length; i++) {
				let num = A[bottom];
				if(map.get(num) === 1)
					map.delete(num);
				else 
					map.set(num, map.get(num) - 1);
				if(!map.has(A[i]))
					map.set(A[i], 0);
				map.set(A[i], map.get(A[i]) + 1);
				answer.push(map.size);
				bottom++;
			}
		}
		return answer;
	}
