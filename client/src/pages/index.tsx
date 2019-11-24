import React from "react";
import { Switch, Route, useParams } from "react-router-dom";

import { useJumpToTop } from "hooks";
import { Container } from "layout";
import Rules from "./Rules";
import Leaderboard from "./Leaderboard";
import Missions from "./Missions";
import Overview from "./Overview";
import Register from "./Register";

interface Props {}

const Index: React.FC<Props> = () => {
  const params = useParams();
  useJumpToTop(params);

  return (
    <Container as="main">
      <Switch>
        <Route exact path="/">
          <Overview />
        </Route>

        <Route exact path="/rules">
          <Rules />
        </Route>

        <Route exact path="/leaderboard">
          <Leaderboard />
        </Route>

        <Route exact path="/missions">
          <Missions />
        </Route>

        <Route exact path="/register">
          <Register />
        </Route>
      </Switch>
    </Container>
  );
};

export default Index;
