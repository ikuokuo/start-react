import React from 'react';
import { Layout } from 'antd';
import logo from '@/logo.svg';
import './index.less';

const Header: React.FC = () => (
  <Layout.Header className="app__header">
    <img src={logo} className="logo" alt="react" />
    <span>+</span>
    <img className="logo-antd" alt="antd" />
    <div>Start React</div>
  </Layout.Header>
);

export default Header;
