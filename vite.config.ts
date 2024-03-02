/// <reference types="vitest" />

import path from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'
import { PrimeVueResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue(),
    // https://github.com/posva/unplugin-vue-router

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        '@vueuse/core',
        {
          // add any other imports you were relying on
        },
      ],
      dts: true,
      dirs: [
        './src/composables',
        './src/stores',
      ],
      vueTemplate: true,
    }),

    // https://github.com/antfu/vite-plugin-components
    Components({
      dts: true,
      resolvers: [
        PrimeVueResolver(),
      ],
    }),

    UnoCSS(),
  ],

  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/inject.ts'),
      name: 'inject',
      fileName: format => `inject.${format}.js`,
    },
    copyPublicDir: false,
  },

  // https://github.com/vitest-dev/vitest
  test: {
    environment: 'jsdom',
  },
})
