import React from "react";
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

const data = [
  {
    name: "Senin",
    "Patung Catur Muka": 4000,
    "Garuda Wisnu Kencana": 2400,
    "Lukisan Pasar Tradisional": 2400,
    "Monumen Bajra Sandhi": 1800,
  },
  {
    name: "Selasa",
    "Patung Catur Muka": 3000,
    "Garuda Wisnu Kencana": 1398,
    "Lukisan Pasar Tradisional": 2210,
    "Monumen Bajra Sandhi": 3000,
  },
  {
    name: "Rabu",
    "Patung Catur Muka": 2000,
    "Garuda Wisnu Kencana": 9800,
    "Lukisan Pasar Tradisional": 2290,
    "Monumen Bajra Sandhi": 3100,
  },
  {
    name: "Kamis",
    "Patung Catur Muka": 2780,
    "Garuda Wisnu Kencana": 3908,
    "Lukisan Pasar Tradisional": 2000,
    "Monumen Bajra Sandhi": 1000,
  },
  {
    name: "Jumat",
    "Patung Catur Muka": 1890,
    "Garuda Wisnu Kencana": 4800,
    "Lukisan Pasar Tradisional": 2181,
    "Monumen Bajra Sandhi": 4500,
  },
  {
    name: "Sabtu",
    "Patung Catur Muka": 2390,
    "Garuda Wisnu Kencana": 3800,
    "Lukisan Pasar Tradisional": 2500,
    "Monumen Bajra Sandhi": 6000,
  },
  {
    name: "Minggu",
    "Patung Catur Muka": 3490,
    "Garuda Wisnu Kencana": 4300,
    "Lukisan Pasar Tradisional": 2100,
    "Monumen Bajra Sandhi": 5500,
  },
];
export const ChartLine = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
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
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Patung Catur Muka" stroke="#5c0823" />
        <Line
          type="monotone"
          dataKey="Garuda Wisnu Kencana"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="Lukisan Pasar Tradisional"
          stroke="#82ca9d"
        />
        <Line type="monotone" dataKey="Monumen Bajra Sandhi" stroke="#5184e7" />
      </LineChart>
    </ResponsiveContainer>
  );
};
