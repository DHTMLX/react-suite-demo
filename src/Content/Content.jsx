import LeftContentComponent from "./LeftPanel/LeftContent";
import RightContentComponent from "./RightPanel/RightContent";

export default function ContentComponent () {
  return (
    <div className="container wrapper-main">
      <LeftContentComponent />
      <RightContentComponent />
    </div>
  );
};
