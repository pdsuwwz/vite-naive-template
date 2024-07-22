<script lang="ts" setup>

import { omit } from 'lodash-es'
import { isFunction } from '@/utils/type'
import type { FormInst } from 'naive-ui'
import { type InputProps, lightTheme } from 'naive-ui'

defineOptions({
  name: 'UserAccountContainerLayout'
})

const props = defineProps({
  title: {
    type: String,
    default: '',
    required: true
  },
  titleIcon: {
    type: String,
    default: ''
  },
  desc: {
    type: String,
    default: ''
  },
  actionList: {
    type: Array as PropType<Array<FormContainer.ActionOptions>>,
    default () {
      return []
    },
    required: true
  },
  formData: {
    type: Object,
    default () {
      return {}
    },
    required: true
  },
  formConfig: {
    type: Array as PropType<Array<FormContainer.FormConfigOptions & InputProps>>,
    default () {
      return []
    },
    required: true
  }
})

const emits = defineEmits([
  'on-submit'
])

const { proxy } = useCurrentInstance()
const boxForm = ref<FormInst | null>(null)

function getInputItemAttrs (formItem: InputProps) {
  return {
    // clearable: true,
    autofocus: formItem.autofocus,
    placeholder: formItem.placeholder,
    type: formItem.type,
    showPasswordOn: formItem.showPasswordOn
  }
}

function getFormItemAttrs (attrs: any) {
  const rule = isFunction(attrs.rule)
    ? attrs.rule.call(proxy)
    : ''

  return {
    rule,
    ...omit(attrs, ['rule'])
  }
}

function getActionItemEvent (on: any) {
  const onEvent: any = {}
  Object.keys(on).forEach((onItem) => {
    onEvent[onItem] = on[onItem].bind(proxy.$parent, boxForm.value)
  })
  return onEvent
}

function handleClickLink (link: any) {
  link.click.call(proxy.$parent, boxForm.value)
}

function onSubmit () {
  emits('on-submit', boxForm.value)
}

defineExpose({
  refBoxForm: boxForm
})

</script>

<template>
  <div class="user-account-container-layout">
    <div class="form-title">
      <div class="form-title-icon">
        <IconFont
          v-if="titleIcon"
          :icon="titleIcon"
        />
        <slot name="titleIcon"></slot>
      </div>
      <p class="form-title-text">
        {{ title }}
      </p>
      <p class="form-desc-text">
        {{ desc }}
      </p>
    </div>
    <NConfigProvider
      :theme="lightTheme"
      :theme-overrides="themeOverridesLight"
    >
      <n-form
        ref="boxForm"
        :model="formData"
        label-placement="top"
        :show-require-mark="false"
        @keyup.enter="onSubmit()"
      >
        <template
          v-for="(formItem, index) in formConfig"
          :key="index"
        >
          <n-form-item
            v-bind="getFormItemAttrs(formItem.attrs)"
          >
            <template #label>
              <div class="form-custom-label">
                {{ formItem.label }}
                <n-button
                  v-if="formItem.link"
                  text
                  tag="a"
                  type="primary"
                  tabindex="-1"
                  @click="handleClickLink(formItem.link)"
                >
                  {{ formItem.link.text }}
                </n-button>
              </div>
            </template>
            <n-input
              v-model:value="formData[formItem.attrs.path]"
              v-bind="getInputItemAttrs(formItem)"
            >
              <template
                v-if="formItem.prefixIcon"
                #prefix
              >
                <n-icon>
                  <component
                    :is="formItem.prefixIcon"
                  />
                </n-icon>
              </template>
            </n-input>
          </n-form-item>
        </template>
        <div
          v-for="(actionItem, index) in actionList"
          :key="`${index}-`"
          class="submit-form-action-list"
        >
          <n-button
            v-bind="actionItem.attrs"
            class="submit-form-action-button"
            v-on="getActionItemEvent(actionItem.on) || {}"
          >
            {{ actionItem.text }}
          </n-button>
        </div>
      </n-form>
    </NConfigProvider>
  </div>
</template>

<style lang="scss" scoped>
.user-account-container-layout {
  width: 438px;
  padding: 50px 34px 60px;
  box-shadow: 3px 6px 12px 0 rgb(0 0 0 / 15%), 1px 4px 8px 0 rgb(0 0 0 / 15%);
  border-radius: 6px;
  user-select: none;

  --at-apply: "bg-#fff:98%";

  &:deep(){

    .n-form-item-label__text {
      width: 100%;
    }
  }

  .form-custom-label {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
  }

  .form-title {
    padding-bottom: 30px;

    --at-apply: flex flex-wrap items-center justify-center;

    .form-title-icon {
      width: 32px;
      font-size: 0;
      margin-right: 10px;

      &:deep() {

        & > * {
          width: inherit;
          font-size: 32px;
        }
      }
    }

    .form-title-text {
      font-size: 26px;
      font-weight: 600;
      color: #777;
    }

    .form-desc-text {
      font-size: 16px;
      font-weight: 400;
      line-height: 26px;
      padding: 44px 0 0;
      color: #777;
    }
  }
}

.input-icon-lock {
  cursor: pointer;
}

.submit-form-action-list {
  display: flex;
  margin-top: 40px;

  .submit-form-action-button {
    flex: 1;
  }
}

@media screen and (width <= 600px) {

  .user-account-container-layout {
    width: 95%;
    margin: auto;
  }
}
</style>
