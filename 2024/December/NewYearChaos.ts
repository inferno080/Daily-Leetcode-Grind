function minimumBribes(q: number[]): void {
    let bribeCounter = 0;
    for (let i = q.length - 1; i >= 0; i--) {
        if (q[i] > i + 3) {
            console.log("Too chaotic");
            return;
        }
        // Count the number of people who have bribed this person
        for (let j = Math.max(0, q[i] - 2); j < i; j++) {
            if (q[j] > q[i]) {
                bribeCounter++;
            }
        }
    }
    console.log(bribeCounter);
}
