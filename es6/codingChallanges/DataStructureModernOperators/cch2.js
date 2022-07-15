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


// 1:
for ([i, el] of game.scored.entries()) console.log(`Goal ${i} from  ${el}`);


// 2:
for (odd1 of Object.values(game.odds)){
    odd1 += odd1;
    console.log(odd1);
}
let avgOdd = odd1 / Object.keys(game.odds).length;
console.log(`Avg odds = ${avgOdd}`);


// 3:
for ([k, v] of Object.entries(game.odds)){
    console.log(`Odd of ${game?.[k] ?? "draw"} is ${v}`)
}


// 4:
scores = {}
for (item of Object.values(game.scored)){
    if (scores?.[item]){
        console.log("scores[item]", scores[item]);
        scores[item] = scores[item] + 1;
    }
    else{
        scores[item] = 1;
    }

}
console.log(scores);