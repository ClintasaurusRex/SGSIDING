let scrollLockCount = 0;
let originalOverflow = "";

export function lockBodyScroll() {
  if (typeof document === "undefined") {
    return;
  }

  if (scrollLockCount === 0) {
    originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  }

  scrollLockCount += 1;
}

export function unlockBodyScroll() {
  if (typeof document === "undefined" || scrollLockCount === 0) {
    return;
  }

  scrollLockCount -= 1;

  if (scrollLockCount === 0) {
    document.body.style.overflow = originalOverflow;
    originalOverflow = "";
  }
}
