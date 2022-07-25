export function calculateBoundingRect(rect: DOMRect, transform: DOMMatrix) {
  const topLeft = transform.transformPoint({ x: rect.left, y: rect.top });
  const topRight = transform.transformPoint({ x: rect.right, y: rect.top });
  const bottomLeft = transform.transformPoint({ x: rect.left, y: rect.bottom });
  const bottomRight = transform.transformPoint({ x: rect.right, y: rect.bottom });
  const minX = Math.min(topLeft.x, topRight.x, bottomLeft.x, bottomRight.x);
  const minY = Math.min(topLeft.y, topRight.y, bottomLeft.y, bottomRight.y);
  const maxX = Math.max(topLeft.x, topRight.x, bottomLeft.x, bottomRight.x);
  const maxY = Math.max(topLeft.y, topRight.y, bottomLeft.y, bottomRight.y);
  return new DOMRect(minX, minY, maxX - minX, maxY - minY);
}
