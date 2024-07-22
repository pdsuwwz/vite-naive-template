<script lang="ts" setup>
import { useAppStore } from '@/store/hooks/useAppStore'
import type { CSSProperties } from 'vue'

const appStore = useAppStore()
const { isDark } = useTheme()

const active = ref(appStore.theme)

const railStyle = ({
  focused,
  checked
}: {
  focused: boolean
  checked: boolean
}) => {
  const style: CSSProperties = {}
  // dark
  if (checked) {
    style.background = '#313136'
    style.boxShadow = '0 0 0 1px rgb(100 100 100)'
  } else {
    style.background = '#f6f5f7'
    style.boxShadow = '0 0 0 1px rgb(60 60 67 / 40%)'
  }
  return style
}

const handleChange = (_theme) => {
  appStore.setTheme(_theme)
}

</script>

<template>
  <div class="navigation-change-theme">
    <n-switch
      v-model:value="active"
      checked-value="dark"
      unchecked-value="light"
      :rail-style="railStyle"
      :style="{
        '--n-icon-color': isDark ? '#fff' : '#000',
        '--n-button-color': isDark ? '#000' : '#fff',
        '--n-button-box-shadow': 'none',
      }"
      @update:value="handleChange"
    >
      <template #checked-icon>
        <n-icon>
          <div class="i-tdesign:mode-dark"></div>
        </n-icon>
      </template>
      <template #unchecked-icon>
        <n-icon>
          <div class="i-solar:sun-2-outline"></div>
        </n-icon>
      </template>
    </n-switch>
  </div>
</template>

<style lang="scss">
.navigation-change-theme {
  padding-left: 12px;
}
</style>
