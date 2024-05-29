<template>
  <header
    class="navigation-navbar-header-container"
    :class="{
      'fixed-header': fixed,
      'navbar-shadow dark:dark-navbar-shadow': auth,
      'login-navbar-shadow dark:shadow-none': !auth,
    }"
  >
    <div
      class="navbar-header-box"
      :class="{
        'bg-#fff dark:bg-#1e1e20': auth,
        'bg-#8d8b89 bg-opacity-30': !auth
      }"
    >
      <slot></slot>
      <div style="flex: 1;"></div>
      <template v-if="auth">
        <NavigationSideAction />
        <n-tooltip>
          强制刷新路由
          <template #trigger>
            <div
              class="h-full text-1.5em i-material-symbols:refresh"
              flex="~ items-center"
              cursor-pointer
              @click="reloadRouterView()"
            >
            </div>
          </template>
        </n-tooltip>
        <NavigationAvatar />
      </template>
      <NavigationChangeTheme />
    </div>
  </header>
</template>

<script lang="ts" setup>
import NavigationSideAction from '@/components/Navigation/Side/SideAction.vue'
import NavigationAvatar from '@/components/Navigation/Avatar.vue'
import NavigationChangeTheme from '@/components/Navigation/ChangeTheme.vue'

defineProps({
  auth: {
    type: Boolean,
    default: true
  },
  fixed: {
    type: Boolean,
    default: true
  }
})

const { reloadRouterView } = useApplyForceReload()
</script>
<style lang="scss" scoped>
$headerHeight: 48px;

.navigation-navbar-header-container {
  height: $headerHeight;
  line-height: $headerHeight;

  &.fixed-header {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    z-index: 3;
  }

  // box-shadow: 0 1px 4px rgb(0 21 41 / 8%);

  .navbar-header-box {
    display: flex;
    height: 100%;
    padding: 0 16px;
  }
}
</style>
