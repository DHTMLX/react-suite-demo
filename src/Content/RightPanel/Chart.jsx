import { useEffect, useRef, useState } from "react";
import { Chart } from "@dhx/trial-suite";
import store from "../../data";

export default function ChartComponent() {
  const node = useRef(null);
  let [chart, setChart] = useState(null);

  useEffect(() => {
    const chart = new Chart(node.current, {
      type: "pie",
      series: [
        {
          value: "value",
          // monochrome: "#0288D1",
          color: "color",
          opacity: "opacity",
          text: "month",
          stroke: "var(--dhx-background-primary)",
          strokeWidth: 0,
        },
      ],
      legend: {
        values: {
          id: "value",
          text: "id",
          color: "color",
        },
        // monochrome: "#0288D1",
        align: "right",
        valign: "middle",
        width: 30,
      },
    });

    setChart(chart);
    chart.data.parse(store.chartData);
    // Cleanup
    return () => chart.destructor();
  }, []);

  useEffect(() => {
    if (!chart) return;
    chart.data.parse(store.chartData);
  }, [chart]);

  return <div ref={node} className="dhx_widget--bordered" />;
}
