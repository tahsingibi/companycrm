import { Empty, Flex, Typography } from 'antd';
import React from 'react';
import Heading from '../../components/heading';

export function NotFoundPage() {
  return (
    <Empty
      image={Empty.PRESENTED_IMAGE_SIMPLE}
      description={
        <Flex
          vertical
          align="center"
          justify="center"
          className="w-fit h-fit m-auto"
        >
          <Heading as="h3">404 - Not Found</Heading>
          <Typography.Text>Page not found.</Typography.Text>
        </Flex>
      }
    />
  );
}
