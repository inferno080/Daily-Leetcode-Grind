export default function makeCounter(initialValue: number = 0): () => number {
  let currentValue: number = initialValue;
  function counter () {
    return currentValue++;
  }
  return counter;
}
