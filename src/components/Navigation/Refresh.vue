<script lang="ts" setup>
const { reloadRouterView } = useApplyForceReload()

</script>

<template>
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
</template>
