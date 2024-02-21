import { Flex } from 'antd';
import React from 'react';
import AddCompanyForm from './components/form';
import Header from './components/header';

export default function AddCompany() {
  return (
    <Flex vertical className="max-w-[464px] w-full flex-1 mx-auto" gap={32}>
      <Header />
      <AddCompanyForm />
    </Flex>
  );
}
