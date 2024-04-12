import {
  ConfigProviderProps,
  createDiscreteApi,
  darkTheme,
  lightTheme
} from 'naive-ui'
import { Theme, themeOverridesDark, themeOverridesLight } from '@/hooks/useTheme'

const themeRef = useStorage(
  'theme',
  ref<Theme>('light')
)

const configProviderPropsRef = computed<ConfigProviderProps>(
  () => {
    const isLight = themeRef.value === 'light'

    return {
      theme: isLight
        ? lightTheme
        : darkTheme,
      themeOverrides: themeRef.value === 'light'
        ? themeOverridesLight
        : themeOverridesDark
    }
  }
)

const { message, notification, dialog, loadingBar } = createDiscreteApi(
  [
    'message',
    'notification',
    'dialog',
    'loadingBar'
  ],
  {
    configProviderProps: configProviderPropsRef
  }
)

export default {
  install (app: App<any>) {
    app.config.globalProperties.$ModalMessage = message
    app.config.globalProperties.$ModalNotification = notification
    app.config.globalProperties.$ModalDialog = dialog
    app.config.globalProperties.$ModalLoadingBar = loadingBar
  }
}
