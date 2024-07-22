<script lang="ts">
import type { FormInst } from 'naive-ui'

export default defineComponent({
  name: 'ProjectForm',
  props: {
    modelValue: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  setup (props) {
    const { proxy } = useCurrentInstance()

    const refForm = ref<FormInst>()

    const validateRules = async () => {
      return new Promise((resolve) => {
        refForm.value!.validate(errors => {
          if (errors) {
            resolve(false)
          } else {
            resolve(true)
          }
        })
      })
    }

    return {
      refForm,
      validateRules
    }
  }
})
</script>

<template>
  <div class="project-form-container">
    <n-form
      ref="refForm"
      :model="modelValue"
      label-placement="top"
      label-width="auto"
    >
      <n-form-item
        path="name"
        label="项目名称"
        :rule="getRequiredRules({
          trigger: 'change',
        })"
      >
        <n-input
          v-model:value="modelValue.name"
          maxlength="30"
          show-count
        />
      </n-form-item>
      <n-form-item
        path="corpName"
        label="公司名称"
        :rule="getRequiredRules({
          trigger: 'change',
        })"
      >
        <n-input
          v-model:value="modelValue.corpName"
          maxlength="30"
          show-count
        />
      </n-form-item>
      <n-form-item
        path="notes"
        label="备注"
      >
        <n-input
          v-model:value="modelValue.notes"
          type="textarea"
          maxlength="200"
          :autosize="{ minRows: 2 }"
          show-count
        />
      </n-form-item>
    </n-form>
  </div>
</template>

<style lang="scss" scoped>
.project-form-container {

  .footer-button-list {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
