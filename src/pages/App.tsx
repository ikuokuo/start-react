import React from 'react';
import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Layout } from 'antd';

import Header from '@/components/Header';
import Sider from '@/components/Sider';
import Home from '@/pages/Home';
import { MobXCLS, MobXFC } from '@/pages/MobX';

const App: React.FC = () => (
  <Layout className="app">
    <Header />
    <Layout>
      <Sider />
      <Layout.Content className="app__content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Navigate replace to="/" />} />
          <Route path="mobx">
            <Route index element={<Navigate replace to="fc" />} />
            <Route path="fc" element={<MobXFC />} />
            <Route path="cls" element={<MobXCLS />} />
          </Route>
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Layout.Content>
    </Layout>
  </Layout>
);

export default App;
