import { useEffect, useRef } from "react";
import { Calendar, Timepicker } from "@dhx/trial-suite";

export default function Calendars() {
  const weekNode = useRef(null);
  const timepickerNode = useRef(null);
  const yearNode = useRef(null);

  useEffect(() => {
    const week = new Calendar(weekNode.current, {
      weekStart: "monday",
      timePicker: true,
      range: true,
      value: [new Date(), new Date(Date.now() + 200000000)],
    });
    const timePicker = new Timepicker(timepickerNode.current, {
      controls: true,
      value: new Date(),
    });
    const year = new Calendar(yearNode.current, {
      timePicker: true,
      mode: "year",
      value: new Date(),
    });

    return () => {
      week.destructor();
      timePicker.destructor();
      year.destructor();
    };
  }, []);

  return (
    <div className="container row-wrap">
      <div className="dhx_widget--bordered" ref={weekNode}></div>
      <div className="dhx_widget--bordered" ref={timepickerNode}></div>
      <div className="dhx_widget--bordered" ref={yearNode}></div>
    </div>
  );
}
