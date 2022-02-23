import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import styled from 'styled-components';

type ChartProps = {
  data: {}[];
  filteredCase: string;
};

const StyledChart = styled(BarChart)`
  margin-top: 20px;
`;

const Chart = ({ data, filteredCase }: ChartProps) => {
  return (
    <StyledChart
      width={800}
      height={300}
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
