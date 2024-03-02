import { defineStore } from 'pinia'

export const useDevtoolsStore = defineStore('devtools', () => {
  const open = ref(false)

  return { open }
})
