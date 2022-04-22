let stxFieldCount = 0;

export function generateUniqueId() {
  if (typeof window === 'undefined') {
    stxFieldCount += 1;
  } else {
    window.stxFieldCount = window.stxFieldCount ? window.stxFieldCount + 1 : 1;
    stxFieldCount = window.stxFieldCount;
  }

  return stxFieldCount;
}
