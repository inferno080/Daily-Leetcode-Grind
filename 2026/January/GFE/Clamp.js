export default function clamp(
  value: number,
  lower: number,
  upper: number,
): number {
  return (value > upper) ? upper : ((value < lower) ? lower : value);
}
