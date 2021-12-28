# MobX React.FC 写法

## 定义 Data Stores

### makeAutoObservable

定义数据存储模型后，于构造函数里调用 `makeAutoObservable(this)` 即可。

`stores/Counter.ts`:

```ts
import { makeAutoObservable } from 'mobx';

class Counter {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increase() {
    this.count += 1;
  }

  decrease() {
    this.count -= 1;
  }
}

export default Counter;
```

### React.Context Stores

`React.Context` 可以很简单的传递 `Stores`。

`stores/index.ts`:

```ts
import React from 'react';

import Counter from './Counter';
import Themes from './Themes';

const stores = React.createContext({
  counter: new Counter(),
  themes: new Themes(),
});

export default stores;
```

创建一个 `useStores` 的 `Hook`，简化调用。

`hooks/useStores.ts`:

```ts
import React from 'react';
import stores from '../stores';

const useStores = () => React.useContext(stores);

export default useStores;
```

## Pane 组件，使用 Stores

组件用 `observer` 包装，`useStores` 引用 `stores`。

`Pane.tsx`:

```tsx
import React from 'react';
import { Row, Col, Button, Select } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { observer } from 'mobx-react-lite';

import useStores from './hooks/useStores';

type PaneProps = React.HTMLProps<HTMLDivElement> & {
  name?: string;
}

const Pane: React.FC<PaneProps> = ({ name, ...props }) => {
  const stores = useStores();

  return (
    <div {...props}>
      {name && <h2>{name}</h2>}
      <Row align="middle">
        <Col span="4">Count</Col>
        <Col span="4">{stores.counter.count}</Col>
        <Col>
          <Button
            type="text"
            icon={<PlusOutlined />}
            onClick={() => stores.counter.increase()}
          />
          <Button
            type="text"
            icon={<MinusOutlined />}
            onClick={() => stores.counter.decrease()}
          />
        </Col>
      </Row>
      {/* ... */}
    </div>
  );
};

Pane.defaultProps = { name: undefined };

export default observer(Pane);
```
