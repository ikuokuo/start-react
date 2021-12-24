import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Layout, Menu } from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import { SelectInfo } from 'rc-menu/lib/interface';

const Sider: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const menuSelectKey = location.pathname === '/' ? '/home' : '/about';
  const menuSelect = (info: SelectInfo) => {
    navigate(info.key, { replace: true });
  };

  return (
    <Layout.Sider width={200}>
      <Menu
        defaultSelectedKeys={[menuSelectKey]}
        mode="inline"
        onSelect={menuSelect}
      >
        <Menu.Item key="/home">Home</Menu.Item>
        <Menu.Item key="/about">About</Menu.Item>
      </Menu>
    </Layout.Sider>
  );
};

export default Sider;
