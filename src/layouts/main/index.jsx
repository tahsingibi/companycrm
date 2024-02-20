import { Layout } from 'antd';
import React from 'react';
import Content from '../../components/content';
import Header from '../../components/header';
import Sidebar from '../../components/sidebar';

export default function MainLayout() {
  return (
    <Layout prefixCls="MainLayout">
      <Sidebar />
      <Layout prefixCls="MainLayoutWrapper">
        <Header />
        <Content />
      </Layout>
    </Layout>
  );
}
