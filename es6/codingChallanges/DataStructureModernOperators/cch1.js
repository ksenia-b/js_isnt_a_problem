const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// 1
const [player1, player2] = game.players;

// 2
const [gk, ...fieldPlayers] = player1;

// 3
let [...allPlayers2] = [...player1, ...player2];

// 4
[players1Final] = ['Thiago', 'Coutinho', 'Perisic', ...allPlayers2];

// 5
const {team1, x:draw, team2} = game.odds;



    printGoals: function(...players){
        console.log(`The player ${players.length}`);
    },





















// 1.
// lets use destructuring:
const [player1, player2] = game.players;

// 2.
const [gk, ...fieldPlayers] = player1;

//3
const allPlayers = [...player1, ...player2]

//4
const players1Final = [...player1, 'Thiago', 'Coutinho', 'Periscic'];

// 5
const {team1, x, team2} = game.odds;
// or
const {odds: {team1, x:draw, team2}} = game;

//6
const printGoals = function(...players){
    console.log(`${players.length} goals were scored.`)
}

printGoals(...game.scored);

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');

//7
team1 < team2 && console.log('Team1 is more likely to win.')


// ============================== and now lets try to do it myself