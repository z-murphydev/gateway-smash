const arr = [
  'Double Dicked Straight to Hell:',
  ' Double spiking someone off stage for the kill',
  ' +500 Credits - Repeatable ',
  " Gotta beat em' all:",
  ' Win a game with every Pokémon ',
  ' +1000 Credits ',
  "Ain't nothing but a B:",
  ' Win a game using only B',
  ' +2500 credits - Repeatable',
  " I don't even need it B:",
  ' Win a game using no B',
  ' +1000 credits - Repeatable',
  ' This is yours? This is mine:',
  ' Beating someone then stealing their character and beating them with it. - points if you lose',
  ' +/- 500 credits',
  ' Started from the bottom:',
  ' Making it through to winners from losers’ side',
  ' +1500 Credits',
  ' Low Tier High Skill:',
  ' Winning with a "Low Tier"',
  ' +100 credits - Repeatable',
  ' Reach Around:',
  ' Reverse 3 stock ',
  ' -500 Credits - Repeatable ',
  ' No Sweat:',
  ' 3 stock with less than 60 percent damage',
  ' +1000 credits ',
  ' Get Sauced:',
  ' Come back from 150 and stock disadvantage',
  ' +2000 credits',
  ' Look Mom No Eyes:',
  ' Kill while facing away. MUST ANNOUNCE DURING ATTEMPT ',
  ' +5000 credits ',
  ' Take a seat:',
  ' Landing a predicted special while drinking something',
  ' +2500 credits ',
  'Sipping that LEAN:',
  ' Take a stock only using tilt attacks',
  ' +5000 credits',
  ' Who wants to be a millionaire?:',
  ' Win 3 Money Matches',
  ' +1800 credits ',
  ' Mouth game strong:',
  ' Commentate a game without messing up a single move name',
  ' +500 credits - Repeatable'
];

function Challenges(title, desc, value) {
  this.title = title;
  this.desc = desc;
  this.value = value;
  console.log('VALUES IN CONSTRUCTOR', this.title, this.desc, this.value);
}

const newArr = [];
let obj;
for (let i = 0; i < arr.length; i++) {
  if (i === 0) {
    obj = new Challenges(arr[i].trim(), arr[i + 1].trim(), arr[i + 2].trim());

    newArr.push(obj);
  }

  if (i % 3 !== 0) continue;

  if (i !== 0 && i % 3 === 0) {
    obj = new Challenges(arr[i].trim(), arr[i + 1].trim(), arr[i + 2].trim());

    newArr.push(obj);
  }
}

console.log(newArr);
