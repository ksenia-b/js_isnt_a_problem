///////////////////////////////////////
// Arrow functions

// function expresion
const calcAge2 = function(birthYeah){
    return 2037 - birthYeah;
}

// equal

const calcAge3 = birthYeah => 2037 - birthYeah;
consta age3 = calcAge3(1991);
console.log(age3);

//-----------
const YearsUntilRetirement;

const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
    const age = 2037 - birthYeah;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1991, 'Jonas')); console.log(yearsUntilRetirement(1980, 'Bob'));

// arrow function

const calcAge = function (birthYeah){
    return 2037 - birthYeah;
}

const m_height = 10;
const j_height = 15;

// CCH #1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);


// 1 CCH #2

const calcAge = function (birthYear){
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName){
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0){
        console.log(`{$firstName} retires in ${retirement} years.`);
        return retirement;
    }
}


console.log(yearsUntilRetirement(1213, "ikhk"))


// 2 CCH #1
// function calcAvarage(score1, score2, score3) {
//     return (score1 + score2 + score3) / 3;
// }
// let Avarage = calcAvarage =>  (score1 + score2 + score3) / 3;
//
// function checkWinner(score1, score2, score3, scoreK1, scoreK2, scoreK3) {
//     let avgDolphins = calcAvarage(score1, score2, score3);
//     let avgKoalas = calcAvarage(scoreK1, scoreK2, scoreK3);
//
//     if (avgDolphins > avgKoalas) {
//         console.log(`Dolphins win ${ avgDolphins } vs ${ avgKoalas }`)
//     } else {
//         console.log(`Koalas win ${ avgDolphins } vs ${ avgKoalas }`)
//     }
//
// }
//
// checkWinner(44, 23, 71, 65, 54, 49);






// ========== ARRAYS ============
//
const fistName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037-1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYeah){
    return 2037 - birthYeah;
}
const years = [1992, 1967, 2002, 2010, 2018];

// add elements methods
const newLength = years.push(1900); // !!!! returned length of a new array

const newLength2 = years.unshift(1001); // add to the begining

// remove elements
const popedElement = years.pop() //remove last element AND returned the removed element
const shiftedElement = years.shift // remove first element AND returned the removed element


// find element
years.indexOf('2002') //return the idex of el IF element is not there it will return -1

// ES6

years.includes('2002'); // return indices of element or -1. Works with the same types

if (years.includes('2002')){
    console.log("Yes, found 2002 in years.")
}


// 2 CCH 2
const tipVal = (billValue) => {
    if (billValue > 50 && billValue < 300){
       return billValue * 0.15;
    }
    else{
        return billValue * 0.20;
    }
}
// or ternar operator

const tipVal = function(billValue){
    return billValue <= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.20;
}

// or arrow and ternal
const tipVal = (billValue) => billValue <= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.20;

const calculateTotal = (arr, arr2) => {
    return [arr[0] + arr1[0], arr[1] + arr1[1], arr[2] + arr[2]];
}

console.log(tipVal(100))

const bills = [125, 555, 44]
const tips = [tipVal(bills[0]), tipVal(bills[1]), tipVal(bills[2])]


totalTips = calculateTotal(tips)
totalBills = calculateTotal(bills)

console.log("result = ", totalTips + totalBills)







// =========== OBJECTS =========

const jonas = {
    firstName: "John",
    lastName: "Krauff",
    age: 21,
    birthYear: 1991,
    like: ["football", "coffee"],
    hasDriverLicense: true,
    // ----- EXAMPLE 1:
    // calcAge: function(birthYear){ //!!! here only use function expresion and NOT declaration
    //     return 2022 - 1991
    // }

    // or
    // ----- EXAMPLE 2:
    // better to use THIS:
    // calcAge: function(){
    //     console.log(this);
    //      return 2022 - this.birthYear; //this equal jonas not to hardcode the name of the object
    // },
    // or
    // ------ EXAMPLE 3:
    calcAge: function(){
        this.age = 2022 - this.birthYear;
        return this.age;
    },
    // summary: function(){
    //     return this.firstName + this.lastName + " is " + this.age;
    // }
    summary: function(){
        return `${this.firstName}  ${this.lastName}  is a ${this.age} and he has ${!this.hasDriverLicense ? 'a': 'no'} driving licanse`
    }
}
// similar to
const  calcAge = function(birthYear){
        return 2022 - 1991
    }

