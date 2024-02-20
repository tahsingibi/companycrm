import {
  Avatar,
  Button,
  Flex
} from 'antd';
import React from 'react';
import Heading from '../../../components/heading';
import {
  ArrowLongRightIcon
} from '../../../components/icons';

export default function WelcomeUser() {
  return (
    <Flex align="center" justify="space-between">
      <Flex vertical gap={12}>
        <Flex align="center" gap={12}>
          <Avatar size={40} />
          <Heading as="h3">Good Morning, Edward</Heading>
        </Flex>
        <p className="text-sm text-[#A7A7A7] !slashed-zero">
          Last login 10 May 2024
        </p>
      </Flex>
      <Button className="bg-soft border-none text-primary hover:!bg-soft !slashed-zero flex items-center gap-2">
        Get Report 2024 <ArrowLongRightIcon className="w-4 h-4" />
      </Button>
    </Flex>
  );
}
