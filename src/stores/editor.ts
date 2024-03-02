import { defineStore } from 'pinia'
import type { EditorHost } from '@blocksuite/lit'
import { nanoid } from 'nanoid'

export const useEditorStore = defineStore('editor', () => {
  const editors = shallowRef<EditorHost[]>([])
  const currentEditorId = ref<string>()

  const refreshEditors = () => {
    editors.value = Array.from(document.querySelectorAll('editor-host')) as EditorHost[]
    editors.value.forEach((editor) => {
      editor.dataset.devtoolsId = nanoid()
    })
    currentEditorId.value = editors.value[0]?.dataset.devtoolsId
  }

  const editorMap = computed(() => editors.value.reduce((map, editor) => {
    map[editor.dataset.devtoolsId!] = editor
    return map
  }, {} as Record<string, EditorHost>))

  const currentEditor = computed(() => currentEditorId.value ? editorMap.value[currentEditorId.value] : undefined)

  return { editors, refreshEditors, currentEditorId, currentEditor, editorMap }
})
