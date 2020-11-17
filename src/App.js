import React, { useContext } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { DeviceContext } from ".";
import Nav from "./Nav";
import NavProvider from "./NavContext";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Three from "./pages/Three";

const WrappedRoute = ({ component: Component, ...rest }) => {
  return (
    <div id="page-root">
      <Route component={Component} />
    </div>
  );
};

function App() {
  const device = useContext(DeviceContext);

  if (device.isMobile === undefined) return <div>loading...</div>;
  return (
    <Router basename="/">
      <NavProvider>
        <Nav device={device} />
        <Switch>
          <Route path="/three" component={Three} />
          <Route path="/product" component={Product} />
          <WrappedRoute path="/" component={Home} />
        </Switch>
      </NavProvider>
    </Router>
  );
}

export default App;
