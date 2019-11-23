import React from 'react';
import { Card } from 'elements';

const Rules = () => (
  <>
    <h1>
      <strong>Rules</strong>
    </h1>
    <Card>
      <ul>
        <li>
          Be respectful~ (Shit talk is allowed and encouraged, but keep it reasonable. If the person clearly does not
          enjoy/reciprocate. Stop.)
        </li>
        <li>All Johns (excuses) lead to negative points. Points deducted depends on the level of the John.</li>
        <li>
          Let's keep it clean. There's a lot of people and it can/will get hot. Please shower before you come, bring
          deodorant and use it liberally.
        </li>
      </ul>
    </Card>
    <Card>
      <p>
        <strong>Commentator Guidelines:</strong> This event will be streamed and there will be live commentary. Anyone who
        wants to is welcome to be a commentator whether you have experience or not. Have fun with your commentary, this is
        not some high-level tournament. Talk with your co-caster before matches start and figure out the back and forth you
        guys have. Try and figure out before the tournament what kind of style and flow you want to have.{' '}
        <strong>
          It is highly encouraged to avoid play by play casting as Smash is not the best game for play by plays. Comment on
          good plays but talk about the match more than each individual action.
        </strong>
      </p>
    </Card>
    <Card>
      <h2>Stage Striking</h2>
      <p>
        {' '}
        Play a game of rock paper scissors. Loser banes 1 Starter stage. After the first game winner bans 2 stages total and
        the loser picks out of the 7. You cannot go to a stage you have won on. But the opponent may pick the stage you won
        on.
      </p>
      <img
        src='https://i.imgur.com/hD2WObA.png'
        alt='Stages to strike'
        title='source: imgur.com'
        style={{ width: '100%' }}
      />
    </Card>
  </>
);

export default Rules;
