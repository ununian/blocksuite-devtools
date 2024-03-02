import type { EditorHost } from '@blocksuite/lit'
import type { Workspace } from '@blocksuite/store'
import { getMimeTypeFromArrayBuffer } from '~/utils/fileType'

function useWorkspaceStorage(workspace: ComputedRef<Workspace | undefined>) {
  const blobManager = computed(() => workspace.value?.blob)

  const blobList = shallowRef<string[]>([])
  const refreshBlobList = async () => {
    if (!blobManager.value) {
      blobList.value = []
      return
    }
    const blobs = await blobManager.value.list()
    blobList.value = blobs
  }
  watch(blobManager, () => refreshBlobList(), { immediate: true })

  useIntervalFn(refreshBlobList, 1000)

  const currentBlobId = ref<string>()

  const getBlob = (name: string) => {
    if (!blobManager.value)
      return undefined
    return blobManager.value.get(name)
  }
  const currentBlob = asyncComputed(() => currentBlobId.value ? getBlob(currentBlobId.value) : undefined)

  const currentBlobInfo = asyncComputed(async () => {
    if (!currentBlob.value)
      return undefined
    const blob = currentBlob.value
    const buffer = await blob.arrayBuffer()
    const result = getMimeTypeFromArrayBuffer(buffer)
    if (result) {
      return {
        ...result,
        url: URL.createObjectURL(currentBlob.value),
        isImage: result.mime.startsWith('image/'),
      }
    }
  })

  return { blobList, currentBlobId, currentBlobInfo }
}

export function useWorkspace(editor: ComputedRef<EditorHost | undefined>) {
  const workspace = computed(() => editor.value?.std.workspace)
  const workspaceYDoc = computed(() => workspace.value ? markRaw(workspace.value.doc) : undefined)

  const spaces = useYType(() => workspaceYDoc.value?.spaces)
  const meta = useYType(() => workspaceYDoc.value?.getMap('meta'))

  watch(workspace, (workspace) => {
    if (workspace)
      console.log('🚀 ~ watch ~ workspace:', workspace)
  }, { immediate: true })

  return { workspace, spaces, meta, schema: computed(() => workspace.value?.schema), ...useWorkspaceStorage(workspace) }
}

export function useYjs(_workspace: ComputedRef<Workspace | undefined>) {
  return { }
}
