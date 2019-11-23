import React from "react";

import { Player } from "Store";
import ModifyScoreForm from "./ModifyScoreForm";

interface Props {
  player: Player;
  modifyScore: ({
    _id,
    score,
    action
  }: {
    _id: string;
    score: number;
    action: string;
  }) => void;
}

const PlayerRow: React.FC<Props> = ({ player, modifyScore }) => (
  <tr>
    <td>
      {player.firstName} "{player.tag}" {player.lastName}
    </td>
    <td>{player.main}</td>
    <td>{player.score}</td>
    <td>
      <ModifyScoreForm _id={player._id} modifyScore={modifyScore} />
    </td>
  </tr>
);

export default PlayerRow;
