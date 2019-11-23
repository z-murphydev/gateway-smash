import React from "react";
import { Switch, Route } from "react-router-dom";

import Rules from "./Rules";

interface Props {}

const index: React.FC<Props> = () => (
  <Switch>
    <Route path="/rules">
      <Rules />
    </Route>
  </Switch>
);

export default index;
