import { useLocation, useNavigate } from 'react-router-dom';
import {
  BookOpenIcon,
  BookmarkSquareIcon,
  BriefcaseIcon,
  DocumentTextIcon,
  RectangleStackIcon,
} from '../icons';

import { Menu } from 'antd';
import React from 'react';

const pageMenu = [
  {
    key: 1,
    label: 'Dashboard',
    icon: <RectangleStackIcon className="w-5 h-5" />,
    slug: '/',
  },
  {
    key: 2,
    label: 'Companies',
    icon: <BriefcaseIcon className="w-5 h-5" />,
    slug: '/companies',
  },
  {
    key: 3,
    label: 'Proposal',
    icon: <DocumentTextIcon className="w-5 h-5" />,
    slug: '/proposal',
  },
  {
    key: 4,
    label: 'Staff',
    icon: <BookmarkSquareIcon className="w-5 h-5" />,
    slug: '/staff',
  },
  {
    key: 5,
    label: 'Contacts',
    icon: <BookOpenIcon className="w-5 h-5" />,
    slug: '/contacts',
  },
];

export default function MenuPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const getActivePage =
    pageMenu?.find((item) => item.slug === location.pathname)?.key || null;

  function handleClick({ key = null }) {
    const findPage = pageMenu?.find((item) => item?.key?.toString() === key);
    if (findPage) navigate(findPage?.slug);
  }

  return (
    <Menu
      mode="inline"
      className="Pages"
      prefixCls="Nav"
      items={pageMenu}
      defaultSelectedKeys={[getActivePage?.toString()]}
      onClick={handleClick}
    />
  );
}
