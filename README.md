# naive-ts-starter

[![Deploy](https://github.com/pdsuwwz/naive-ts-starter/workflows/gh-pages/badge.svg)](https://github.com/pdsuwwz/naive-ts-starter/actions/workflows/deploy.yml)
[![GitHub Workflow Status (branch)](https://img.shields.io/github/actions/workflow/status/pdsuwwz/naive-ts-starter/deploy.yml?branch=main)](https://github.com/pdsuwwz/naive-ts-starter/deployments/activity_log?environment=github-pages)
[![thanks](https://badgen.net/badge/thanks/♥/pink)](https://github.com/pdsuwwz)
[![License](https://img.shields.io/github/license/pdsuwwz/naive-ts-starter?color=blue)](https://github.com/pdsuwwz/naive-ts-starter/blob/main/LICENSE)

🐳 Starter using NaiveUI + Vite 4 + Vue 3 + Pinia + TypeScript + i18n + Unplugin + UnoCSS to fast build a prototyping

一个适用国际化多语言(i18n)扩展、帮助你快速开发 B 端 ✈️✈️✈️ Vue3 + Vite4 + TS + Pinia 中小型后台管理系统的原型模板项目框架，集成 vue-i18n-next 💪


__[💻 Live Demo 在线体验](https://pdsuwwz.github.io/naive-ts-starter/#/zh-hans)__


## 🌱 不同版本
目前一共有以下六个不同技术栈的仓库模板在持续维护，请尝试后选择适合自己的模板使用

### NaiveUI
(推荐基于在[当前仓库](https://github.com/pdsuwwz/naive-ts-starter/generate)基础上二次开发)
- 💚 (推荐1) [TS + Pinia + 🌐 低耦合(i18n)多语言 Vite4 + Vue3 + TS + UnoCSS + UnPlugin + NaiveUI + vue-i18n@next](https://github.com/pdsuwwz/naive-ts-starter)

### ElementPlus

- 💥 (推荐2) [TS + Pinia + 🌐 低耦合(i18n)多语言 Vite4 + Vue3 + TS + UnoCSS + UnPlugin + Element-Plus2 + vue-i18n@next](https://github.com/pdsuwwz/vue-boilerplate-i18n)

- ⚡️ TS + Pinia 版 [Vite4 + Vue3 + TS + Pinia + Element-Plus2 + useLocale + i18n](https://github.com/pdsuwwz/pinia-starter-ts)
- ⚡️ JS + Pinia 版 [Vite4 + Vue3 + Pinia + Element-Plus2 + useLocale + i18n](https://github.com/pdsuwwz/vite-pinia-starter)

- ⚡️ TS + Vuex4 版 [Vite4 + Vue3 + TS + Vuex4 + Element-Plus2 + useLocale + i18n](https://github.com/pdsuwwz/vite-ts-starter)
- ⚡️ JS + Vuex4 版 [Vite4 + Vue3 + Vuex4 + Element-Plus2 + useLocale + i18n](https://github.com/pdsuwwz/vite-starter)



## 🎉 Features

* 支持 __Vite 4 + Vue 3 + TypeScript__
* UI 框架: __NaiveUI 2.x__
* Icons: 内置 __XIcons__ 和 \<IconFont \/> 组件, 可直接使用 IconFont 图标
* 状态管理: __Pinia__
* 基于 __UnoCSS__ 进行`暗黑模式`切换
* 单元测试框架: __Vitest__
* 内置 __ESlint__ 和 __Stylelint__, 可在此基础上扩充你想要的 Lint 配置规范
* 内置封装了一个**可能比较好用的** Axios , 需要时配合 Pinia Actions 一起食用
* 内置 **vue-i18n-next**, 支持到 VueRouter 路由级别切换语言，可编写国际化配置文件及扩展其他语言
* 路由鉴权已帮你封装好，同时配合 Nprogress, 只需要修改 permission.ts 文件即可
* 自带一个模块化的组件开发环境，可按照 Modules 目录解耦页面组件、路由组件、样式等文件
* 高度封装但不失灵活，内部抽象出了一个简单的业务流程供你参考(自由发挥)，涉及三个核心页面：登录、列表和明细
* 节省你配置的时间，因此该项目的**轻量化**致使你只需要专心编写自己的业务代码即可


## Screenshot

<img width="1440" alt="image" src="https://user-images.githubusercontent.com/19891724/154831095-32a64eee-01ce-49be-ad64-626f0d276559.png">
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/19891724/168773776-2d43c03d-54dd-4364-8830-0bba65603ef4.png">


## Environment Support

* Vue 3.2.x
* Node >= 16.15.x

## Install

Run `pnpm i` to install the dependencies.

```bash
pnpm i
```

## Run

Run `pnpm dev` to start the frontend dev server.

```bash
pnpm dev
```

## Test

Unit Testing.

```bash
pnpm test
```

Test code coverage.

```bash
pnpm test:coverage
```

## 😎 Awesome

* [awesome-vite](https://github.com/pdsuwwz/awesome-vite)


## License

[MIT](./LICENSE) License | Copyright © 2020-PRESENT [Wisdom](https://github.com/pdsuwwz)

