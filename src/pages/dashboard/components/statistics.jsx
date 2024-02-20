import { Flex } from 'antd';
import CompaniesChart from './companiesChart';
import GeneralInsight from './generalInsight';
import YearlyIncome from './yearlyIncome';

export default function Statistics() {
  return (
    <Flex gap={16} className="w-full ">
      <CompaniesChart />
      <GeneralInsight />
      <YearlyIncome />
    </Flex>
  );
}
