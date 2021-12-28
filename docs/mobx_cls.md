# MobX React.Component 写法

## 定义 Data Stores

### makeObservable + decorators

装饰器在 `MobX 6` 中放弃了，但还可使用。

首先，[启用装饰器语法](https://zh.mobx.js.org/enabling-decorators.html)。`TypeScript` 于 `tsconfig.json` 里启用：

```bash
"experimentalDecorators": true,
"useDefineForClassFields": true,
```

定义数据存储模型后，于构造函数里调用 `makeObservable(this)`。在 `MobX 6` 前不需要，但现在为了装饰器的兼容性必须调用。

`stores/Counter.ts`:

```ts
import { makeObservable, observable, action } from 'mobx';

class Counter {
  @observable count = 0;

  constructor() {
    makeObservable(this);
  }

  @action
  increase() {
    this.count += 1;
  }

  @action
  decrease() {
    this.count -= 1;
  }
}

export default Counter;
```

### Root Stores

组合多个 `Stores`。

`stores/index.ts`:

```ts
import Counter from './Counter';
import Themes from './Themes';

export interface Stores {
  counter: Counter;
  themes: Themes;
}

const stores : Stores = {
  counter: new Counter(),
  themes: new Themes(),
};

export default stores;
```

## 父组件，提供 Stores

父组件添加 `mobx-react.Provider`，并且属性扩展 `stores` 。

`index.tsx`:

```tsx
import React from 'react';
import { Provider } from 'mobx-react';
import stores from './stores';

import Pane from './Pane';

const MobXCLS: React.FC = () => (
  <div>
    <Provider {...stores}>
      <h1>MobX with React.Component</h1>
      <div style={{ display: 'flex' }}>
        <Pane name="Pane 1" style={{ flex: 'auto' }} />
        <Pane name="Pane 2" style={{ flex: 'auto' }} />
      </div>
    </Provider>
  </div>
);

export default MobXCLS;
```

## Pane 组件，注入 Stores

组件用 `observer` 装饰，同时 `inject` 注入 `stores`。

`Pane.tsx`:

```tsx
import React from 'react';
import { Row, Col, Button, Select } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { observer, inject } from 'mobx-react';

import { Stores } from './stores';

type PaneProps = React.HTMLProps<HTMLDivElement> & {
  name?: string;
};

@inject('counter', 'themes')
@observer
class Pane extends React.Component<PaneProps, unknown> {
  get injected() {
    return this.props as (PaneProps & Stores);
  }

  render() {
    const { name, ...props } = this.props;
    const { counter, themes } = this.injected;

    return (
      <div {...props}>
        {name && <h2>{name}</h2>}
        <Row align="middle">
          <Col span="4">Count</Col>
          <Col span="4">{counter.count}</Col>
          <Col>
            <Button
              type="text"
              icon={<PlusOutlined />}
              onClick={() => counter.increase()}
            />
            <Button
              type="text"
              icon={<MinusOutlined />}
              onClick={() => counter.decrease()}
            />
          </Col>
        </Row>
        <Row align="middle">
          <Col span="4">Theme</Col>
          <Col span="4">{themes.currentTheme}</Col>
          <Col>
            <Select
              style={{ width: '60px' }}
              value={themes.currentTheme}
              showArrow={false}
              onSelect={(v) => themes.setTheme(v)}
            >
              {themes.themes.map((t) => (
                <Select.Option key={t} value={t}>
                  {t}
                </Select.Option>
              ))}
            </Select>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Pane;
```
