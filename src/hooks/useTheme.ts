import type { GlobalThemeOverrides } from 'naive-ui'
import { lightTheme } from 'naive-ui'
import { computed, watch } from 'vue'
import { darkTheme, useOsTheme } from 'naive-ui'
import { useAppStore } from '@/store/hooks/useAppStore'

export type Theme = 'light' | 'dark' | 'auto'

const baseThemeOverrides: GlobalThemeOverrides = {
  common: {
    borderRadius: '4px'
  }
}

export const themeOverridesDark: GlobalThemeOverrides = {
  common: {
    ...baseThemeOverrides.common,
    primaryColor: 'rgba(15,38,208, 1)',
    primaryColorHover: 'rgb(58,71,173)',
    primaryColorPressed: 'rgb(14,25,106)',
    primaryColorSuppl: 'rgb(14,25,106)'
  },
  Button: {
    textColorPrimary: '#fff',
    textColorHoverPrimary: '#fff',
    textColorPressedPrimary: '#fff',
    textColorFocusPrimary: '#fff'
  }
}
export const themeOverridesLight: GlobalThemeOverrides = {
  common: {
    ...baseThemeOverrides.common,
    primaryColor: '#5fbc21',
    primaryColorHover: '#68d91d',
    primaryColorPressed: '#549e23',
    primaryColorSuppl: '#549e23'
  }
}

export function useTheme() {
  const appStore = useAppStore()

  const OsTheme = useOsTheme()

  const isDark = computed(() => {
    if (appStore.theme === 'auto')
      return OsTheme.value === 'dark'
    else
      return appStore.theme === 'dark'
  })

  const theme = computed(() => {
    return isDark.value ? darkTheme : lightTheme
  })

  const themeOverrides = computed<GlobalThemeOverrides>(() => {
    if (isDark.value) {
      return themeOverridesDark
    }
    return themeOverridesLight
  })

  watch(
    () => isDark.value,
    (dark) => {
      if (dark) {
        document.documentElement.classList.add('dark')
        document.documentElement.classList.remove('light')
      }
      else {
        document.documentElement.classList.add('light')
        document.documentElement.classList.remove('dark')
      }
    },
    {
      immediate: true
    }
  )

  return {
    isDark,
    theme,
    themeOverrides
  }
}
