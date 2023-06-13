<template>
  <div class="user-account-login light:bg-[url(@/assets/images/logo-background.jpg)] dark:bg-#1e1e20 bg-no-repeat bg-cover">
    <NavigationNavBar
      :fixed="false"
      :auth="false"
    >
      <NavigationSideLogo :auth="false" />
    </NavigationNavBar>
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

import UserAccountContainerLayout from '@/modules/UserAccount/components/ContainerLayout.vue'
import NavigationNavBar from '@/components/Navigation/NavBar.vue'
import NavigationSideLogo from '@/components/Navigation/Side/SideLogo.vue'

import Cookie from 'js-cookie'
import { useUserAccountStore } from '@/modules/UserAccount/store'
import { FormInst, useMessage } from 'naive-ui'

import { User as IconUserFa } from '@vicons/carbon'
import { Password as IconPasswordCarbon } from '@vicons/carbon'

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

const configLogin = computed(() => {
  return {
    title: '欢迎登录',
    actionList: [
      {
        attrs: {
          type: 'primary',
          disabled: isLoading.value,
          loading: isLoading.value,
          size: 'large'
        },
        text: '登录',
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
        label: '邮箱',
        prefixIcon: IconUserFa,
        placeholder: '123456@admin.com'
      },
      {
        attrs: {
          path: 'password',
          rule () {
            return proxy.getRequiredRules({
              trigger: ['input', 'blur'],
              message: '请填写密码'
            })
          }
        },
        link: {
          text: '忘记密码？',
          click () {
            console.log(proxy, '忘记密码？')
          }
        },
        type: 'password',
        label: '密码',
        prefixIcon: IconPasswordCarbon,
        showPasswordOn: 'click',
        placeholder: '123456'
      }
    ]
  }
})

function setLoading (loading = false) {
  isLoading.value = loading
}

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
    router
      .replace(`/`)
      .then(() => {
        message.success('登录成功')
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

  .user-account-nav {
    box-shadow: 0 -3px 8px 3px #727272;

    // box-shadow: 0 1px 4px 3px rgb(0 21 41 / 8%);

    background-color: rgba(#8d8b89, 30%);
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
