import React from "react";
import CanvasJSReact from "@canvasjs/react-charts";
import "./pie.css";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Pie = () => {
  const options = {
    exportEnabled: true,
    animationEnabled: true,
    title: {
      text: "Website Traffic Sources"
    },
    data: [
      {
        type: "pie",
        startAngle: 75,
        toolTipContent: "<b>{label}</b>: {y}%",
        showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 16,
        indexLabel: "{label} - {y}%",
        dataPoints: [
          { y: 18, label: "Direct" },
          { y: 49, label: "Organic Search" },
          { y: 9, label: "Paid Search" },
          { y: 5, label: "Referral" },
          { y: 19, label: "Social" }
        ]
      }
    ]
  };

  return (
    <div className="pie">
      <CanvasJSChart options={options} />
      {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    </div>
  );
};

export default Pie;
