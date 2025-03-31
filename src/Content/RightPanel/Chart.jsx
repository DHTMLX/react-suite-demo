import { useEffect, useRef, useState } from "react";
import { Chart } from "@dhx/trial-suite";
import { getData } from "../../data";

export default function ChartComponent() {
  const chart_container = useRef(null);

  useEffect(() => {
    const { chartData } = getData();
    const chart = new Chart(chart_container.current, {
      data: chartData,
      type: "pie",
      series: [
        {
          value: "value",
          // monochrome: "#0288D1",
          color: "color",
          opacity: "opacity",
          text: "month",
          stroke: "var(--dhx-background-primary)",
          strokeWidth: 0
        }
      ],
      legend: {
        values: {
          id: "value",
          text: "id",
          color: "color"
        },
        // monochrome: "#0288D1",
        align: "right",
        valign: "middle",
        width: 30
      }
    });

    return () => chart?.destructor();
  }, []);

  return <div ref={chart_container} className="dhx_widget--bordered" />;
}
