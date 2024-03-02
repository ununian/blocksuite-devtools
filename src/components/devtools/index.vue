<script setup lang="ts" generic="T extends any, O extends any">
const devtools = useDevtoolsStore()
const editor = useEditorStore()

const tabs = ['Page', 'Workspace', 'Yjs', 'Selection'] as const

watch(() => devtools.open, () => {
  if (devtools.open)
    editor.refreshEditors()
})

const activeTab = ref<typeof tabs[number]>('Page')
</script>

<template>
  <Dialog
    v-model:visible="devtools.open" :style="{ width: 'max(70vw, 800px)' }"
    :modal="false" position="bottomright" :content-style="{ padding: 0 }"
    :draggable="false"
    :pt="{
      header: { style: 'padding: 1rem' },
    }"
  >
    <template #header>
      <div flex>
        <Dropdown
          v-model="editor.currentEditorId"
          :options="Object.keys(editor.editorMap).map((id) => ({ name: id, code: id }))" option-label="name" option-value="code"
          placeholder="Select a Editor" class="w-14rem"
        />
        <SelectButton v-model="activeTab" ml-8 :options="(tabs as unknown as any)" />
      </div>
    </template>
    <div mb-4 h-400px overflow-hidden px-4>
      <Page v-if="activeTab === 'Page'" />
      <Yjs v-if="activeTab === 'Yjs'" />
      <Workspace v-if="activeTab === 'Workspace'" />
      <Selection v-if="activeTab === 'Selection'" />
    </div>
  </Dialog>
</template>
