import type { Y } from '@blocksuite/store'

function isYText(obj: any): obj is Y.Text {
  return obj && (typeof obj.yText === 'object') && (typeof obj.toDelta === 'function')
}

export function cloneWithYType(x: any, cache = new WeakMap()): any {
  if (x === null || x === undefined)
    return x
  if (typeof x !== 'object')
    return x

  if (cache.has(x))
    return '[Cycle]'

  let k: string | number
  let tmp: any
  const str = Object.prototype.toString.call(x)

  if (str === '[object Object]') {
    if (isYText(x)) {
      return {
        type: 'yText',
        content: x.toString(),
        delta: x.toDelta(),
      }
    }

    if (x.constructor !== Object && typeof x.constructor === 'function') {
      tmp = new x.constructor()
      cache.set(x, tmp)
      for (k in x) {
        if (Object.prototype.hasOwnProperty.call(x, k) && tmp[k] !== x[k])
          tmp[k] = cloneWithYType(x[k], cache)
      }
    }
    else {
      tmp = {} // null
      cache.set(x, tmp)
      for (k in x) {
        if (k === '__proto__') {
          Object.defineProperty(tmp, k, {
            value: cloneWithYType(x[k], cache),
            configurable: true,
            enumerable: true,
            writable: true,
          })
        }
        else {
          tmp[k] = cloneWithYType(x[k], cache)
        }
      }
    }
    return tmp
  }

  if (str === '[object Array]') {
    k = x.length
    tmp = Array(k)
    cache.set(x, tmp)
    for (; (k as number)--;)
      tmp[k] = cloneWithYType(x[k], cache)

    return tmp
  }

  if (str === '[object Set]') {
    tmp = new Set()
    cache.set(x, tmp)
    x.forEach((val: any) => {
      tmp.add(cloneWithYType(val, cache))
    })
    return tmp
  }

  if (str === '[object Map]') {
    tmp = new Map()
    cache.set(x, tmp)
    x.forEach((val: any, key: any) => {
      tmp.set(cloneWithYType(key, cache), cloneWithYType(val, cache))
    })
    return tmp
  }

  if (str === '[object Date]')
    return new Date(+x)

  if (str === '[object RegExp]') {
    tmp = new RegExp(x.source, x.flags)
    tmp.lastIndex = x.lastIndex
    return tmp
  }

  if (str === '[object DataView]')
    return new x.constructor(cloneWithYType(x.buffer, cache))

  if (str === '[object ArrayBuffer]')
    return x.slice(0)

  // ArrayBuffer.isView(x)
  // ~> `new` bcuz `Buffer.slice` => ref
  if (str.slice(-6) === 'Array]')
    return new x.constructor(x)

  return x
}
