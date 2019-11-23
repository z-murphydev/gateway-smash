import React from "react";

import { usePlayers } from "hooks";
import { Card } from "elements";
import PlayerRow from "./PlayerRow";

interface Props {}

const Leaderboard: React.FC<Props> = () => {
  const { players, loading, modifyScore } = usePlayers();

  return (
    <>
      <h2>Most wanted</h2>
      <Card>
        {loading ? (
          <p>loading...</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Main</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {players.map(player => (
                <PlayerRow player={player} />
              ))}
            </tbody>
          </table>
        )}
      </Card>
    </>
  );
};

export default Leaderboard;
