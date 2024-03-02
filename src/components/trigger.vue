<script setup lang="ts" generic="T extends any, O extends any">
const devtools = useDevtoolsStore()
</script>

<template>
  <div v-show="!devtools.open" id="block-suite-dev-tools-trigger" fixed bottom-20px right-20px rounded-50 px-4 py-2>
    <Button label="Open BlockSuite DevTools" @click="devtools.open = true" />
  </div>
</template>

<style scoped lang="scss">

</style>
