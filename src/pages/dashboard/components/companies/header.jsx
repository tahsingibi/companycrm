import { Button, Dropdown, Flex, Input, Space } from 'antd';
import React from 'react';
import Heading from '../../../../components/heading';
import {
  ChevronDownMiniIcon,
  MagnifyingGlassMiniIcon,
} from '../../../../components/icons';

export default function Header({ title }) {
  const items = [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: '0',
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: '3rd menu item',
      key: '3',
    },
  ];
  return (
    <Flex justify="space-between" align="center">
      <Heading as="h5" className="!font-medium !text-current">
        {title}
      </Heading>
      <Flex gap={8}>
        <Input
          placeholder="search"
          className="text-[#A7A7A7] flex flex-1 !w-[222px] rounded"
          prefix={
            <MagnifyingGlassMiniIcon className="size-4 !stroke-[#A7A7A7]" />
          }
        />
        <Dropdown menu={{ items }} trigger={['click']}>
          <Button
            onClick={(e) => e.preventDefault()}
            className="!bg-soft text-primary border-none rounded-lg"
          >
            <Space>
              Filter <ChevronDownMiniIcon className="size-4" />
            </Space>
          </Button>
        </Dropdown>
        <Button type="primary" className="bg-primary rounded-lg">
          Add Company
        </Button>
      </Flex>
      <Flex></Flex>
    </Flex>
  );
}
