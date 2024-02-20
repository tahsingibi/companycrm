import { Menu } from 'antd';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SidebarServices from '../../services/sidebar';
import {
  ArrowLeftStartOnRectangleIcon,
  ArrowRightStartOnRectangleIcon,
  FingerPrintIcon,
  GearIcon,
  HelpCircleIcon,
  SquaresIcon,
} from '../icons';

export default function MenuApp() {
  const navigate = useNavigate();
  const location = useLocation();

  const { sidebarToggle, sidebarState } = SidebarServices();

  const collapseIcon = sidebarState ? (
    <ArrowRightStartOnRectangleIcon className="w-5 h-5" />
  ) : (
    <ArrowLeftStartOnRectangleIcon className="w-5 h-5" />
  );

  const appMenu = [
    {
      key: 1,
      label: 'Components',
      icon: <SquaresIcon className="w-5 h-5" />,
      slug: '/components',
    },
    {
      key: 2,
      label: 'Authentication',
      icon: <FingerPrintIcon className="w-5 h-5" />,
      slug: '/authentication',
    },
    {
      key: 3,
      label: 'Settings',
      icon: <GearIcon className="w-5 h-5" />,
      slug: '/settings',
    },
    {
      key: 4,
      label: 'Help',
      icon: <HelpCircleIcon className="w-5 h-5" />,
      slug: '/help',
    },
    {
      key: 5,
      label: 'Collapse Menu',
      icon: collapseIcon,
      onClick: sidebarToggle,
    },
  ];

  const getActivePage =
    appMenu?.find((item) => item.slug === location.pathname)?.key || null;

  function handleClick(page) {
    const findPage = appMenu?.find(({ key }) => key?.toString() === page?.key);
    if (findPage?.slug) return navigate(findPage?.slug);

    findPage?.onClick();
  }

  return (
    <Menu
      mode="inline"
      className="AppNav"
      prefixCls="Nav"
      items={appMenu}
      defaultSelectedKeys={[getActivePage?.toString()]}
      onClick={handleClick}
    />
  );
}
