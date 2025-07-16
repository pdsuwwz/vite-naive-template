# vite-naive-template

[![Deploy](https://img.shields.io/github/actions/workflow/status/pdsuwwz/vite-naive-template/deploy.yml
)](https://github.com/pdsuwwz/vite-naive-template/actions/workflows/deploy.yml)
[![GitHub Workflow Status (branch)](https://img.shields.io/github/actions/workflow/status/pdsuwwz/vite-naive-template/deploy.yml?branch=main)](https://github.com/pdsuwwz/vite-naive-template/deployments/activity_log?environment=github-pages)
[![thanks](https://badgen.net/badge/thanks/♥/pink)](https://github.com/pdsuwwz)
[![License](https://img.shields.io/github/license/pdsuwwz/vite-naive-template?color=success)](https://github.com/pdsuwwz/vite-naive-template/blob/main/LICENSE)

[![naive-ui](https://img.shields.io/github/package-json/dependency-version/pdsuwwz/vite-naive-template/naive-ui)](https://github.com/pdsuwwz/vite-naive-template)
[![vue](https://img.shields.io/github/package-json/dependency-version/pdsuwwz/vite-naive-template/vue?color=ffd932)](https://github.com/pdsuwwz/vite-naive-template)
[![vite](https://img.shields.io/github/package-json/dependency-version/pdsuwwz/vite-naive-template/dev/vite?color=ffd932)](https://github.com/pdsuwwz/vite-naive-template)



🏄‍♂️ A Starter template built on Vite 6.x + TypeScript + TSX + Vue 3.x + Naive UI + Pinia 3.x + UnoCSS + Unplugin Auto Import + ESLint(v9) + Husky + lint-staged.

一个简洁的 Vite6 + Vue3.x + TypeScript + TSX + ESLint(v9) 的 B 端后台原型 Naive UI 模板框架，内置 Pinia (v3) 模块化管理代码、路由鉴权、UnoCSS 暗黑模式、Unplugin 自动导入等, 开箱即用, 注重快速高效搭建实际业务场景, 持续更新最新技术栈 🎊

[🔥 Live Demo 在线体验](https://pdsuwwz.github.io/vite-naive-template)


> 账号：`123456@admin.com` (随意邮箱)
> 
> 密码：123456 (随意)

## 🪄 使用不同的 UI 库

如果更偏好使用 [Element Plus 2](https://element-plus.org) 作为 UI 库, 这里也为你准备了几个相应的模板项目，可在此基础上进行业务二次开发和定制：

- 🍍 [Pinia + Element Plus + Vue3 + TS 版本](https://github.com/pdsuwwz/vue-boilerplate-i18n)

- ⚡️ [Vuex + Element Plus + Vue3 + TS 版本](https://github.com/pdsuwwz/vite-ts-starter)


## 🎉 Features

* 支持 __Vite 6 + Vue 3.x + TypeScript + TSX__
* UI 框架: __Naive UI 2.x__
* 状态管理: __Pinia (v3)__
* 单元测试框架: __Vitest__
* 代码规范化检测: __Husky + lint-staged__
* 内置 **Unplugin Auto Import**, 支持组件按需自动导入, 解放双手
* 内置 **UnoCSS + Iconify**, 可实现原子化样式内联、图标按需自动导入, 提升开发效率
* 内置 __ESLint(v9)__ 和 __Stylelint__, 可在此基础上扩充你想要的 Lint 配置规范
* 内置封装了一个**可能比较好用的** Axios , 需要时配合 Pinia Actions 一起食用
* 封装了 \<IconFont \/> 组件, 可直接使用 IconFont 图标
* 简化了 naive-ui 库中[抽屉 drawer](https://www.naiveui.com/zh-CN/os-theme/components/drawer) 的创建过程, 支持全局调用 [window.$ModalDrawer.create](./src/components/Drawer/README.md) 方法管理多个抽屉
* 服务式 service 挂载全局对象 [**window.$ModalXxxx**](https://github.com/pdsuwwz/vite-naive-template/blob/main/src/NaiveProvider.vue#L6-L10) 插件, 更方便的插件调用方式
* 路由鉴权已帮你封装好，同时配合 Nprogress, 只需要修改 [permission.ts](./src/router/permission.ts) 文件即可
* 自带一个模块化的组件开发环境，可按照 modules 目录解耦页面组件、路由组件、样式等文件
* 高度封装但不失灵活，内部抽象出了一个完整的业务流程供你参考，涉及三个核心页面：登录、列表和明细
* 节省你配置的时间，因此该项目的**轻量化**致使你只需要专心编写自己的业务代码即可


## 前置条件

* Vue 3.5+
* Node >= 22.x
* Pnpm 9.x
* **VS Code 插件 `dbaeumer.vscode-eslint` >= v3.0.5 (pre-release)**


## 运行效果

<img width="1412" alt="image" src="https://github.com/pdsuwwz/vite-naive-template/assets/19891724/34fd01eb-758f-43cc-b5c2-8ec77629e94c">
<img width="1387" alt="image" src="https://github.com/pdsuwwz/vite-naive-template/assets/19891724/cdb35ee2-1943-4ab3-80ed-380d9cc60f51">


## 安装和运行

* 安装依赖

```bash
pnpm i
```

* 本地开发

```bash
pnpm dev
```

## 单元测试

* 执行单测

```bash
pnpm test
```

* 执行覆盖率测试

```bash
pnpm test:coverage
```

## 💡 提示

* 若 Husky 未生效，可能是由于未完成初始化，尝试执行以下命令进行初始化:

```bash
pnpm run prepare
```


## 😎 Awesome

* [awesome-vite](https://github.com/pdsuwwz/awesome-vite)

## License

[MIT](./LICENSE) License | Copyright © 2020-PRESENT [Wisdom](https://github.com/pdsuwwz)
