<script setup lang="ts" generic="T extends any, O extends any">
import { useEditorSelection } from '~/composables/editor/selection'

const editorStore = useEditorStore()
const { selections, selectionTextAttributes } = useEditorSelection(computed(() => editorStore.currentEditor))
</script>

<template>
  <div class="devtools-selection" h-full>
    <Splitter class="mb-5" h-full>
      <SplitterPanel :size="25" :min-size="10" p-1>
        <div />
      </SplitterPanel>
      <SplitterPanel :size="35" :min-size="10">
        <JsonViewer :value="selections" h-400px />
      </SplitterPanel>
      <SplitterPanel :size="40" :min-size="10">
        <JsonViewer :value="selectionTextAttributes" h-400px />
      </SplitterPanel>
    </Splitter>
  </div>
</template>

<style   lang="scss">
.devtools-selection {
}
</style>
