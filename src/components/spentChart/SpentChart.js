import React from "react";
import { PieChart, Pie, Legend, Cell, Tooltip } from "recharts";

export default function SpentChart({ userData }) {
  const lifeSpent = Math.floor((userData.age / userData.lifeExpectancy) * 100);
  const timeRemain = 100 - lifeSpent;
  const toSleep = Math.floor(timeRemain * 0.33);
  const toSpend = Math.floor(timeRemain - toSleep);
  const data02 = [
    { name: "% Time spent", value: lifeSpent },
    { name: "% To be slept", value: toSleep },
    { name: "%Time to spend", value: toSpend },
  ];

  const COLORS = ["grey", "white", "green"];
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
