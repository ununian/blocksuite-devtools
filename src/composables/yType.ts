import type { Y } from '@blocksuite/store'
import type { MaybeRefOrGetter } from 'vue'

export function useYType<T>(yMap: MaybeRefOrGetter<Y.AbstractType<T> | undefined>) {
  const jsonValue = shallowRef<T>()
  const typeValue = shallowRef<Y.AbstractType<T>>()

  function init(newMap: Y.AbstractType<T> | undefined, oldMap: Y.AbstractType<T> | undefined) {
    if (oldMap)
      oldMap.unobserve(sync)

    if (newMap) {
      newMap.observeDeep(sync)
      sync()
    }

    typeValue.value = newMap ? markRaw(newMap) : undefined
  }

  function sync() {
    const map = toValue(yMap)
    jsonValue.value = (map ? markRaw(map) : undefined) as T | undefined
  }

  if ((isRef(yMap) || typeof yMap === 'function')) {
    watch(init, sync, {
      immediate: true,
    })
  }
  else {
    sync()
  }

  return reactive({ jsonValue, typeValue })
}
