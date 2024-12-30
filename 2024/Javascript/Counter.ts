// https://www.youtube.com/watch?v=yEGQQAG5V68&ab_channel=NeetCodeIO
function createCounter(n: number): () => number {
    return function() {
        return n++;
    }
}
