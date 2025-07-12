import { useEffect, useRef } from "react";
import { Chart, Layout } from "@dhx/trial-suite";
import { getData } from "../../data";

export default function ChartComponent() {
  const { seriesData, hotelsData } = getData();
  const layout_container = useRef(null);

  useEffect(() => {
    const layout = new Layout(layout_container.current, {
      type: "line",
      rows: [
        {
          header: "HOTELS",
          height: "500px",
          padding: 40,
          id: "chart",
          collapsable: true
        }
      ]
    });

    const chart = new Chart(null, {
      data: hotelsData,
      type: "bar",
      scales: {
        bottom: {
          text: "month"
        },
        left: {
          maxTicks: 10,
          max: 100,
          min: 0
        }
      },
      series: seriesData,
      legend: {
        series: ["A", "B", "all"],
        halign: "right",
        valign: "top",
        itemPadding: 20,
        margin: 40
      }
    });

    layout.getCell("chart").attach(chart);

    return () => {
      layout?.destructor();
      chart?.destructor();
    };
  }, [seriesData, hotelsData]);

  return <div className="dhx_widget--bordered" ref={layout_container}></div>;
}
