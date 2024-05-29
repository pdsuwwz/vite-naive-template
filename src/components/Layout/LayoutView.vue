<template>
  <LayoutArea>
    <template #top>
      <NavigationNavBar
        :fixed="false"
      >
        <NavigationSideGoBack
          title="返回"
        />
      </NavigationNavBar>
    </template>
    <template #side>
      <LayoutSection
        has-divider
        title="项目详情"
      >
        <ul>
          <li>111</li>
          <li>222</li>
          <li>333</li>
        </ul>
      </LayoutSection>
    </template>
    <template #content>
      <Layout />
    </template>
  </LayoutArea>
</template>

<script lang="ts" setup>

import NavigationSideGoBack from '@/components/Navigation/Side/SideGoBack.vue'
import NavigationNavBar from '@/components/Navigation/NavBar.vue'

</script>

<style lang="scss" scoped>
</style>