jonas.name
//or
jonas['name']

// What is the difference?
// Here it is:

const nameKey = 'Name';
jonas["first" + nameKey];
jonas["last" + nameKey];


jonas.calcAge(1991);
jonas['calcAge'](1991);

// if use here Example 1, 2 then it will do calculation multiple times better to use Example 3: to calculate only once:
jonas.calcAge()
jonas.calcAge()
jonas.calcAge()

jonas.summary()

// function calcAvarage(score1, score2, score3) {
//     return (score1 + score2 + score3) / 3;
// }
let calcAvarage = (score1, score2, score3) =>  (score1 + score2 + score3) / 3;

function checkWinner(score1, score2, score3, scoreK1, scoreK2, scoreK3) {
    let avgDolphins = calcAvarage(score1, score2, score3);
    let avgKoalas = calcAvarage(scoreK1, scoreK2, scoreK3);

    if (avgDolphins > avgKoalas) {
        console.log(`Dolphins win ${ avgDolphins } vs ${ avgKoalas }`)
    } else {
        console.log(`Koalas win ${ avgDolphins } vs ${ avgKoalas }`)
    }

}

checkWinner(44, 23, 71, 65, 54, 49);

// 2 CCH 3

mark = {
    fullName: "Mark Miller",
    mass: 10,
    height: 100,
    calcBMI: function(){
        this.BMI = this.mass / this.height ** 2
        return this.BMI
    }

}
john = {
    fullName: "JohnSmith",
    mass: 20,
    height: 100,
    calcBMI: function(){
         this.BMI = this.mass / this.height ** 2
         return this.BMI
    }
}
// const higherBMI = (bmi1, bmi2) => {
//     if (bmi1 > bmi1){
//         console.log("marks is highter")
//     }
//     else{
//         console.log("johg is higher")
//     }
// }
// console.log(higherBMI(mark.calcBMI(), john.calcBMI()))

// or
if mark.BMI > john.BMI{
     console.log("marks is highter")
}
else{
     console.log("johg is higher")
}


// LOOPS

for (let rep = 0; rep <= 10; rep ++){
    console.log("abc");
}


const jonas = ['Jonas', 'Schmitz', 2037 - 1991, 'teacher', ['Michael', 'Peter', 'Steven'], true];
const types = [];

for(let i = 0; i < jonas.length; i++){
    console.log(jonas[i]), typeof jonas[i];
    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}


for (let i = 0; i < jonas.length; i++){
    //  if (typeof jonas[i] !== 'string') break;
    if (typeof jonas[i] !== 'string') continue;
    console.log(jonas[i]
                }}

// loop back
for (let i = jonas.length - 1; i >= 0; i --){
    console.log(jonas[i]);

}

// look insede of the loop
for (let exercise = 1; exercise <= 4; exercise++){
    console.log(`-------- starting exercise ${exercise}`);

    for (rep = 1; rep < 6; rep++){
        console.log(`Lifting weight repetion ${rep}`);
    }
}

// while loop:
let rep = 1;
while(rep <= 10){
    console.log(`while lifting weight repetition ${rep}.`);
    rep++;
}


let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);
while(dice !==6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}


// 2 CCH 4

const bills = [10, 23, 65, 34, 3, 1, 45, 2, 1, 11];
const tips = [];
const totals = [];

const calcTip = function(billValue){
    return billValue <= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.20;
}

for (i = 0; i < bills.length; i++){

    tips.push(Math.trunc(calcTip(i)))
    totals.push(Math.trunc(calcTip(i)) + bills[i]);
}
console.log(tips);
console.log(totals);


function calcAvarage(arr){
    let sum = 0;

    for (i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    total = sum/arr.length;
    return total;
}
total = calcAvarage(bills);
console.log("total = ", total);




// 5 CCH 1
maxTemp = [17, 21, 23]


const printForecast = (arr) => {
    for(i = 0; i < arr.length; i++)
    console.log(`${arr[i]}C in ${i} days`)
}


