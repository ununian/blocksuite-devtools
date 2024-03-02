import type { EditorHost } from '@blocksuite/lit'

export function queryAllEditorHost() {
  return Array.from(document.querySelectorAll('editor-host')) as EditorHost[]
}
