import { Flex, Layout } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import SidebarServices from '../../services/sidebar';
import Logo from '../logo';
import MenuApp from './menuApp';
import MenuPage from './menuPage';

export default function Sidebar() {
  const { sidebarCollapse } = useSelector((state) => state.app.app);

  const { sidebarState } = SidebarServices();

  const logoType = sidebarState ? 'icon' : 'logo';

  return (
    <Layout.Sider
      prefixCls="Sidebar"
      collapsible
      collapsed={sidebarCollapse}
      trigger={null}
      breakpoint="md"
      collapsedWidth="0"
    >
      <Flex vertical>
        <Logo className="px-8 py-5" type={logoType} />
        <MenuPage />
      </Flex>
      <MenuApp />
    </Layout.Sider>
  );
}
