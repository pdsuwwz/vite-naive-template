<script lang="tsx" setup>
import { useResultStore } from '@/modules/Result/store'

defineOptions({
  name: 'ResultOverView'
})

const resultStore = useResultStore()
const route = useRoute()
const overviewData = computed(() => resultStore.overviewData)

async function init () {
  const { error, data } = await resultStore.getResultOverview({
    projectId: route.params.projectId
  })

  if (error) return

  console.log('overview', data)
}

init()


const handleDrawer = () => {
  const inst = window.$ModalDrawer.create({
    blockScroll: false,
    title: '测试标题',
    placement: 'left',
    width: '70vw',
    render: () => {
      const openSecondDrawer = () => {
        window.$ModalDrawer.create({
          title: '第二个抽屉标题',
          placement: 'bottom',
          render: () => (
            <n-card title="卡片">
              第二个抽屉的内容
            </n-card>
          ),
          onAsyncMaskClick () {
            // 异步处理
            const loading = window.$ModalMessage.loading('2异步关闭中')
            return new Promise((resolve) => {
              setTimeout(() => {
                loading.destroy()
                resolve()
              }, 1000)
            })
          }
        })
      }

      return <div>
        <p>点击遮罩/右上角关闭按钮触发 onAsyncMaskClick</p>
        <n-button onClick={() => inst.hide()}>直接关闭</n-button>
        <n-button
          type="info"
          dashed
          onClick = {() => openSecondDrawer()}
        >
          再打开一个 Drawer
        </n-button>
      </div>
    },
    renderFooter: () => {
      return <n-space>
        <n-button
          type='primary'
          onClick={() => inst.hide()}
        >
          直接关闭
        </n-button>
      </n-space>
    },
    onAsyncMaskClick () {
      // 异步处理
      const loading = window.$ModalMessage.loading('1异步关闭中')
      return new Promise((resolve) => {
        setTimeout(() => {
          loading.destroy()
          resolve()
        }, 1000)
      })
    }
  })
}


</script>

<template>
  <div
    w-full
    h-full
    flex="~"
  >
    <LayoutSection
      has-divider
      title="项目详情"
      class="w-256px p-24px b-r b-r-solid b-r-#e1e1e1"
    >
      <ul>
        <li>111</li>
        <li>222</li>
        <li>333</li>
      </ul>
    </LayoutSection>
    <LayoutSection
      class="flex-1 p-24px"
      flex-content
      :title="overviewData.title"
    >
      <div
        class="h-full flex-1 b b-#dcdfe6 dark:b-#444 b-solid"
        p="10px"
      >
        <n-button
          type="primary"
          @click="handleDrawer()"
        >
          测试 window.$ModalDrawer
        </n-button>
        {{ overviewData.content }}
      </div>
    </LayoutSection>
  </div>
</template>

<style lang="scss" scoped>
.wrap-result-overview-content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 360px) 528px;
  grid-gap: 16px;
  padding-bottom: 16px;

  .grid-last {
    grid-column-start: span 2;
  }

  .fitting-operate {
    color: $color-primary;
    cursor: pointer;
  }
}
</style>
