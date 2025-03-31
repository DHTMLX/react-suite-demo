import { useEffect, useRef } from "react";
import { Calendar, Timepicker } from "@dhx/trial-suite";

export default function CalendarsComponent() {
  const week_container = useRef(null);
  const timepicker_container = useRef(null);
  const year_container = useRef(null);

  useEffect(() => {
    const week_calendar = new Calendar(week_container.current, {
      weekStart: "monday",
      timePicker: true,
      range: true,
      value: [new Date(), new Date(Date.now() + 200000000)]
    });

    const timepicker = new Timepicker(timepicker_container.current, {
      controls: true,
      value: new Date()
    });

    const year_calendar = new Calendar(year_container.current, {
      timePicker: true,
      mode: "year",
      value: new Date()
    });

    return () => {
      week_calendar?.destructor();
      timepicker?.destructor();
      year_calendar?.destructor();
    };
  }, []);

  return (
    <div className="container row-wrap">
      <div className="dhx_widget--bordered" ref={week_container}></div>
      <div className="dhx_widget--bordered" ref={timepicker_container}></div>
      <div className="dhx_widget--bordered" ref={year_container}></div>
    </div>
  );
}
