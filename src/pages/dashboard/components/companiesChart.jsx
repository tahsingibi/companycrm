import { Badge, Card, Flex } from 'antd';
import React from 'react';
import Chart from 'react-apexcharts';
import Heading from '../../../components/heading';
export default function CompaniesChart() {
  const series = [
    {
      name: 'Net Profit',
      data: [44, 55, 57, 56, 61, 58],
    },
    {
      name: 'Revenue',
      data: [76, 85, 100, 98, 87, 100],
    },
  ];

  const options = {
    chart: {
      type: 'column',
      height: 105,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        barHeight: 105,
        borderRadius: 4,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        formatter: function (val) {
          return val.charAt(0);
        },
        offsetY: -2,
        style: {
          colors: '#A7A7A7',
        },
      },
    },
    yaxis: {
      show: false,
    },
    grid: {
      show: false,
      padding: {
        top: -15,
        right: 0,
        left: 0,
        bottom: -12,
      },
    },

    legend: {
      show: false,
    },
    tooltip: {
      x: {
        formatter: function (val) {
          return val;
        },
      },
    },
    fill: {
      colors: ['#0168FF', '#80E6FF'],
    },
  };

  return (
    <Card bordered={false} prefixCls="MainLayoutCard" className="w-full">
      <Flex vertical gap={16}>
        <Heading as="h5" className="!font-medium">
          Number of Companies
        </Heading>
        <Flex gap={16}>
          <Flex vertical className="flex-1 ">
            <div>
              <Badge
                color="#80E6FF"
                text={<span className="text-[#666]">This Month</span>}
              />
            </div>
            <Heading as="h1" className="!font-normal text-center slashed-zero">
              80%
            </Heading>
          </Flex>
          <Flex vertical className="flex-1 ">
            <Badge
              color="#0168FF"
              text={<span className="text-[#666]">Last Month</span>}
              prefixCls="MainLayoutCardBadge"
            />
            <Heading as="h1" className="!font-normal text-center slashed-zero">
              72%
            </Heading>
          </Flex>
        </Flex>
        <Flex padding={0} height={105}>
          <Chart
            type="bar"
            height={105}
            options={options}
            series={series}
            id="CompaniesChart"
          />
        </Flex>
      </Flex>
    </Card>
  );
}
