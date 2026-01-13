function findClosest(x: number, y: number, z: number): number {
  const firstDistance = Math.abs(z - x);
  const secondDistance = Math.abs(z - y);
  if (firstDistance < secondDistance) return 1;
  else if (firstDistance > secondDistance) return 2;
  return 0;
}
