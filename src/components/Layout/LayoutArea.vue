<script lang="ts" setup>

/**
 * 上下左右布局，顶部导航 + (底部左侧侧边栏 + 底部右侧内容区域)
 */

</script>

<template>
  <div
    class="layout-area-container bg-#f0f2f5 dark:bg-#1e1e20"
  >
    <div
      v-if="$slots.top"
      class="layout-area-container__top"
    >
      <slot name="top"></slot>
    </div>
    <div class="layout-area-container__bottom">
      <div class="layout-area-container__bottom__inner">
        <aside
          v-if="$slots.side"
          :class="[
            'side-layout-area-menu-bar',
            'b-r-#dcdfe6 b-r b-r-solid',
            'dark:b-r-#444',
          ]"
        >
          <div class="layout-area-menu-bar__inner">
            <slot name="side"></slot>
          </div>
        </aside>
        <section class="content-section-container bg-#f0f2f5 dark:bg-#1e1e20">
          <main class="main-content-box">
            <slot
              name="content"
            ></slot>
          </main>
        </section>
      </div>
    </div>
    <FooterCustom show-border />
  </div>
</template>

<style lang="scss" scoped>
$headerHeight: 48px;

.layout-area-container {
  display: flex;
  flex-direction: column;
  min-width: 100%;
  height: 100%;
  min-height: 100vh;
  overflow: hidden;

  .layout-area-container__top {

  }

  .layout-area-container__bottom {
    display: flex;
    flex: 1;
    position: relative;

    .layout-area-container__bottom__inner {
      position: absolute;
      inset: 1px 0 0;
      display: flex;

      .side-layout-area-menu-bar {
        position: relative;
        flex-direction: column;
        width: 256px;
        transition: width 0.28s;

        .layout-area-menu-bar__inner {
          position: absolute;
          inset: 0;
          overflow: hidden auto;
          padding: 24px;
          scroll-behavior: smooth;
        }
      }

      .content-section-container {
        display: flex;
        flex: auto;
        flex-direction: column;
        min-width: 0;

        .main-content-box {
          flex: auto;
          position: relative;
        }
      }
    }
  }
}
</style>
