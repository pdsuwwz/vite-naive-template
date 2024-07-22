<script lang="ts" setup>

const { isRouterAlive } = useRegisterForceReload()


watch(
  () => isRouterAlive.value,
  () => {
    console.log('isRouterAlive', isRouterAlive.value)
  },
  {
    immediate: true
  }
)

</script>

<template>
  <LayoutArea>
    <template #top>
      <NavigationNavBar
        :fixed="false"
      >
        <NavigationSideLogo
          v-if="$route.name === 'ProjectList'"
        />
        <NavigationSideGoBack
          v-else
          title="返回"
        />
      </NavigationNavBar>
    </template>
    <template #content>
      <Layout v-if="isRouterAlive" />
    </template>
  </LayoutArea>
</template>

<style lang="scss" scoped>
</style>
