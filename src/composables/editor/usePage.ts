import { Page } from '@blocksuite/store'
import type { EditorHost } from '@blocksuite/lit'

export function usePage(editor: ComputedRef<EditorHost | undefined>) {
  const page = computed(() => editor.value?.page)

  return { page }
}
