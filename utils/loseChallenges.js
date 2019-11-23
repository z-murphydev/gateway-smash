const loseArr = [
  'Self-Destruction:',
  ' Have a stock lead, SD, and lose the game ',
  ' -500 credits - Repeatable',
  ' Floor is Lava:',
  ' Air Dodge off stage to death ',
  ' -250 Credits - Repeatable',
  ' Imma Head Out:',
  ' Get 3 Stocked ',
  ' -150 Credits - Repeatable ',
  ' Talk Shit, Get Hit:',
  ' Talk shit and lose ',
  ' -1000 Credits – Repeatable ',
  ' First Time:',
  ' Get your shield broke ',
  '-250 Credits - Repeatable ',
  ' Nothing but Air:',
  ' Fail your Falcon Up B and fucking die ',
  ' -10 Credits - Repeatable ',
  'Existential Dead:',
  ' Never play the same character in a set and never win a match ',
  ' -5000 Credits'
];

const Challenges = function(title, desc, value) {
  this.title = title;
  this.desc = desc;
  this.value = value;
};

const newArr = [];

for (let i = 0; i < loseArr.length; i++) {
  if (i === 0) newArr.push(new Challenges(loseArr[i].trim(), loseArr[i + 1].trim(), loseArr[i + 2].trim()));

  if (i % 3 !== 0) continue;

  if (i % 3 === 0) newArr.push(new Challenges(loseArr[i].trim(), loseArr[i + 1].trim(), loseArr[i + 2].trim()));
}

console.log(newArr);
