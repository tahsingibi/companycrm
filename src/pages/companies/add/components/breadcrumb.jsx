import { Breadcrumb } from 'antd';
import React from 'react';
import { ChevronRightIcon } from '../../../../components/icons';

export default function Breadcrumbs() {
  return (
    <Breadcrumb
      separator={
        <ChevronRightIcon className="size-4 mt-0.5 stroke-neutral-200" />
      }
      className="!flex !items-center "
      items={[
        {
          title: 'Companies',
          href: '/companies',
        },
        {
          title: 'New Company',
          className: 'text-gray-12',
        },
      ]}
    />
  );
}
