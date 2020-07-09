function debounce(fn, delay) {
  let timer;
  return function() {
    const args = arguments;
    const _this = this;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function() {
      fn.apply(_this, args);
    }, delay);
  };
}
