<script setup lang="ts">
import NavigationSideLogo from '@/components/Navigation/Side/SideLogo.vue'
import NavigationNavBar from '@/components/Navigation/NavBar.vue'

import ProjectForm from '@/modules/Project/components/ProjectForm.vue'
import ProjectTableHeader from '@/modules/Project/components/TableHeader.vue'
import ProjectTableBody from '@/modules/Project/components/TableBody.vue'

defineOptions({
  name: 'ProjectList'
})

const projectStore = useProjectStore()

const testRef = ref()

const testDateTime = ref()

async function handleCreateProject () {

  const formData = reactive({
    name: '',
    corpName: '',
    notes: ''
  })

  await nextTick()
  const dd = window.$ModalDialog.create({
    title: '创建项目',
    style: {
      // top: '10vh',
      width: '50vw'
    },
    closable: true,
    maskClosable: false,
    closeOnEsc: false,
    content: () => h(ProjectForm, {
      modelValue: formData,
      ref: testRef
    }),
    positiveText: '创建',
    async onPositiveClick () {
      const isValid = await testRef.value.validateRules()
      if (!isValid) return Promise.reject(new Error(''))

      dd.loading = true
      const { error, data } = await projectStore.createProject(formData)

      dd.loading = false

      if (error) {
        return Promise.reject(new Error(''))
      }

      console.log(data!.createTime)

      projectStore.getProjectList()
    }
  })
}

function handleSelectSearch (name?: string) {
  console.log('搜索项目名: ', name)
  projectStore.getProjectList({
    kw: name
  })
}
handleSelectSearch()
</script>

<template>
  <div
    w-full
    h-full
    flex="~"
  >
    <LayoutSection
      title="项目管理"
      class="w-256px p-24px b-r b-r-solid b-r-#e1e1e1"
    >
      <n-button
        type="primary"
        class="create-action"
        @click="handleCreateProject()"
      >
        <template #icon>
          <n-icon>
            <div class="i-material-symbols:new-window-sharp"></div>
          </n-icon>
        </template>
        创建项目
      </n-button>
    </LayoutSection>

    <LayoutSection
      class="flex-1 p-24px"
      has-divider
      flex-content
    >
      <template #head>
        <n-date-picker
          v-model:value="testDateTime"
          type="datetimerange"
          start-placeholder="测试开始日期时间"
          end-placeholder="测试结束日期时间"
        >
          <template #footer>
            extra footer
          </template>
        </n-date-picker>
      </template>

      <ProjectTableHeader />
      <ProjectTableBody />
    </LayoutSection>
  </div>
</template>

<style lang="scss" scoped>
.create-action {
  padding: 10px 20px;
  width: 100%;
  font-weight: 600;
}
</style>
