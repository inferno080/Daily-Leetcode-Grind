// Time: O(nlogn + 2^t)  Space: O(t + t.2^t)
// where t = target / min(candidates) i.e. maximum number of elemts in a combination

function combinationSum(candidates: number[], target: number): number[][] {
    candidates.sort((a, b) => a - b); // Sort candidates to avoid duplicates
    const answer: number[][] = [];

    const helper = (temp: number[], currSum: number, start: number) => {
        if (currSum === target) {
            answer.push([...temp]); // Add valid combination
            return;
        }
        if (currSum > target) return; // Prune recursion if sum exceeds target

        for (let i = start; i < candidates.length; i++) {
            temp.push(candidates[i]); // Include the current candidate
            helper(temp, currSum + candidates[i], i); // Allow reusing the same candidate
            temp.pop(); // Backtrack
        }
    };

    helper([], 0, 0); // Start with an empty combination
    return answer;
}
