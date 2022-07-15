// In js all numbers are represented internally as decimal numbers
// so all numbers are decimals

console.log(23 === 23.0);

// numbers store in binary system
// Base 10 - 0 to 9, 1/10 = 0.1, 3/10 = 3.33333333
// Binary base 2 - 0.1
console.log(0.1 + 0.2);
console.log(0.1 / 0.2 === 0.3);

// 0.30000000000000004

// Converting:
console.log(Number('23')); // 23
console.log(+'23'); // 23


// Parsing
console.log(Number.parseInt('30px', 10));
console.log(Number.parseFloat('2.5rem'));

console.log(Number.parseInt(' 2.5rem'));
console.log(Number.parseInt(' 2.5rem '));

// Check if value is not NaN:
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20x'));
console.log(Number.isNaN(20 / 0));


// The BEST WAY!!! to check if value is a real number and NOT a string:
console.log(Number.isFinite('20'));
console.log(Number.isInteger(23 / 0));



// ------- Math and rounding:
Math.sqrt(9);
25 ** (1 / 2); // square root of 25
25 ** (1 / 3); // quadrating root of 25

Math.max(4, 4, 6, 3);
Math.max(4, 4, '6px', 3); // result: NaN
Math.max(4, 4, '6', 3); // result: 6

Math.PI * Number.parseFloat('10px') ** 2;

// random:
Math.trunc(Math.random() * 6) + 1;

// random results between the min..max randge:
randomInt = (min, max ) => Math.trunc(Math.random() * (max - min ));
// 0...1 -> 0...(max - min) -> min...max

// rounding integers:
Math.trunc(23.3);

Math.round(23.3); // 23

Math.floor(-23.3)

// rounding decimals
// this will always return string and NOT a number:
(2.7).toFixed(); // '3'
(2.345).toFixed(); // '2'

+(2.345).toFixed(2) // 2.35



// Remainder operator:
5/2 // 2.5
5%2 // 1

const isEven = n => n%2 === 0;
isEven(8); // true

// every second row paint in orangered:
[...document.querySelectorAll('.movements__row')].forEach(function(row, i){
    if(i % 2) row.style.backgroundColor = 'orangered';
});



// _

const diameter = 287_460_000_000; // es2020
const priceCents = 349_99;

const transferFee1 = 15_00; // 1500
const transferFee2 = 1_500; // 1500

const PI = 3.14_15; //ok
const PI = 3._14_15; // doesn't work
const PI = 3_.14_15; // doesn't work

// !!!! Converting string to a number would not work as expected!!!
console.log(Number('230_00')); // would not work!!!




// bigInt in es 2020
// numbers are represented internaly as 64 bits
// BUT only 53 bits are used to store the digits themselves, the rest are used to store the decimal poing and the sign

// So if there are 53 bit to store the number it means that there are limits of how big numbers can be:
// we can calculate it: 2**53 - 1 // -1 because the numbers starts from 0;
console.log(2 ** 52 - 1);
// and this number is so important and it is saved in Numbers as MAX_SAVE_INTEGER
// 2 - because js is base2, so 0 and 1;
console.log(Number.MAX_SAFE_INTEGER);

// then comes bigInt and there is no limit of size of the number is stored



// Creating dates:
const now = newDate();
new Date('Aug 02 2020')
new Date(2037, 10, 31);
//Tue Dec 01 2037 00:00:00 GMT+0200 (Восточная Европа, стандартное время)

// ts dec 31 1997:
new Date(3 * 24 * 60 * 60 * 1000);

// working with dates:
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
future.getFullYear();
future.getMonth; // 10 is month number 11 !!!!!!
Date.now() // to get current timestamp

console.log(future);



