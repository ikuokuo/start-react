/* eslint-disable react/jsx-props-no-spreading */
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
