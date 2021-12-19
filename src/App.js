import Topbar from "./component/topbar/Topbar";
import Intro from "./component/intro/Intro";
import Portfolio from "./component/portfolio/Portfolio";
import Works from "./component/work/Work";
import Testemonials from "./component/testemonials/Testemonials";
import Contact from "./component/contact/Contact";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testemonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
