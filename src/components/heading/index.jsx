import { Typography } from 'antd';
import React from 'react';

const { Title } = Typography;

const asElements = {
  h1: ({ children, className = '', ...args }) => (
    <Title className={`!mb-0 !text-h1 ${className}`} {...args}>
      {children}
    </Title>
  ),
  h2: ({ children, className = '', ...args }) => (
    <Title level={2} className={`!mb-0 ${className}`} {...args}>
      {children}
    </Title>
  ),
  h3: ({ children, className = '', ...args }) => (
    <Title level={3} className={`!mb-0 ${className}`} {...args}>
      {children}
    </Title>
  ),
  h4: ({ children, className = '', ...args }) => (
    <Title level={4} className={`!mb-0 ${className}`} {...args}>
      {children}
    </Title>
  ),
  h5: ({ children, className = '', ...args }) => (
    <Title level={5} className={`!mb-0 ${className}`} {...args}>
      {children}
    </Title>
  ),
  h6: ({ children, className = '', ...args }) => (
    <Title level={6} className={`!mb-0 ${className}`} {...args}>
      {children}
    </Title>
  ),
};

export default function Heading({ as = 'h2', children, ...args }) {
  const Element = asElements[as] || asElements.h1;
  return <Element {...args}>{children}</Element>;
}
