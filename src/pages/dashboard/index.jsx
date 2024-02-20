import { Flex } from 'antd';
import React from 'react';
import Companies from './components/companies/wrapper';
import Statistics from './components/statistics';
import WelcomeUser from './components/welcomeUser';

export function DashboardPage() {
  return (
    <Flex vertical gap={32}>
      <WelcomeUser />
      <Statistics />
      <Companies />
    </Flex>
  );
}
