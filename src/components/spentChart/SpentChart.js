import React from "react";
import { PieChart, Pie, Legend, Cell, Tooltip } from "recharts";

export default function SpentChart({ userData }) {
  const sleepingTotal = (userData.lifeExpectancy * 0.33).toFixed(1);
  const alreadySlept = Math.round(userData.age * 0.33);

  const data02 = [
    { name: "% of life slept", value: alreadySlept / 100 },
    { name: "% to be slept", value: (sleepingTotal - alreadySlept) / 100 },
    { name: "% spent awake", value: (userData.age * 0.77) / 100 },
    {
      name: "% to be spent awake",
      value:
        ((userData.lifeExpectancy * 0.77).toFixed(1) -
          (userData.age * 0.77).toFixed(1)) /
        100,
    },
  ];

  const COLORS = ["grey", "white", "darkgrey", "green"];
  return (
    <PieChart width={500} height={350}>
      <Pie
        dataKey="value"
        data={data02}
        cx={250}
        cy={150}
        innerRadius={60}
        outerRadius={130}
        fill="#ffff"
      >
        {data02.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>

      <Tooltip />
      <Legend />
    </PieChart>
  );
}
