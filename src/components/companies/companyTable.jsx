import { Avatar, Badge, Flex, Table, Typography } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import dateFormatter from '../../utils/dateFormatter';
import imgSrc from '../../utils/imgSrc';
import Heading from '../heading';
import Header from './header';

const { Text } = Typography;

export default function CompanyTable({ title }) {
  const { data, loading } = useSelector(
    (state) => state.yearlyIncome.yearlyIncome
  );

  const columns = [
    {
      title: 'Sector',
      dataIndex: 'sector',
      key: 'sector',
      render: (text, record) => (
        <Flex gap={16} key={record.id} align="center">
          <Avatar
            src={imgSrc(record?.logo)}
            className=" border border-neutral-100 p-2 !rounded-xl shrink-0"
            shape="square"
            size={64}
          />
          <Flex gap={4} vertical>
            <Text className="text-neutral-300 text-xs">{text}</Text>
            <Heading as="h5" className="!m-0 !font-medium">
              {record.title}
            </Heading>
            <Text className="text-black/45 text-xs">{record.description}</Text>
          </Flex>
        </Flex>
      ),
    },
    {
      title: 'Author',
      dataIndex: 'author',
      key: 'author',
      render: (text, record) => (
        <Flex align="center" className="max-w-44 gap-2 md:gap-4">
          <Avatar
            src={imgSrc(record?.authorAvatar)}
            size={32}
            className="shrink-0"
          />
          <Text>{text}</Text>
        </Flex>
      ),
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (text) => (
        <Flex>
          <Text className="text-neutral-300 slashed-zero text-center !w-full">
            {dateFormatter(text)}
          </Text>
        </Flex>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (text) => (
        <Badge
          color="#309C88"
          text={<Text className="!text-neutral-300">{text}</Text>}
          className="text-right w-full capitalize"
        />
      ),
    },
  ];

  const tableProps = {
    bordered: false,
    loading,
    size: false,
    expandable: false,
    title: false,
    showHeader: false,
    footer: false,
    rowSelection: false,
    scroll: false,
    tableLayout: false,
    pagination: false,
    className: 'YearlyTable',
  };

  return (
    <Table
      columns={columns}
      dataSource={data}
      {...tableProps}
      title={(items) => {
        return <Header title={title} data={items} />;
      }}
    />
  );
}
