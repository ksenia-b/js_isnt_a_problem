// days between two dates:
const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);

const calcDaysPassed = (date1, date2) => (date2 - date1);

const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24)) / (1000 * 60 * 60 * 24);
console.log(days1);

// internalization api, new!!!
// all it does is to convert number and strings into different languages
// for example: currencies are represented in different styles in different countries

options = {
    style: 'unit',
    unit: 'mile-per-hour'
}


// INTERNALIZATION:

const num = 3884764.23;
console.log('us:', new Intl.NumberFormat('en-us').format(num));
console.log('Germany: ', new Intl.NumberFormat('de-De', options).format(num));
console.log('Syria: ', new Intl.NumberFormat('ar-SY', options).format(num));

console.log(navigator.language, new Intl.NumberFormat(navigator.language).format(num));


// ---------- Timers:
// ----- setTimeOut()
// settimeouttimer - run once
// - runs forever
// example 1:
setTimeout(() => console.log("here is your pizza!!!"), 3000);
console.log('Waiting...');

// example 2:
setTimeout((ing1, ing2) => console.log(`here is your pizza with ${ing1} and ${ing2}!!!`), 3000, 'olives', 'spinach');
console.log('Waiting...');

// example 2:
const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout((ing1, ing2) => console.log(`here is your pizza with ${ing1} and ${ing2}!!!`), 3000, ...ingredients);
if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);
console.log('Waiting...');

// ------- setInterval()
// setInterval(function(){
//     const now = new Date();
//     console.log('now = ', now);
// }, 1000);

