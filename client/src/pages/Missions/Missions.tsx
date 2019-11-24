import React from "react";
import { Card } from "elements";
import Mission from "./Mission";
import { addScore, loseScore } from "Store";

const Missions = () => (
  <>
    <h2>Missions</h2>
    <Card>
      <h2>
        <strong>Earn Credits</strong>
      </h2>
      <ul>
        {addScore.map(e => (
          <Mission {...e} />
        ))}
      </ul>
    </Card>
    <Card>
      <h2>Lose Credits</h2>
      <ul>
        {loseScore.map(e => (
          <Mission {...e} />
        ))}
      </ul>
    </Card>
  </>
);

export default Missions;
