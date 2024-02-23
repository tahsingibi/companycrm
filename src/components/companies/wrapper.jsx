import { Card } from 'antd';
import React from 'react';
import CompanyTable from './companyTable';

export default function CompaniesTable({ title = 'Yearly Income' }) {
  return (
    <Card prefixCls="MainLayoutCard">
      <CompanyTable title={title} />
    </Card>
  );
}
