<template>
  <n-dropdown
    trigger="hover"
    :options="commandList"
  >
    <div class="navigation-avatar">
      <!-- <img
        src="@/assets/images/navigation-avatar.webp"
      > -->
      <n-icon :size="24">
        <UserAvatar />
      </n-icon>
    </div>
  </n-dropdown>
</template>

<script lang="ts">
import Cookie from 'js-cookie'

import { SignOut20Regular } from '@vicons/fluent'
import { UserAvatar } from '@vicons/carbon'
import { DropdownOption, NIcon } from 'naive-ui'

export default defineComponent({
  name: 'NavigationAvatar',
  components: {
    UserAvatar
  },
  setup () {
    const router = useRouter()
    const route = useRoute()

    const renderIcon = (icon: Component) => {
      return () => {
        return h(NIcon, null, {
          default: () => h(icon)
        })
      }
    }

    const commandList = computed<Array<DropdownOption>>(() => [
      {
        label: '退出登录',
        key: '退出按钮',
        icon: renderIcon(SignOut20Regular),
        props: {
          onClick: () => {
            Cookie.remove('token')
            window.location.reload()
          }
        }
      }
    ])

    return {
      commandList
    }
  }
})
</script>
<style lang="scss">
.navigation-avatar {
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  outline: none;
  padding: 0 12px;

  img {
    width: 24px;
    height: 24px;
    border: 1px solid $color-primary;
    border-radius: 50%;
    outline: none;
  }
}

</style>
