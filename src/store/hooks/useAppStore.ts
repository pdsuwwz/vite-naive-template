import { defineStore } from 'pinia'
import type { Theme } from '@/hooks/useTheme'

export const useAppStore = defineStore('app-store', () => {
  const theme = useStorage(
    'theme',
    ref<Theme>('light')
  )

  const setTheme = (_theme: Theme) => {
    theme.value = _theme
  }

  return {
    theme,
    setTheme
  }
})
