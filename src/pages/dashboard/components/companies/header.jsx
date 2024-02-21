import { Button, Dropdown, Flex, Input, Space } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Heading from '../../../../components/heading';
import {
  ChevronDownMiniIcon,
  MagnifyingGlassMiniIcon,
} from '../../../../components/icons';
import { actions as YearlyIncomeActions } from '../../../../store/actions/yearlyIncome';

export default function Header({ title, data = [] }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { searchInYearlyIncome } = YearlyIncomeActions;

  function handleChange(e) {
    e.preventDefault();
    dispatch(searchInYearlyIncome(e.target.value));
  }

  function itemsChildren(key) {
    let children = [];
    data.forEach((item) => {
      if (
        !JSON.stringify(children).toLowerCase().includes(item[key].toLowerCase())
      ) {
        children = [...children, { key: item[key], label: item[key] }];
      }
    });

    return children;
  }

  const childrens = {
    authors: itemsChildren('author'),
    sectors: itemsChildren('sector'),
  };

  const items = [
    {
      key: '0',
      label: 'Author',
      children: childrens.authors,
    },
    {
      key: '1',
      label: 'Sector',
      children: childrens.sectors,
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
          onChange={handleChange}
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
        <Button
          type="primary"
          className="bg-primary rounded-lg"
          onClick={() => navigate('/companies/add')}
        >
          Add Company
        </Button>
      </Flex>
    </Flex>
  );
}
