import { useEffect, useRef, useState } from "react";
import { Chart, Layout } from "@dhx/trial-suite";
import store from "../../data";

export default function AccordionComponent() {
  const node = useRef(null);
  let [chart, setChart] = useState(null);

  useEffect(() => {
    const accordion = new Layout(node.current, {
      type: "line",
      rows: [
        {
          header: "HOTELS",
          height: "500px",
          padding: 40,
          id: "chart",
          collapsable: true,
        },
      ],
    });
    const chart = new Chart(null, {
      type: "bar",
      scales: {
        bottom: {
          text: "month",
        },
        left: {
          maxTicks: 10,
          max: 100,
          min: 0,
        },
      },
      series: [
        {
          id: "A",
          value: "Won deals",
          color: "none",
          fill: "var(--dhx-color-primary)",
          showText: true,
          showTextTemplate: (sum) => `$${sum}`,
        },
        {
          id: "B",
          value: "Lost deals",
          color: "none",
          fill: "var(--dhx-color-primary-light-active)",
          showText: true,
          showTextTemplate: (sum) => `$${sum}`,
        },
        {
          id: "all",
          value: "All deals",
          color: "none",
          fill: "var(--dhx-color-primary-disabled)",
          type: "area",
          strokeWidth: 0,
        },
      ],
      legend: {
        series: ["A", "B", "all"],
        halign: "right",
        valign: "top",
        itemPadding: 20,
        margin: 40,
      },
    });
    accordion.getCell("chart").attach(chart);
    setChart(chart);

    // Cleanup
    return () => {
      accordion.destructor();
      chart.destructor();
    };
  }, []);

  useEffect(() => {
    chart?.data.parse(store.hotelsData);
  }, [chart]);

  return <div className="dhx_widget--bordered" ref={node}></div>;
}
