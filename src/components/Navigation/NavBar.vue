<script lang="ts" setup>

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

</script>

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
        <NavigationRefresh />
        <NavigationAvatar />
      </template>
      <NavigationChangeTheme />
    </div>
  </header>
</template>

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
