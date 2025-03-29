import Accardion from "./Accardion";
import Calendars from "./Calendars";
import Grid from "./Grid";
import Ribbon from "./Ribbon";
import SlidersLayout from "./SlidersLayout";
import TicketsDataview from "./TicketsDataview";
import Tree from "./Tree";

export default function LeftContent() {
  return (
    <div className="flex-cols grow col-wrap content_left">
      <Grid />
      <Calendars />
      <Accardion />
      <div className="container row-wrap">
        <SlidersLayout />
        <Tree />
      </div>
      <Ribbon />
      <TicketsDataview />
    </div>
  );
}
