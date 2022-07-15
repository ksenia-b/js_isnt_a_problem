const airline = 'Tap air Portugal';

const plane = 'A320';

console.log(plane[0]);

plane.length

// Methods
// - indexOf - first occurence
airline.index.lastIndexOf('r');

// - slice
airline.slice(4); // the position on which the slice starts

airline.slice(4, 7); // 7 - is not included

airline.slice(0, airline.indexOf(' '));

airline.slice(-2); // will start extracting from the end
airline.slice(1, -1); // -1 will cut the last el

const checkMiddleSeat = function(seat){
    // B and E are middle seats
    const s = seat.slice(-1);
    if (s === 'B' || s === 'E')
        console.log('You got the middle seat!');
    else console.log('You got lucky!')
}

checkMiddleSeat('11B');
checkMiddleSeat('23E');
checkMiddleSeat('3E');


// JS does boxing string. So convert primitive to objects for string.

airline.toLowerCase();
airline.toUpperCase();


// Example:
const passenger = 'jOnaS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);

// Example2:
const email = 'hello@jonas.io';
const loginEmail = ' Hello@jonas.io /n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
normalizedEmail = loginEmail.toLowerCase.trim();
email === normalizedEmail;


// - replace
const priceGB = '288,97';
const priceUS = priceGB.replace('%', '$'); // !!! replace only the first occurence

const announcement = 'All passengers come to barding door!';
announcement.replace('door', 'gate');

// - regular expresion
announcement.replace('/door/g', 'gate');


// - boooleans:
const plane = 'A320neo';
plane.includes('A320');

plane.startsWith('Air');

if (plane.startsWith('Airbus') && plane.endsWith('neo')){
    console.log('Part of the new airbus family');
}

// Example3 :
const checkBaggage = function(items){
    if(baggage.includes('knife') || baggage.includes('gun'))
        console.log('You are not allowed.');
}
checkBaggage('I have a laptop, some Food.');
checkBaggage('Socks');
checkBaggage('items');


// - Split:

console.log('a+very+nice+string'.split('+'));

'Jonas Schmedtmann'.split(' ');

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');


// - Join:

['Mr.', firstName, lastName.toUpperCase().join(' ')].join(' ');

const passenger = 'jessica ann smith davis';

const capitalizeName = function(name){
    const names = name.split(' ');
    const namesUpper = [];

    for (const n of names){
        namesUpper.push(n[0].toUpperCase() + n.slice(1));
        namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
    }
    console.log(namesUpper.join( ));
}

// - Padding:
const message = 'Go to gate 23!';
message.padStart(25, '+');
'Jonas'.padStart(25, '+');


// Example:
const maskCreditCard = function(number){
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length, '*');

}

maskCreditCard(245234523552);
maskCreditCard(5523456865);


// - Repeat - repeat one string couple of times
const message2 = 'Bad weather.. All Departures';
message2.repeat(5);

const planesInLine = function(n){
    console.log(`There are {$n} in line ${repeat(n)}`);
}


