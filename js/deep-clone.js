

function deepClone(source, map = new WeakMap()) {
  // 处理 Map
  if (source instanceof Map) {
    const result = new Map()
    source.forEach((value, key) => {
      result.set(key, value)
    })
    return result
  }
  // 处理 Set
  if (source instanceof Set) {
    const result = new Set()
    source.forEach((value) => {
      result.add(value)
    })
    return result
  }
  // 正则会被识别成 object
  if (source instanceof RegExp) {
    return source
  }
  if (typeof source === 'object') {
    // 如果要拷贝的对象在WeakMap中已经存在了，则直接返回这个对象之前的值
    if (map.has(source)) {
      return map.get(source)
    }
    const result = Array.isArray(source) ? [] : {}
    map.set(source, result)
    for (let key in source) {
      result[key] = deepClone(source[key], map)
    }
    return result
  } else {
    return source
  }
}
const target = {
  a: 1,
  b: 2,
  c: {
    a: 1,
    b: 2,
    c: {
      c: {
        c: {
          c: {
            c: {
              c: {
                c: {
                  c: {
                    c: {
                      c: { c: { c: { c: { c: { c: { c: { c: {} } } } } } } },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  d: new Array(10).fill(Math.random().toFixed(2)),
  e: () => { },
  f: new RegExp("a|b"),
  g: new Map().set(() => {console.log(1)}, 'value'),
  h: new Set().add(1)
};

target.i = target

console.log(deepClone(target))