***About Vue-cli3.x, create at 2019.4.22***

## 介绍

> Vue CLI 是一个基于 Vue.js 进行快速开发的完整系统，提供：
>
> - 通过 `@vue/cli` 搭建交互式的项目脚手架。
> - 通过 `@vue/cli` + `@vue/cli-service-global` 快速开始零配置原型开发。
> - 一个运行时依赖 (```@vue/cli-service```)，该依赖：
>   - 可升级；
>   - 基于 webpack 构建，并带有合理的默认配置；
>   - 可以通过项目内的配置文件进行配置；
>   - 可以通过插件进行扩展。
> - 一个丰富的官方插件集合，集成了前端生态中最好的工具。
> - 一套完全图形化的创建和管理 Vue.js 项目的用户界面。

## 安装

### install

```shell
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

### version

```shell
vue --version
```

### create

```shell
vue create hello-world
```

### plugins

* Install

```shell
# options ['babel', 'pwd', 'typescript', 'eslint', ...]
vue add @vue/options
```

* Link
  * [Babel](<https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-babel/README.md>)
  * [ESlint](<https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-eslint/README.md>)
  * [TypeScript](<https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-typescript/README.md>)
  * [PWA](<https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-pwa/README.md>)
  * ...

## 配置参考

* [传送门](<https://cli.vuejs.org/zh/config/>)

## 目录

```json
└── vue.config.js # webpack 配置
```

