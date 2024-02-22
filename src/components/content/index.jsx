import { Button, Layout } from 'antd';
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import SidebarServices from '../../services/sidebar';

export default function Content() {
  const { setSidebarLocalState, sidebarToggle } = SidebarServices();

  useEffect(() => {
    setSidebarLocalState();
  }, []);

  return (
    <Layout.Content prefixCls="Content">
      <Outlet />
      <Button
        className="fixed bottom-4 h-10 left-4 bg-soft border-none text-primary hover:!bg-soft !slashed-zero md:hidden"
        onClick={sidebarToggle}
      >
        Menu
      </Button>
    </Layout.Content>
  );
}
