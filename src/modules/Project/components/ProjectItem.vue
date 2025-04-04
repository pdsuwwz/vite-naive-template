<script lang="ts" setup>


import { sleep } from '@/utils/request'
import { useMessage, useThemeVars } from 'naive-ui'
import { type ProjectDetailProps } from '@/modules/Project/store'

// TODO: Hide it temporarily
// import ProjectModule from '@/modules/Project/store'

defineOptions({
  name: 'ProjectItem'
})

const props = defineProps({
  dataset: {
    type: Object as PropType<ProjectDetailProps>,
    default () {
      return {
        corpName: '',
        createTime: '',
        id: '',
        isPublished: false,
        name: '',
        notes: ''
      }
    }
  }
})

const themeVars = useThemeVars()

const { proxy } = useCurrentInstance()
const isLoading = ref(false)
const getActionIcon = computed(() => {
  return props.dataset.isPublished
    ? h('div', {
      class: 'i-material-symbols:stop-circle-outline'
    })
    : h('div', {
      class: 'i-material-symbols:play-circle-outline'
    })
})

const message = useMessage()

async function handlePublish (projectId) {
  if (isLoading.value) return

  isLoading.value = true

  await sleep(1000)

  // TODO: Hide it temporarily
  // const { error } = await this.$store.dispatch(
  //   ProjectModule.getAction('updateTogglePublishStatus'),
  //   {
  //     projectId
  //   }
  // )

  isLoading.value = false

  // TODO: Hide it temporarily
  // if (error) return

  if (props.dataset.isPublished) {
    window.$ModalMessage.info(
      '停止发布'
    )
  } else {
    window.$ModalMessage.success(
      '发布成功'
    )
  }

  props.dataset.isPublished = !props.dataset.isPublished
}

</script>

<template>
  <router-link
    :to="`/result/${dataset.id}/overview`"
  >
    <ul class="project-item-container bg-#fff dark:bg-#3c3c3c">
      <li
        style="flex: 1; min-width: 0;"
      >
        <div class="project-item__name">
          <div class="project-item__name-left">
            <IconFont
              icon="iconfile"
            />
          </div>
          <div class="project-item__name-desc">
            <div class="project-item__name-desc__corpname">
              <span
                class="project-item__name-desc__corpname-maintext text_nowrap"
              >{{ dataset.corpName }}</span>
              <span
                @click.prevent
              >
                <n-tooltip
                  v-if="dataset.notes"
                >
                  {{ dataset.notes }}
                  <template #trigger>
                    <IconFont
                      icon="iconhelp"
                      class="corpname-notes"
                    />
                  </template>
                </n-tooltip>
              </span>
            </div>
            <p class="project-item__name-desc__fullname text_nowrap">
              {{ dataset.name }}
            </p>
          </div>
        </div>
      </li>

      <li
        style="width: 18.5%; flex: initial;"
        class="text_nowrap"
      >
        {{ dataset.createTime }}
      </li>
      <li
        class="project-item-action text_nowrap"
        :class="{
          active: dataset.isPublished,
          loading: isLoading
        }"
        @click.prevent="handlePublish(dataset.id)"
      >
        <span class="project-item-action__icon">
          <n-icon
            v-if="!isLoading"
            :component="getActionIcon"
            :class="{
              'c-#666 dark:c-#eee': !dataset.isPublished
            }"
          />
          <n-spin
            v-else
            :size="16"
          />
        </span>
        <span class="project-item-action__status">
          {{ dataset.isPublished ? '停止' : '发布' }}
        </span>
      </li>
    </ul>
  </router-link>
</template>

<style lang="scss" scoped>
$successColor: v-bind('themeVars.successColorHover');

.project-item-container {
  display: flex;
  align-items: center;
  height: 64px;
  padding: 0 24px;
  box-shadow: 0 1px 4px 0 rgba(#000, 0.08);
  border-radius: 8px;
  margin-bottom: 16px;
  transition: background 0.3s, border 0.3s, box-shadow 0.3s;
  user-select: none;
  border: 1px solid transparent;

  &:hover {
    box-shadow: 0 10px 30px -20px rgba(#000, 0.24);
    border: 1px solid #dcdfe6;
  }

  .project-item__name {
    display: flex;
    align-items: center;
    min-width: 0;

    .project-item__name-left {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 5px;
      background-color: #ecf3ff;
      margin-right: 16px;

      & > svg {
        width: 20px;
        font-size: 20px;
      }
    }

    .project-item__name-desc {
      flex: 1;
      overflow: hidden;

      .project-item__name-desc__corpname {
        display: flex;
        align-items: center;
        font-size: 14px;

        .project-item__name-desc__corpname-maintext {
          max-width: 80%;
          margin-right: 10px;
        }

        .corpname-notes {
          font-size: 15px;
          color: $color-info;
          cursor: pointer;
        }
      }

      .project-item__name-desc__fullname {
        font-size: 12px;
        color: $color-info;
      }
    }
  }

  .project-item-action {
    flex: initial;
    display: flex;
    align-items: center;
    width: 19%;
    height: 100%;
    font-size: 14px;
    transition: 0.3s;
    cursor: pointer;

    .project-item-action__icon {
      display: flex;
      align-items: center;
      font-size: 20px;
      width: 20px;

      & > .n-icon {
        width: 100%;
        font-size: 20px;
      }
    }

    .project-item-action__status {
      padding-left: 6px;
      flex: 1;
      min-width: 0;
    }

    &.active {
      color: $successColor;
    }

    &.loading {
      color: $successColor;
    }

    &:hover {
      color: $successColor;
    }
  }
}
</style>
