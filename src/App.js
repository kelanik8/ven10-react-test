import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./views/HomePage";
import CardOwnersPage from "./views/CardOwnersPage";
import "./App.css";

function App() {
  return (
    <div className="main-content">
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route
          path="/filter/cars-owners/:id"
          component={CardOwnersPage}
          exact
        />
      </Switch>
    </div>
  );
}

export default App;
