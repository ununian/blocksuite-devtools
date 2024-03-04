<script setup lang="ts" generic="T extends any, O extends any">
import { useWorkspace } from '~/composables/yjs/useYjs'

const views = ['Meta', 'Schema', 'Blob'] as const

const editorStore = useEditorStore()
const { meta, schema, blobList, currentBlobId, currentBlobInfo } = useWorkspace(computed(() => editorStore.currentEditor))

const currentView = ref<typeof views[number]>(views[0])

const displayObject = computed(() => {
  switch (currentView.value) {
    case 'Meta':
      return meta.jsonValue
    case 'Schema':
      return schema.value?.toJSON()
    case 'Blob':
      return blobList.value
  }
})
</script>

<template>
  <div>
    <Splitter style="height: 400px" class="mb-5">
      <SplitterPanel :size="25" :min-size="10" p-1>
        <Listbox v-model="currentView" :options="(views as unknown as any[])" w-full border-none shadow-none />
      </SplitterPanel>
      <SplitterPanel :size="75" :min-size="10">
        <div v-if="currentView === 'Blob'" h-full flex>
          <Listbox v-model="currentBlobId" class="w-1/3" :options="blobList" border-none shadow-none />
          <div v-if="currentBlobInfo" ml-2 flex flex-1 flex-col>
            <div> mine: {{ currentBlobInfo.mime }}</div>
            <div v-if="currentBlobInfo.isImage" flex-1>
              <Image :src="currentBlobInfo.url" alt="Image" preview />
            </div>
          </div>
        </div>
        <JsonViewer v-else :value="displayObject" h-400px />
      </SplitterPanel>
    </Splitter>
  </div>
</template>

<style  lang="scss">
.devtools-workspace {
}
</style>
