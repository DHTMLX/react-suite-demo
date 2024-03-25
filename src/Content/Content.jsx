import LeftContent from "./LeftPanel/LeftContent";
import RightContent from "./RightPanel/RightContent";
import "./Content.css";

const Content = () => {
    return (
        <div className="container wrapper-main">
            <LeftContent />
            <RightContent />
        </div>
    );
};

export default Content;
