<template>
  <n-dropdown
    trigger="hover"
    :options="localesList"
    @select="handleChange"
  >
    <div
      class="translations-box c-#fff"
      :class="{
        'is-dark': dark
      }"
    >
      <LogoIcon
        :dark="dark"
      />
    </div>
  </n-dropdown>
</template>
<script lang="ts">
import { localesMapping } from '@/locales/config'
import { useUserAccountStore } from '@/modules/UserAccount/store'

import LogoIcon from '@/locales/LogoIcon.vue'
import { changeLocale } from '@/locales/useLocale'
import { DropdownOption } from 'naive-ui'
import { useChangeLang } from './hooks/useChangeLang'

export default defineComponent({
  name: 'TranslationsBox',
  components: {
    LogoIcon
  },
  props: {
    dark: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const userAccountStore = useUserAccountStore()
    const localesList = computed<Array<DropdownOption>>(
      () => localesMapping.map(
        (langItem) => ({
          label: langItem.localeName,
          key: langItem.localeCode,
          disabled: currentLocale.value === langItem.localeCode
        })
      )
    )

    const { bus } = useChangeLang()

    const currentLocale = computed(() => userAccountStore.locale)

    const handleChange = (key: string) => {
      setTimeout(async () => {
        const localeCode = key
        router.replace({
          params: {
            ...route.params,
            locale: localeCode
          }
        })
        await changeLocale(localeCode)
        bus.emit({
          langName: localeCode
        })
      })
    }

    return {
      localesList,
      currentLocale,
      handleChange
    }
  }
})
</script>
<style lang="scss">
.translations-box {
  cursor: initial;
  user-select: none;
  width: 20px;
  display: flex;
  align-items: center;
  outline: none;

  & > * {
    transition: 0.3s;
  }

  & svg {
    width: 20px;
  }

  &:hover > * {
    color: $color-primary;
  }

  &.is-dark {

    &:hover > * {
      color: $color-primary;
    }
  }

  .custom-dropdown-item {
    white-space: nowrap;
  }
}
</style>
