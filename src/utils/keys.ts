export const SPACE_KEYS = [' ', 'Spacebar'];

export function getUserAgent() {
  return typeof navigator === 'object' ? navigator.userAgent : '';
}

function isMac() {
  return getUserAgent().indexOf('Macintosh') >= 0;
}

export function ctrlCmdPressed(e: KeyboardEvent | MouseEvent) {
  return isMac() ? e.metaKey : e.ctrlKey;
}
