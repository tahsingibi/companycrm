import { Card, Divider, Flex, Statistic } from 'antd';
import React from 'react';
import Heading from '../../../components/heading';
import { ArrowDownIcon, ArrowUpMiniIcon } from '../../../components/icons';

export default function GeneralInsight() {
  return (
    <Card bordered={false} prefixCls="MainLayoutCard" className="w-full">
      <Flex vertical gap={16}>
        <Heading as="h5" className="!font-medium">
          General Insight
        </Heading>
        <Flex vertical>
          <Statistic
            title={
              <span className="!text-neutral-300 !text-opacity-100 !opacity-100">
                Companies
              </span>
            }
            value={7204}
            formatter={(value) => `${value}`}
            valueStyle={{
              display: 'flex',
              justifyItems: 'center',
              alignItems: 'center',
              gap: 4,
              fontSize: '38px',
              lineHeight: '48px',
            }}
            className="slashed-zero"
            prefix={<ArrowDownIcon className="w-6 h-6" color="#80E6FF" />}
          />
          <Divider className="my-4 bg--neutral-100 h-px" />
          <Statistic
            title={
              <span className="!text-neutral-300 !text-opacity-100 !opacity-100">
                Proposal
              </span>
            }
            value={420}
            valueStyle={{
              display: 'flex',
              justifyItems: 'center',
              alignItems: 'center',
              gap: 4,
              fontSize: '38px',
              lineHeight: '48px',
            }}
            className="slashed-zero"
            prefix={<ArrowUpMiniIcon className="w-6 h-6 text-primary" />}
            formatter={(value) => `${value}`}
          />
        </Flex>
      </Flex>
    </Card>
  );
}
