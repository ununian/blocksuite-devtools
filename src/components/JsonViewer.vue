<script setup lang="ts" generic="T extends any, O extends any">
import * as jsondiffpatch from 'jsondiffpatch'
import DiffMatchPatch from 'diff-match-patch'
import * as htmlFormatter from 'jsondiffpatch/formatters/html'
import 'jsondiffpatch/formatters/styles/html.css'
import VueJsonPretty from 'vue-json-pretty'
import 'vue-json-pretty/lib/styles.css'
import { cloneWithYType } from '~/utils/cloneWithYType'

const props = defineProps({
  value: {
    type: Object,
    default: () => ({}),
  },
  diffValue: {
    type: Object,
  },
})

const { cloned: displayJSON, sync } = useCloned(() => props.value, { clone: cloneWithYType })

watch(() => props.value, () => {
  sync()
})

const mode = computed(() => props.diffValue ? 'diff' : 'normal')

const jsonDiffContainer = ref<HTMLDivElement>()

const showUnchangeDiff = ref(true)

let diffEditor: jsondiffpatch.DiffPatcher | null = null
onMounted(() => {
  diffEditor = jsondiffpatch.create({
  // used to match objects when diffing arrays, by default only === operator is used
    objectHash(obj: any) {
    // this function is used only to when objects are not equal by ref
      return obj._id || obj.id || obj.key
    },
    arrays: {
    // default true, detect items moved inside the array (otherwise they will be registered as remove+add)
      detectMove: true,
      // default false, the value of items moved is not included in deltas
      includeValueOnMove: false,
    },
    textDiff: {
    // If using text diffs, it's required to pass in the diff-match-patch library in through this proprty.
    // Alternatively, you can import jsondiffpatch using `jsondiffpatch/with-text-diffs` to avoid having to pass in diff-match-patch through the options.
      diffMatchPatch: DiffMatchPatch,
      // default 60, minimum string length (left and right sides) to use text diff algorythm: google-diff-match-patch
      minLength: 60,
    },
    propertyFilter(name, _context) {
    /*
        this optional function can be specified to ignore object properties (eg. volatile data)
        name: property name, present in either context.left or context.right objects
        context: the diff context (has context.left and context.right objects)
      */
      return name.slice(0, 1) !== '$'
    },
    cloneDiffValues: false /* default false. if true, values in the obtained delta will be cloned
      (using jsondiffpatch.clone by default), to ensure delta keeps no references to left or right objects. this becomes useful if you're diffing and patching the same objects multiple times without serializing deltas.
      instead of true, a function can be specified here to provide a custom clone(value)
      */,
  })
})

function refreshRender() {
  if (props.value) {
    if (props.diffValue && diffEditor) {
      const diff = diffEditor.diff(
        props.value,
        props.diffValue,
      )
      const html = htmlFormatter.format(diff, props.value)
      jsonDiffContainer.value!.innerHTML = html || ''
    }
  }
}

watch(() => props.value, () => {
  refreshRender()
})

watch(() => props.diffValue, () => {
  refreshRender()
})

watch(showUnchangeDiff, () => {
  htmlFormatter.showUnchanged(showUnchangeDiff.value)
  refreshRender()
})
</script>

<template>
  <div h-full overflow-y-auto>
    <div v-show="mode === 'normal'" id="codemirror-json-viewer">
      <VueJsonPretty :data="displayJSON" />
    </div>
    <div v-show="mode === 'diff'" id="json-diff" relative h-full>
      <div class="align-items-center sticky top-2 flex justify-end">
        <Checkbox v-model="showUnchangeDiff" :binary="true" />
        <label class="ml-2 cursor-pointer" @click="showUnchangeDiff = !showUnchangeDiff"> Show unchange diff </label>
      </div>
      <div ref="jsonDiffContainer" />
    </div>
  </div>
</template>

<style  lang="scss">
#codemirror-json-viewer,
#json-diff {
  overflow: auto;
}
</style>
