import type { EditorHost } from '@blocksuite/lit'
import type { Job, PageSnapshot } from '@blocksuite/store'

export interface Disposable {
  dispose: () => void
}

export function useEditorSnapshot(editor: ComputedRef<EditorHost | undefined>) {
  const snapshot = ref<PageSnapshot>()

  const refreshSnapshot = async () => {
    snapshot.value = undefined
    if (!editor.value)
      return
    const page = editor.value.page

    const job = (editor.value.std.clipboard as unknown as { _getJob: () => Job })._getJob()
    snapshot.value = JSON.parse(JSON.stringify(await job.pageToSnapshot(page)))
  }

  const { history, clear } = useDebouncedRefHistory(snapshot, { deep: false, debounce: 1000 })

  let off: Disposable | null = null
  watch(editor, async (editor) => {
    off?.dispose()
    clear()
    if (editor) {
      off = editor.page.slots.blockUpdated.on(() => refreshSnapshot())
      await refreshSnapshot()
    }
    else { snapshot.value = undefined }
  }, { immediate: true })

  return { snapshot, history: computed(() => history.value.filter(record => !!record.snapshot)), refreshSnapshot }
}
