import React from "react";

import { addScore, loseScore } from "Store";
import { useTitle } from "hooks";
import { Card } from "elements";
import Mission from "./Mission";

const Missions = () => {
  useTitle("Missions");

  return (
    <>
      <h2>Missions</h2>
      <Card>
        <h2>
          <strong>Earn Credits</strong>
        </h2>
        <ul>
          {addScore.map(e => (
            <Mission key={e.title} {...e} />
          ))}
        </ul>
      </Card>
      <Card>
        <h2>Lose Credits</h2>
        <ul>
          {loseScore.map(e => (
            <Mission key={e.title} {...e} />
          ))}
        </ul>
      </Card>
    </>
  );
};

export default Missions;
