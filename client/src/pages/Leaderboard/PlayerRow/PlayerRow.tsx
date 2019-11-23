import React from "react";

import { Player } from "Store";

interface Props {
  player: Player;
}

const PlayerRow: React.FC<Props> = ({ player }) => (
  <tr>
    <td>
      {player.firstName} "{player.tag}" {player.lastName}
    </td>
    <td>{player.main}</td>
    <td>{player.score}</td>
  </tr>
);

export default PlayerRow;
