import { Flex, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import Heading from '../../../../components/heading';
import { ArrowLeftIcon } from '../../../../components/icons';
import Breadcrumbs from './breadcrumb';

const { Text } = Typography;

export default function Header() {
  const navigate = useNavigate();

  return (
    <Flex vertical gap={4}>
      <Breadcrumbs />
      <Flex align="center" gap={12} className="mt-1">
        <ArrowLeftIcon className="size-4 cursor-pointer hover:opacity-50" onClick={() => navigate(-1)} />

        <Heading as="h4" className="!font-medium">
          Add a Company
        </Heading>
      </Flex>
      <Text className="text-[#A7A7A7]">
        You can edit new company information.
      </Text>
    </Flex>
  );
}
