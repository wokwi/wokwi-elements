import { calculateBoundingRect } from './geometry';

export function getScreenCTM(
  target: SVGGraphicsElement,
  workaroundElement: SVGGraphicsElement,
  workaroundRect: DOMRectReadOnly
) {
  const { userAgent } = navigator;
  const workaroundNeeded =
    userAgent.indexOf('Firefox') >= 0 ||
    userAgent.indexOf('Epiphany') >= 0 ||
    userAgent.indexOf('Safari') >= 0;

  if (workaroundNeeded) {
    // Firefox's getScreenCTM() is broken: https://bugzilla.mozilla.org/show_bug.cgi?id=1610093
    const targetCTM = target.getCTM();
    const workaroundCTM = workaroundElement?.getCTM();
    const boundingRect = workaroundElement?.getBoundingClientRect();
    const svgRect = workaroundElement?.ownerSVGElement?.getBoundingClientRect();
    if (!boundingRect || !svgRect || !workaroundCTM || !targetCTM) {
      return null;
    }

    const centerX = svgRect.x + svgRect.width / 2;
    const centerY = svgRect.y + svgRect.height / 2;
    const deltaX = centerX - (boundingRect.x + boundingRect.width / 2);
    const deltaY = centerY - (boundingRect.y + boundingRect.height / 2);
    const angle = (Math.atan2(deltaY, deltaX) / Math.PI) * 180;
    const rotation = new DOMMatrix().rotate(angle);
    const rotatedRect = calculateBoundingRect(workaroundRect, rotation);
    const scaleX = rotatedRect.width / boundingRect.width;
    const scaleY = rotatedRect.height / boundingRect.height;
    const localCTM = workaroundCTM.inverse().multiply(targetCTM);
    return rotation
      .inverse()
      .translate(rotatedRect.left, rotatedRect.top)
      .multiply(localCTM.inverse())
      .scale(scaleX, scaleY)
      .translate(-boundingRect.left, -boundingRect.top);
  } else {
    return target.getScreenCTM()?.inverse() || null;
  }
}
