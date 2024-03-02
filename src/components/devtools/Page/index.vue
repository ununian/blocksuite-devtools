<script setup lang="ts" generic="T extends any, O extends any">
import type { BlockSnapshot } from '@blocksuite/store'
import Tree from 'primevue/tree'
import type { TreeNode } from 'primevue/treenode'
import { useEditorSnapshot } from '~/composables/editor/snapshot'
import { useHighlightDOM } from '~/composables/highlightDOM'

const editorStore = useEditorStore()
const devtoolsStore = useDevtoolsStore()
const { refreshSnapshot, snapshot } = useEditorSnapshot(computed(() => editorStore.currentEditor))

const selectedKeyMap = ref<Record<string, boolean>>()
const selectedBlockId = computed(() => {
  if (selectedKeyMap.value)
    return Object.keys(selectedKeyMap.value)[0]
})

const selectedBlock = computed(() => {
  if (selectedBlockId.value && editorStore.currentEditor)
    return editorStore.currentEditor.page.getBlockById(selectedBlockId.value)
})

const hoverBlockId = ref<string>()

useHighlightDOM(() => {
  if (hoverBlockId.value || selectedBlock.value)
    return editorStore.currentEditor?.querySelector(`[data-block-id="${hoverBlockId.value || selectedBlock.value?.id}"]`) as HTMLElement
})

const selectedBlockProps = computed(() => {
  if (selectedBlock.value) {
    const keys = selectedBlock.value.keys
    return markRaw(keys.reduce((acc, key) => {
      acc[key] = (selectedBlock.value as unknown as Record<string, unknown>)[key]
      return acc
    }, {} as Record<string, unknown>))
  }
})

watch(() => devtoolsStore.open, (open) => {
  if (open)
    refreshSnapshot()
})

function toTreeNode(block: BlockSnapshot): TreeNode {
  return {
    key: block.id,
    label: block.flavour,
    data: block,
    children: block.children.map(toTreeNode),
  }
}

const treeNodes = computed(() => {
  if (snapshot.value)
    return [snapshot.value.blocks].map(toTreeNode)
})
</script>

<template>
  <div class="devtools-page">
    <Splitter style="height: 400px" class="mb-5">
      <SplitterPanel :size="25" :min-size="10" p-1>
        <Tree v-model:selectionKeys="selectedKeyMap" :highlight-on-select="true" filter-by="key" filter :value="treeNodes" selection-mode="single" class="h-full w-full">
          <template #default="{ node }">
            <div w-full flex justify-center overflow-hidden @pointerenter="hoverBlockId = node.data.id" @pointerleave="hoverBlockId = undefined">
              <Tag severity="secondary" :value="node.label?.replace('affine', 'a')" />
              <div ml-2 truncate line-height-26px>
                {{ node.data.id }}
              </div>
            </div>
          </template>
        </Tree>
      </SplitterPanel>
      <SplitterPanel :size="75" :min-size="10">
        <JsonViewer :value="selectedBlockProps" h-400px />
      </SplitterPanel>
    </Splitter>
  </div>
</template>

<style   lang="scss">
.devtools-page {
  .p-tree {
    padding: 0;
    display: flex;
    flex-direction: column;

    .p-tree-wrapper {
      flex: 1;
      height: 0;
      overflow-y: auto;
    }

    .p-inputtext {
      padding: 2px 0.5rem;
    }

    .p-tree-container .p-treenode .p-treenode-content {
      padding: 0;

      .p-link {
        margin-right: 0;
        width: 1.25rem;
        height: 1.25rem;
      }
    }
  }
}
</style>
