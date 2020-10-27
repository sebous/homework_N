import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import { TodoDetail } from "./components/TodoDetail";
import { useApi } from "./lib/useApi";

export function Routes() {
  // this should be ideally called in component that handles initial data fetch and wraps routes
  useApi();

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route
          path="/todo/:todoId"
          exact
          render={({ match }) => <TodoDetail todoId={match.params.todoId} />}
        />
      </Switch>
    </Router>
  );
}
