import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./pages/Home";
import Product from "./pages/Product";
function App() {
  return (
    <Router basename="/">
      <Nav />
      <Switch>
        <Route path="/product" component={Product} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
