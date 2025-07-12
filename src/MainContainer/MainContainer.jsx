import ContentComponent from "../Content/Content";
import TabbarComponent from "./Tabbar";
import ToolbarComponent from "./Toolbar";

export default function MainContainerComponent() {
  return (
    <div className="container flex-cols">
      <ToolbarComponent />
      <TabbarComponent />
      <ContentComponent />
    </div>
  );
}
