<script setup lang="ts" generic="T extends any, O extends any">

</script>

<template>
  <div>
    <Splitter style="height: 400px" class="mb-5">
      <SplitterPanel :size="25" :min-size="10" p-1>
        <div />
      </SplitterPanel>
      <SplitterPanel :size="75" :min-size="10">
        <JsonViewer :value="{}" h-400px :diff-value="{}" />
      </SplitterPanel>
    </Splitter>
  </div>
</template>

<style scoped lang="scss"></style>
