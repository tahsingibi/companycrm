import { Button, Flex, Form, Input, Select } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddCompanyForm() {
  const navigate = useNavigate();
  function onFinish(e) {
    console.log(e);
  }
  return (
    <Form
      name="basic"
      onFinish={onFinish}
      layout="vertical"
      className="CompanyForm"
    >
      <Form.Item label="Company Name" name="title">
        <Input placeholder="example" />
      </Form.Item>

      <Form.Item label="Type of Company" name="type_of_company">
        <Select placeholder="Choose something">
          <Select.Option value="1">Type of Company # 1</Select.Option>
          <Select.Option value="2">Type of Company # 2</Select.Option>
          <Select.Option value="3">Type of Company # 3</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item label="Company Size" name="company_size">
        <Select placeholder="Choose something">
          <Select.Option value="1">Company Size # 1</Select.Option>
          <Select.Option value="2">Company Size # 2</Select.Option>
          <Select.Option value="3">Company Size # 3</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item label="Industry" name="industry">
        <Select placeholder="Choose something">
          <Select.Option value="1">Industry # 1</Select.Option>
          <Select.Option value="2">Industry # 2</Select.Option>
          <Select.Option value="3">Industry # 3</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[
          {
            message: 'Please input Intro',
          },
        ]}
      >
        <Input.TextArea
          placeholder="Autosize height based on content lines"
          showCount
          maxLength={100}
        />
      </Form.Item>

      <Form.Item label="Website" name="website">
        <Input placeholder="www.hypeople.studio" />
      </Form.Item>

      <Form.Item label="Client Manager" name="client_manager">
        <Select placeholder="---">
          <Select.Option value="1">Client Manager # 1</Select.Option>
          <Select.Option value="2">Client Manager # 2</Select.Option>
          <Select.Option value="3">Client Manager # 3</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item>
        <Flex gap={12}>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            className="bg-primary text-soft w-full h-[52px]"
          >
            Submit
          </Button>
          <Button
            size="large"
            className="bg-soft hover:!bg-soft text-primary border-none w-full h-[52px]"
            onClick={() => navigate(-1)}
          >
            Cancel
          </Button>
        </Flex>
      </Form.Item>
    </Form>
  );
}
