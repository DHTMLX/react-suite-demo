import ChartComponent from "./Chart";
import CalendarsComponent from "./Calendars";
import GridComponent from "./Grid";
import RibbonComponent from "./Ribbon";
import SlidersLayoutComponent from "./SlidersLayout";
import TicketsDataviewComponent from "./TicketsDataview";
import TreeComponent from "./Tree";

export default function LeftContentComponent() {
  return (
    <div className="flex-cols grow col-wrap content_left">
      <GridComponent />
      <CalendarsComponent />
      <ChartComponent />
      <div className="container row-wrap">
        <SlidersLayoutComponent />
        <TreeComponent />
      </div>
      <RibbonComponent />
      <TicketsDataviewComponent />
    </div>
  );
}
