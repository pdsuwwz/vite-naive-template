<script lang="ts" setup>
import NaiveProvider from './provider/NaiveProvider.vue'

import { dateZhCN, zhCN } from 'naive-ui'

const { theme, themeOverrides } = useTheme()

defineOptions({
  name: 'App'
})

const route = useRoute()

</script>

<template>
  <NConfigProvider
    class="h-full"
    :locale="zhCN"
    :date-locale="dateZhCN"
    :theme="theme"
    :theme-overrides="themeOverrides"
  >
    <NaiveProvider>
      <RouterView />
    </NaiveProvider>
  </NConfigProvider>
</template>

<style lang="scss">
@use "@/styles/index.scss";
</style>
