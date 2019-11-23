import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Rules from './Rules';
import Missions from './Missions';

interface Props {}

const index: React.FC<Props> = () => (
  <Switch>
    <Route path='/rules'>
      <Rules />
    </Route>
    <Route path='/challenges'>
      <Missions />
    </Route>
  </Switch>
);

export default index;
