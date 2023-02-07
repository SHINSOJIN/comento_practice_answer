import React from "react";
import { Pie } from "@ant-design/plots";

const DemoPie = ({ analysisResult }) => {
  const data = analysisResult;

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

export default DemoPie;
