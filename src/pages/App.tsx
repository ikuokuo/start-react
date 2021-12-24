import React from 'react';
import {
  Routes,
  Route,
  Navigate,
  Link,
} from 'react-router-dom';
import { Layout } from 'antd';

import Header from '@/components/Header';
import Sider from '@/components/Sider';

const Home = () => <Link to="/about">About</Link>;

const About = () => <Link to="/home">Home</Link>;

const App: React.FC = () => (
  <Layout className="app">
    <Header />
    <Layout>
      <Sider />
      <Layout.Content className="app__content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate replace to="/" />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout.Content>
    </Layout>
  </Layout>
);

export default App;
