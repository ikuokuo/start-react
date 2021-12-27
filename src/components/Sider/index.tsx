import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Layout, Menu } from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import { SelectInfo } from 'rc-menu/lib/interface';

import { pageGroups } from '@/config';

const Sider: React.FC<{width?: number}> = ({ width }) => {
  const location = useLocation();
  const navigate = useNavigate();

  let menuSelectKey = location.pathname;
  if (menuSelectKey === '/') menuSelectKey = '/home';

  const menuSelect = (info: SelectInfo) => {
    navigate(info.key);
  };

  return (
    <Layout.Sider width={width}>
      <Menu
        openKeys={['mobx']}
        selectedKeys={[menuSelectKey]}
        mode="inline"
        onSelect={menuSelect}
      >
        <Menu.Item key="/home">Home</Menu.Item>
        {pageGroups.map((g) => (
          <Menu.SubMenu
            key={g.group.siderKey || g.group.href}
            title={g.group.siderName || g.group.name}
          >
            {g.pages.map((p) => (
              <Menu.Item key={p.siderKey || p.href}>
                {p.siderName || p.name}
              </Menu.Item>
            ))}
          </Menu.SubMenu>
        ))}
      </Menu>
    </Layout.Sider>
  );
};

Sider.defaultProps = { width: 200 };

export default Sider;
