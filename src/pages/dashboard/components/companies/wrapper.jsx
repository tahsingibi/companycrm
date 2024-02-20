import { Card } from 'antd';
import React from 'react';
import CompanyTable from './companyTable';
import Header from './header';

export default function CompaniesTable({ title = 'Yearly Income' }) {
  return (
    <Card prefixCls="MainLayoutCard">
      <Header title={title} />
      <CompanyTable />
    </Card>
  );
}
