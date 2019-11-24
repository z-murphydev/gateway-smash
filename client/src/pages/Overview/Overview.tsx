import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'elements';
const Overview = () => {
  return (
    <>
      <h1>Overview</h1>
      <Card>
        <p>
          In this Tournament you will gain "Credits" by completing missions and taking bounties. You also gain points for
          making it further into the tournament with first place receiving the most points. There will be a mainstage where
          bounty hunts and brackets will be done as well as multiple friendly set ups.
        </p>
      </Card>

      <h2>Credits:</h2>
      <Card>
        <p>
          This tournament has a credit system and the amounts of credits you have at the end decide your placing. Along with
          the “Bounty System” you are also able to bet your credits with other players either on your match OR on others.
          Everyone starts with 1,500 Credits.
        </p>
      </Card>
      <h2>Bounty System:</h2>
      <Card>
        <p>
          Every so often there will be a posted bounty on a player’s head. Bounties "Credits" will be based on previous
          results current number of credits players has and overall skill. Anyone may challenge a player with a bounty on
          their head, but it must be declared out loud and a set total must be agreed on (Bo1, Bo3, Bo5). When possible
          "Bounty Hunts" will be played on Mainstage so it can be streamed. If you challenge the criminal and win you get the
          bounty as well as 1/4th of their current credits. If you challenge the criminal and LOSE, they take 1/4th of your
          credits per win. Example if you challenged them to a Bo5 and lose 3-2 they will take 3/4th of your credits. IF you
          are seeded above the person and challenge them to a "Bounty Hunt" and lose, they take all your credits.
        </p>
      </Card>
      <h2>Missions:</h2>
      <Card>
        <p>
          In this tournament there are special missions you can embark on to gain credits. These missions may be simple and
          achievable in a normal match while some may be difficult and require special circumstances to achieve. There will
          be a list of missions you can go on as well as the credit reward make sure to read the missions and decide which
          ones you are attempting to get to become a credit king.
        </p>
      </Card>
      <Link to='/register'>Register</Link>
      <Link to='/missions'>Missions</Link>
      <Link to='/rules'>Rules</Link>
      <Link to='/leaderboard'>Leaderboard</Link>
    </>
  );
};

export default Overview;
