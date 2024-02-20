import { Card, Flex, Statistic, Typography } from 'antd';
import React from 'react';
import Heading from '../../../components/heading';
import { ArrowDownMiniIcon, CurrencyPound } from '../../../components/icons';
import formatCurrency from '../../../utils/formatCurrency';
export default function YearlyIncome() {
  const currency = formatCurrency(216034, 'GBP');

  return (
    <Card
      bordered={false}
      prefixCls="MainLayoutCardPrimary"
      className="w-full bg-primary text-white relative overflow-hidden"
      padding={0}
    >
      <CurrencyPound className="absolute size-60 -right-[52px] -top-[70px]  opacity-20" />
      <Flex vertical justify="space-between">
        <Heading as="h5" className="!font-medium !text-current">
          Yearly Income
        </Heading>

        <Flex vertical gap={6}>
          <Statistic
            value={currency}
            precision={3}
            className="slashed-zero flex items-center justify-center"
            prefix={<ArrowDownMiniIcon className="w-6 h-6" />}
            valueStyle={{
              color: 'white',
              fontSize: '38px',
              lineHeight: '48px',
              fontWeight: 300,
            }}
          />
          <Typography.Text className="slashed-zero text-current font-extralight">
            Until 2024 Q4
          </Typography.Text>
        </Flex>
      </Flex>
    </Card>
  );
}
