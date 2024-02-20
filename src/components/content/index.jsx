import { Layout } from 'antd';
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import SidebarServices from '../../services/sidebar';

export default function Content() {
  const { setSidebarLocalState } = SidebarServices();

  useEffect(() => {
    setSidebarLocalState();
  }, []);

  return (
    <Layout.Content prefixCls="Content">
      <Outlet />
    </Layout.Content>
  );
}
