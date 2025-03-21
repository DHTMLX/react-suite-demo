import MainContainer from "./MainContainer/MainContainer";
import Sidebar from "./Sidebar/Sidebar";
import "@dhx/trial-suite/codebase/suite.min.css";

const App = () => {
  return (
    <main>
      <Sidebar />
      <MainContainer />
    </main>
  );
};

export default App;
