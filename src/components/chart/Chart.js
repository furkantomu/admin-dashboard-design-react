import React from "react";
import { ChartContainer, ChartTitle } from "./chart-elements";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";


const Chart = ({ title,data, dataKey, grid }) => {
  return (
    <ChartContainer>
      <ChartTitle>{title}</ChartTitle>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey={dataKey} stroke="#5550bd" />
          {grid && <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />}
          <YAxis />
          <Legend />
          <Tooltip />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default Chart;
