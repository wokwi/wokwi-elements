export const clamp = (min: number, max: number, value: number): number => {
  const clampedValue = Math.min(value, max);
  return Math.max(clampedValue, min);
};
