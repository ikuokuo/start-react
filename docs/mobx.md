# MobX 概念，及安装

[MobX](https://mobx.js.org/) 用于状态管理，简单高效。

## 概念

首先，`ui` 是由 `state` 通过 `fn` 生成：

```ts
ui = fn(state)
```

在 React 里， `fn` 即组件，依照自己的 `state` 渲染。

如果 `state` 是共享的，一处状态更新，多处组件响应呢？这时就可以用 `MobX` 了。

`MobX` 数据流向如下：

```ts
      ui
    ↙    ↖
action → state
```

`ui` 触发 `action`，更新 `state`，重绘 `ui`。注意是单向的。

了解更多，请阅读 [MobX 主旨](https://zh.mobx.js.org/the-gist-of-mobx.html) 。这里讲下实现时的主要步骤：

- 定义数据存储类 `Data Store`
  - 成员属性为 `state`，成员函数为 `action`
  - 用 `mobx` 标记为 `observable`
- 定义 `Stores Provider`
  - 方式一 `React.Context`：`createContext` 包装 `Store` 实例，`ui` `useContext` 使用
  - 方式二 `mobx-react.Provider`：直接包装 `Store` 实例，提供给 `Provider`，`ui` `inject` 使用
- 实现 `ui` 组件
  - 用 `mobx` 标记为 `observer`
  - 获取 `stores`，直接引用 `state`
  - 若要更新 `state`，间接调用 `action`

项目结构上就是多个 `stores` 目录，定义各类 `store` 的 `state` `action`，异步操作也很简单。了解更多，请阅读：

- [定义数据存储](https://zh.mobx.js.org/defining-data-stores.html)
- [异步 actions](https://zh.mobx.js.org/actions.html#%E5%BC%82%E6%AD%A5-actions)

## 安装

```bash
yarn add mobx mobx-react
```

`mobx-react` 包含了 `mobx-react-lite`，所以不必安装了。

- 如果只用 React.FC (HOOK) 时，用 `mobx-react-lite` 即可。
- 如果要用 React.Component (Class) 时，用 `mobx-react` 才行。

## 最后

`MobX` 文档可以浏览一遍，了解有哪些内容。未涉及的核心概念还有 [Computeds](https://zh.mobx.js.org/computeds.html), [Reactions](https://zh.mobx.js.org/reactions.html)。

其中 `MobX and React` 一节，详解了于 `React` 中的用法及注意点，见：[React 集成](https://zh.mobx.js.org/react-integration.html)，[React 优化](https://zh.mobx.js.org/react-optimizations.html)。
