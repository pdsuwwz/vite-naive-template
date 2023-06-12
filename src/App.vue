<template>
  <NThemeEditor>
    <NConfigProvider
      class="h-full"
      :locale="currentLocale"
      :theme="theme"
      :theme-overrides="themeOverrides"
    >
      <NaiveProvider>
        <RouterView />
      </NaiveProvider>
    </NConfigProvider>
  </NThemeEditor>
</template>

<script lang="ts" setup>
import NaiveProvider from './NaiveProvider.vue'
import { changeLocale, useLocale } from '@/locales/useLocale'

const { theme, themeOverrides } = useTheme()

defineOptions({
  name: 'App'
})

const route = useRoute()

const currentLocale = useLocale()

watch(
  () => route.params,
  () => {
    if (route.name === '404') return

    changeLocale(route.params.locale || 'en')
  }
)
</script>

<style lang="scss">
@use "@/styles/index.scss";
</style>
