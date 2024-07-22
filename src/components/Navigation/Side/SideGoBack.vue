<script lang="ts">
export default defineComponent({
  name: 'NavigationSideGoBack',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
})
</script>

<template>
  <div
    class="go-back-container"
  >
    <router-link
      :to="`/`"
      class="c-#303133 dark:c-#fff"
    >
      <IconFont
        icon="iconarrow_left"
        class="go-back-icon c-#606266 dark:c-#fff"
      />
      <h1 class="go-back-title">
        {{ title }}
      </h1>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.go-back-container {
  position: relative;
  height: 100%;
  white-space: nowrap;

  & > a {
    display: flex;
    align-items: center;
    height: 100%;

    .go-back-img {
      height: 32px;
    }

    .go-back-icon {
      font-size: 24px;
      padding-left: 8px;
    }

    .go-back-title {
      height: 22px;
      line-height: 22px;
      font-size: 16px;
      font-weight: 500;
      margin-left: 12px;
    }
  }
}
</style>
