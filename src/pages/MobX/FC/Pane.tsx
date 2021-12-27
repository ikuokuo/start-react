/* eslint-disable react/jsx-props-no-spreading, import/no-extraneous-dependencies */
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
      <Row align="middle">
        <Col span="4">Theme</Col>
        <Col span="4">{stores.themes.currentTheme}</Col>
        <Col>
          <Select
            style={{ width: '60px' }}
            value={stores.themes.currentTheme}
            showArrow={false}
            onSelect={(v) => stores.themes.setTheme(v)}
          >
            {stores.themes.themes.map((t) => (
              <Select.Option key={t} value={t}>
                {t}
              </Select.Option>
            ))}
          </Select>
        </Col>
      </Row>
    </div>
  );
};

Pane.defaultProps = { name: undefined };

export default observer(Pane);
