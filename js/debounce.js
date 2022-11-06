

function debounce(fn, delay) {
  let timer = null
  return function(...args) {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

globalThis.c = 1
function a() {
  console.log(this.c)
}
const b = debounce(a, 1000)

setInterval(() => {
  b()
}, 3000)