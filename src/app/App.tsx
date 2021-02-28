import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import AboutDocter from "./pages/AboutDocter";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path={"/"} component={Home} />
        <Route exact={true} path={"/aboutUs"} component={AboutUs} />
        <Route exact={true} path={"/aboutDocter"} component={AboutDocter} />
      </Switch>
    </Router>
  );
}

export default App;
