import React from "react";
import { Switch, Route } from "react-router-dom";

import { Container } from "layout";
import Rules from "./Rules";
import Leaderboard from "./Leaderboard";

interface Props {}

const index: React.FC<Props> = () => (
  <Container as="main">
    <Switch>
      <Route exact path="/rules">
        <Rules />
      </Route>

      <Route exact path="/leaderboard">
        <Leaderboard />
      </Route>
    </Switch>
  </Container>
);

export default index;
