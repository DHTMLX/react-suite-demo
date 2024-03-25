import MainContainer from './MainContainer';
import Sidebar from './Sidebar';
import "@dhx/trial-suite/codebase/suite.min.css";
import "./App.css";

const App = () => {
  return (
    <main>
      <Sidebar />
      <MainContainer/>
    </main>
  );
};

export default App;