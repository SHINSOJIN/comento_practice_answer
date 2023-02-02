import React from "react";
import { Pie } from "@ant-design/plots";

const PieChart = () => {
  const data = [
    {
      stock: "한솔케미칼", // 회사이름
      score: 0.7434849143028259, //결과수치
      logit: 21.69752311706543, //뉴스와 회사명의 밀접도
    },
    {
      stock: "SK",
      score: 0.24532733857631683,
      logit: 20.588768005371094,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: "score",
    colorField: "stock",
    radius: 0.9,
    label: {
      type: "inner",
      offset: "-30%",
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: "center",
      },
    },
    interactions: [
      {
        type: "element-active",
      },
    ],
  };
  return <Pie {...config} />;
};

export default PieChart;
