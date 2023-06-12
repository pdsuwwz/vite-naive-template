<template>
  <div class="user-account-login">
    <div class="user-account-nav">
      <div class="nav-left">
        <div class="nav-logo"></div>
        <div class="nav-circle"></div>
        <div class="nav-title">
          {{ _t('base.systemTitle') }}
        </div>
      </div>
      <div class="nav-right">
        <Translations />
      </div>
    </div>
    <div class="user-account-body">
      <UserAccountContainerLayout
        ref="refLogin"
        v-bind="configLogin"
        :form-data="formData"
        @on-submit="onSubmit"
      >
        <template
          #titleIcon
        >
          <img
            src="@/assets/images/vite-logo.svg"
            alt=""
          >
        </template>
      </UserAccountContainerLayout>
    </div>
    <MyFooter />
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

import UserAccountContainerLayout from '@/modules/UserAccount/components/ContainerLayout.vue'

import Translations from '@/locales/Translations.vue'

import Cookie from 'js-cookie'
import { useUserAccountStore } from '@/modules/UserAccount/store'
import { FormInst, useMessage } from 'naive-ui'

import { User as IconUserFa } from '@vicons/carbon'
import { Password as IconPasswordCarbon } from '@vicons/carbon'
import { useChangeLang } from '@/locales/hooks/useChangeLang'

defineOptions({
  name: 'UserAccountLogin'
})

const { proxy } = useCurrentInstance()

const userAccountStore = useUserAccountStore()
const route = useRoute()
const router = useRouter()

const message = useMessage()

const isLoading = ref(true)
const formData = reactive({
  email: '',
  password: ''
})

const refLogin = ref()

const localeInject = useI18n()

const configLogin = computed(() => {
  return {
    title: localeInject.t('login.hydl'),
    actionList: [
      {
        attrs: {
          type: 'primary',
          disabled: isLoading.value,
          loading: isLoading.value,
          size: 'large'
        },
        text: localeInject.t('login.signin'),
        on: {
          click (refForm: FormInst) {
            onSubmit(refForm)
          }
        }
      }
    ],
    formConfig: [
      {
        attrs: {
          path: 'email',
          rule () {
            return proxy.getRequiredEmailRules()
          }
        },
        label: localeInject.t('login.email'),
        prefixIcon: IconUserFa,
        // placeholder: localeInject.t('login.plsemail'),
        placeholder: 'vite.admin@gmail.com'
      },
      {
        attrs: {
          path: 'password',
          rule () {
            return proxy.getRequiredRules({
              trigger: ['input', 'blur'],
              message: localeInject.t('login.plspwd')
            })
          }
        },
        link: {
          text: localeInject.t('login.fgtpwd'),
          click () {
            console.log(proxy, localeInject.t('login.fgtpwd'))
          }
        },
        type: 'password',
        label: localeInject.t('login.pwd'),
        prefixIcon: IconPasswordCarbon,
        showPasswordOn: 'click',
        // placeholder: localeInject.t('login.plspwd'),
        placeholder: '123456'
      }
    ]
  }
})

function setLoading (loading = false) {
  isLoading.value = loading
}

// 切换语言时被动触发表单校验
const { removeEvent } = useChangeLang(
  () => {
    refLogin.value.refBoxForm.validate()
  }
)
onUnmounted(() => {
  removeEvent()
})

function onSubmit (refForm: FormInst) {
  if (isLoading.value) return

  refForm.validate(async (errors) => {
    console.log(errors)
    if (errors) return

    setLoading(true)
    const { error, data, msg } = await userAccountStore.login(formData)
    if (error) {
      setLoading(false)
      return
    }

    Cookie.set('token', data.user.token)
    Cookie.set('name', data.user.username)
    router
      .replace(`/${route.params.locale || ''}`)
      .then(() => {
        message.success(localeInject.t('login.logingSuccess'))
      })
      .catch(() => {})
  })
}

setLoading(true)
onMounted(() => {
  setTimeout(() => {
    setLoading(false)
  }, 300)
})

</script>

<style lang="scss" scoped>
.user-account-login {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f0f2f5;
  background-image: url("@/assets/images/logo-background.jpg");
  background-repeat: no-repeat;
  background-size: cover;

  .user-account-nav {
    display: flex;
    justify-content: space-between;
    color: #f0f2f5;
    padding: 0 16px;
    box-shadow: 0 -3px 8px 3px #727272;

    // box-shadow: 0 1px 4px 3px rgb(0 21 41 / 8%);

    background-color: rgba(#8d8b89, 30%);

    .nav-left,
    .nav-right {
      display: flex;
      height: 48px;
      align-items: center;
    }

    .nav-logo {
      width: 32px;
      height: 32px;
      border-radius: 3px;
      background-image: url("@/assets/images/naive-logo.svg");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
    }

    .nav-circle {
      width: 6px;
      height: 6px;
      margin: 0 10px;
      border-radius: 50%;
      background: #f0f2f5;
    }

    .nav-title {
      font-size: 18px;
      font-weight: 500;
      line-height: 25px;
    }
  }

  .user-account-body {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}

@media screen and (width <= 600px) {

  .user-account-container-layout {
    justify-content: center;

    .user-account-nav {
      left: 0;
      right: 0;
      margin: auto;
      justify-content: center;
    }
  }
}
</style>
