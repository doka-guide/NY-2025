export function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const later = () => {
      clearTimeout(timeout);
      func.apply(this, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export function windowWidthDetection() {
  let windowWidth = window.innerWidth;

  const handleResize = debounce(() => {
    windowWidth = window.innerWidth;
    console.log(windowWidth);
  }, 200);

  window.addEventListener("resize", handleResize);

  return windowWidth;
}
