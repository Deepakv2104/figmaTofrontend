import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sign from "./Sign";
import Dashboard from "./Dashboard";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Sign} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default App;
