import Content from "./Content/Content";
import Tabbar from "./Tabbar";
import Toolbar from "./Toolbar";

const MainContainer = () => {
    return (
        <div className="container flex-cols">
            <Toolbar />
            <Tabbar />
            <Content />
        </div>
    );
};

export default MainContainer;


