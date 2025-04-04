import React from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';

interface ChartComponentProps {
  options: echarts.EChartsOption;
}

const ChartComponent: React.FC<ChartComponentProps> = ({ options }) => {
  return <ReactECharts option={options} />;
};

export default ChartComponent;