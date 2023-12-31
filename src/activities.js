import React from "react";
import CanvasJSReact from "@canvasjs/react-charts";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Activites = () => {
  const options = {
    animationEnabled: true,
    title: {
      text: "Activies - 2017"
    },
    axisX: {
      valueFormatString: "MMM"
    },
    axisY: {
      title: "Sales (in USD)",
      prefix: "$"
    },
    data: [
      {
        yValueFormatString: "$#,###",
        xValueFormatString: "MMMM",
        type: "spline",
        dataPoints: [
          { x: new Date(2017, 0), y: 25060 },
          { x: new Date(2017, 1), y: 27980 },
          { x: new Date(2017, 2), y: 42800 },
          { x: new Date(2017, 3), y: 32400 },
          { x: new Date(2017, 4), y: 35260 },
          { x: new Date(2017, 5), y: 33900 },
          { x: new Date(2017, 6), y: 40000 },
          { x: new Date(2017, 7), y: 52500 },
          { x: new Date(2017, 8), y: 32300 },
          { x: new Date(2017, 9), y: 42000 },
          { x: new Date(2017, 10), y: 37160 },
          { x: new Date(2017, 11), y: 38400 }
        ]
      }
    ]
  };

  return (
    <div style={{ width: "80%", height: "300px", margin: "0 auto" }}>
      <CanvasJSChart options={options} />
    </div>
  );
};

export default Activites;
