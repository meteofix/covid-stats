import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import { styled } from '@mui/material';
import { IWorldData } from '../pages/WorldStats';
import { ISummaryArray } from '../services/utils';

type ChartProps = {
  data: IWorldData[] | ISummaryArray[];
  filteredCase: string;
};

const StyledChart = styled(BarChart)`
  margin-top: 40px;
`;

const Chart = ({ data, filteredCase }: ChartProps) => {
  return (
    <StyledChart
      width={800}
      height={350}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="Date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey={filteredCase} fill="#8884d8" />
    </StyledChart>
  );
};

export default Chart;
