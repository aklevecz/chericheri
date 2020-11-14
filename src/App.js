import React, { useContext } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { DeviceContext } from ".";
import Nav from "./Nav";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Three from "./pages/Three";
function App() {
  const device = useContext(DeviceContext);

  if (device.isMobile === undefined) return <div>loading...</div>;
  return (
    <Router basename="/">
      <Nav device={device} />
      <Switch>
        <Route path="/three" component={Three} />
        <Route path="/product" component={Product} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
