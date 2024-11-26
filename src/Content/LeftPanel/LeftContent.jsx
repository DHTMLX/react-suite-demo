import Accardion from "./Accardion";
import Calendars from "./Calendars";
import Grid from "./Grid";
import Ribbon from "./Ribbon";
import SlidersLayout from "./SlidersLayout";
import TicketsDataview from "./TicketsDataview";
import Tree from "./Tree";

export default function LeftContent() {
  return (
    <div className="flex-cols grow col-wrap" style={{ maxWidth: 800 }}>
      <Grid />
      <Calendars />
      <Accardion />
      <div
        className="container"
        style={{ gap: 12, justifyContent: "space-between" }}
      >
        <SlidersLayout />
        <Tree />
      </div>
      <Ribbon />
      <TicketsDataview />
    </div>
  );
}
