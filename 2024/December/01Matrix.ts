// Time: O(2 * m * n)    Space:  O(2 * m * n) 
function updateMatrix(mat: number[][]): number[][] {
    const m = mat.length;
    const n = mat[0].length;

    const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ];

    const answer: number[][] = Array.from({ length: m }, () => Array(n).fill(Infinity));
    const queue: [number, number][] = [];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 0) {
                answer[i][j] = 0;
                queue.push([i, j]);
            }
        }
    }

    // BFS to update distances
    while (queue.length > 0) {
        const [i, j] = queue.shift()!;

        for (const [di, dj] of directions) {
            const ni = i + di;
            const nj = j + dj;

            if (ni >= 0 && ni < m && nj >= 0 && nj < n) {
                if (answer[ni][nj] > answer[i][j] + 1) {
                    answer[ni][nj] = answer[i][j] + 1;
                    queue.push([ni, nj]);
                }
            }
        }
    }

    return answer;
}
