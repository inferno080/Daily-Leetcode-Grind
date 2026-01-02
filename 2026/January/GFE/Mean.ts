export default function mean(array: number[]): number {
  return array.length > 0 ? array.reduce((sum, num) => sum += num) / array.length : NaN;
}
