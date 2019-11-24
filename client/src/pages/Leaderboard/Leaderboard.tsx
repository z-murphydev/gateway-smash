import React from "react";
import styled from "styled-components";

import { usePlayers, useTitle } from "hooks";
import { spacing } from "utilities";
import { Card } from "elements";
import PlayerRow from "./PlayerRow";

interface Props {}

const Leaderboard: React.FC<Props> = () => {
  useTitle("Leaderboard");
  const { players, loading, modifyScore } = usePlayers();

  return (
    <>
      <h2>Most wanted</h2>
      <Card>
        {loading ? (
          <p>loading...</p>
        ) : (
          <PlayerTable>
            <thead>
              <tr>
                <th>Name</th>
                <th>Main</th>
                <th>Score</th>
                <th>Edit Score</th>
              </tr>
            </thead>
            <tbody>
              {players.map(player => (
                <PlayerRow
                  key={player._id}
                  player={player}
                  modifyScore={modifyScore}
                />
              ))}
            </tbody>
          </PlayerTable>
        )}
      </Card>
    </>
  );
};

export default Leaderboard;

const PlayerTable = styled.table`
  width: 100%;
  text-align: left;

  tr {
    margin: ${spacing.sm} 0;
  }
`;
