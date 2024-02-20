import { Avatar, Button, Flex, Layout } from 'antd';
import React from 'react';
import { BellIcon, GlobeIcon, SquaresIcon } from '../icons';

export default function Header() {
  return (
    <Layout.Header prefixCls="Header">
      <UserMenu />
    </Layout.Header>
  );
}

export function UserMenu() {
  return (
    <Flex gap={16}>
      <Button type="text" shape="circle" icon={<GlobeIcon className="w-6 h-6"/>} />
      <Button type="text" shape="circle" icon={<BellIcon className="w-6 h-6"/>} />
      <Button type="text" shape="circle" icon={<SquaresIcon className="w-6 h-6"/>} />
      <Avatar className="cursor-pointer hover:opacity-75 bg-red-500">T</Avatar>
    </Flex>
  );
}
