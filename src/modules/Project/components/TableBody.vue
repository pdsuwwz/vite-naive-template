<script lang="ts" setup>
import ProjectItem from '@/modules/Project/components/ProjectItem.vue'

const projectStore = useProjectStore()
const projectList = computed(() => projectStore.projectList)
</script>

<template>
  <div class="project-table-body-container">
    <div class="project-table-body-container__inner">
      <ProjectItem
        v-for="(projectItem, index) in projectList"
        :key="index"
        :dataset="projectItem"
      />
      <div
        v-if="!projectList.length"
        class="project-empty-box"
      >
        <img
          src="@/assets/images/project-empty.svg"
          alt="Empty"
        >
        <span>无可用数据</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.project-table-body-container {
  position: relative;
  flex: auto;

  .project-table-body-container__inner {
    position: absolute;
    inset: 0;
    overflow: hidden scroll;
    padding: 10px 6px 0;
    scroll-behavior: smooth;

    a {
      color: inherit;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    .project-empty-box {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding-top: 171px;

      & > img {
        width: 140px;
      }

      & > span {
        font-size: 14px;
        line-height: 14px;
        color: #606266;
      }
    }
  }
}
</style>
