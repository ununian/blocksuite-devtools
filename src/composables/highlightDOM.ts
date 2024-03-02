import type { MaybeComputedElementRef } from '@vueuse/core'

export function useHighlightDOM(element: MaybeComputedElementRef<HTMLElement | undefined>) {
  const bounding = reactive(useElementBounding(element))

  useEventListener('scroll', bounding.update, true)

  const boxStyles = computed(() => {
    if (element && ('value' in element ? element.value : element)) {
      return {
        display: 'block',
        width: `${bounding.width}px`,
        height: `${bounding.height}px`,
        left: `${bounding.left}px`,
        top: `${bounding.top}px`,
        backgroundColor: '#3eaf7c44',
        pointerEvents: 'none',
        position: 'fixed',
        zIndex: 9999,
      } as Record<string, string | number>
    }
    return {
      display: 'none',
    }
  })

  const box = document.createElement('div')
  Object.assign(box.style, boxStyles.value)

  watch(boxStyles, (styles) => {
    Object.assign(box.style, styles)
  })

  onMounted(() => {
    document.body.appendChild(box)
  })

  onBeforeUnmount(() => {
    box.remove()
  })
}
