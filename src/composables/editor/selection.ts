import type { EditorHost } from '@blocksuite/lit'
import type { BaseSelection } from '@blocksuite/block-std'
import type { Disposable } from './snapshot'
import { type AffineTextAttributes, getCombinedFormat } from '~/block-suite-helper/format'

export function useEditorSelection(editor: ComputedRef<EditorHost | undefined>) {
  const selections = shallowRef<BaseSelection[]>([])
  const selectionTextAttributes = shallowRef<AffineTextAttributes>({})

  const refreshSelectionTextAttributes = () => {
    if (!editor.value) {
      selectionTextAttributes.value = {}
      return
    }
    const selection = editor.value.selection.value
    if (selection.length === 0) {
      selectionTextAttributes.value = {}
      return
    }
    const textAttributes = getCombinedFormat(editor.value)
    selectionTextAttributes.value = textAttributes
  }

  let off: Disposable | null = null
  watch(editor, async (editor) => {
    off?.dispose()
    if (editor) {
      off = editor.selection.slots.changed.on((val) => {
        selections.value = val
        refreshSelectionTextAttributes()
      })

      selections.value = editor.selection.value
      refreshSelectionTextAttributes()
    }
    else { selections.value = [] }
  }, { immediate: true })

  // const selectionGroup = computed(() => {
  //   selections.value.group()
  // })

  return { selections, selectionTextAttributes }
}
