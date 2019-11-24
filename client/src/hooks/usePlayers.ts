import { useState, useEffect } from 'react';

import { Player, INCREASE_SCORE, DECREASE_SCORE } from 'Store';

export const usePlayers = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    const getPlayers = async () => {
      setLoading(true);
      try {
        const response: Response = await fetch('/api/users/leaderboard', {
          method: 'GET'
        });
        const data: Player[] = await response.json();

        setPlayers(data);
      } catch (err) {
        console.log(err);
        setPlayers([]);
      } finally {
        setLoading(false);
      }
    };

    getPlayers();
  }, []);

  const updateScore = async ({ _id, score }: { _id: string; score: number }) => {
    setLoading(true);
    try {
      const response: Response = await fetch('/api/users/score/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ _id, score })
      });
      const data: Player[] = await response.json();

      setPlayers(data);
    } catch (err) {
      console.log(err);
      setPlayers([]);
    } finally {
      setLoading(false);
    }
  };

  const increaseScore = ({ _id, score }: { _id: string; score: number }) => {
    const player: Player | undefined = players.find((p) => _id === p._id);

    if (player) {
      const updatedScore: number = player.score + score;

      return updateScore({ _id, score: updatedScore });
    }
  };

  const decreaseScore = ({ _id, score }: { _id: string; score: number }) => {
    const player: Player | undefined = players.find((p) => _id === p._id);

    if (player) {
      const updatedScore: number = player.score - score;

      return updateScore({ _id, score: updatedScore });
    }
  };

  const modifyScore = ({ _id, score, action }: { _id: string; score: number; action: string }) => {
    switch (action) {
      case INCREASE_SCORE:
        increaseScore({ _id, score });
        break;

      case DECREASE_SCORE:
        decreaseScore({ _id, score });
        break;

      default:
        break;
    }
  };

  return { players, loading, modifyScore };
};
