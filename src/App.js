import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HorizontalLinearStepper from "./components/HorizontalLinearStepper";
import Dashboard from "./components/Dashboard";

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <HorizontalLinearStepper />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
