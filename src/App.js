import React, { useContext } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import { DeviceContext } from ".";
import Nav from "./Nav";
import NavProvider from "./NavContext";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Three from "./pages/Three";
import { useTransition, animated } from "react-spring";

const WrappedRoute = ({ component: Component, ...rest }) => {
  return (
    <div id="page-root">
      <Route component={Component} />
    </div>
  );
};

function App() {
  const location = useLocation();
  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });
  const device = useContext(DeviceContext);
  if (device.isMobile === undefined) return <div>loading...</div>;
  console.log(location);
  return (
    // <Router basename="/">
    <>
      <Nav device={device} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/product" component={Product} />
        {/* <Route path="/three" component={Three} /> */}
        <Route path="/fuck" render={() => <div>fuck</div>} />
      </Switch>
      {/* <Switch>
          <Route path="/three" component={Three} />
          <Route path="/product" component={Product} />
          <WrappedRoute path="/" component={Home} />
        </Switch> 
    </Router>*/}
    </>
  );
}

export default App;
