'use strict';

// default values:
const bookings = [];

const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers){
    // es5:
    // numPassengers = numPassengers || 1;
    // price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123');
createBooking('LH345', 2, 800);



// Value VS reference:
const flight = 'LH234';

const jonas = {
    name: 'Jonas Schemedtmann',
    passport: 4523543525254
};

const checkIn = function(flightNum, passenger){
    console.log("here1 = ", flightNum);
    flightNum = 'Lh999';
    console.log("here2 = ", flightNum, passenger);
    passenger.name = 'Mr. ' + passenger.name;

    if (passenger.passport === 4523543525254){
        alert('Check in');
    } else {
        alert('Wrong passport');
    }
}

checkIn(flight, jonas);
console.log(flight);

// ---> result: "Wrong passport";
// because: string is primitive type
// flightNum = flight;

const newPassport = function(person){
    person.passport = Math.trunc(Math.random() * 100000000);
}

newPassport(jonas);
checkIn(flight, jonas);

// - passing by value
// - passing by reference - doesn't exists in JS!!! Even if it looks like it. So we pass a reference to a function, but we NOT pass by a reference!!!


// first-class functions
// Functions - other type of objects in js. Since functions are other type of value
// we can do alot of difference things.


// Types of functions:
// - Highter-order functions, example:
// const great = () => console.log('Hey Jonas');
// btnClose.addEventListener('click', greet);


const oneWord = function(str){
    return str.replace('//g', '').toLowerCase();
}

const upperFirstWord = function(str){
    const [first , ...others] = str.split(' ');

    return [first.toUpperCase(), ...others].join('');
};


// Higher-order function
const transformer = function(str, fn){
    console.log(`Original string: ${str}`);
    console.log(`Transformed string : ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
}

transformer('JavaScript is the best!', upperFirstWord);


// JS callbacks all the time!!!!:
const high5 = function(){
    console.log('sadfas');

}
document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);

// - callback functions helps us to create abstructions



//=============================== Functions returning functions:
const greet = function(greeting){
    return function(name){
    console.log(`${greeting} ${name}`);
}
};

const greeterHey = greet('Hey');
greeterHey('Jonas')('Hello');


// example of functional programming will be next

const greet => (greeting) {
    return =>(name){
        console.log(`${greeting} ${name}`);
}
}

// the same, one arrow function which is returning another arrow function:
const greetArr = greeting => name =>  console.log(`${greeting} ${name}`);
greetArr('hi')('Hello');



// ============================= call and apply method ======================

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book: function(){},
    book(flightNum, name){
        console.log(`${name} bookied a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`);
        this.bookings.push({flight: `${this.iataCode}${flightNum}`});

    }
}

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');


const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: []
}

const book = lufthansa.book;
// book(23, 'Sarah Williams'); // !!!!! would NOT work


// ==================================================== call, apply, bind:

// ---------- call:
book.call(eurowings, 23, 'Sarah Williams'); // this keyword will be set to eurowings!!!!
book.call(lufthansa, 2342, 'sdf asd');


// ---------- apply (!!!!!!! DOES NOT USED IN MODERN JS, BECAUSE THERE IS MORE MODERN WAY -> book.call(swill, ...flightData)):
// do exactly the same, the only difference is that it doesn't receive the list of arguments, instead it take and ARRAY of ARGUMENTS:


const flightData = [34534, 'Goeorge Cooper'];
book.apply(eurowings, flightData);


// ----------- bind:
// it return the new function where 'this' keyword is bound:

const bookEW = book.bind(eurowings); // !!! this will NOT call the book function, but it will return the new function
bookEW(23, 'Stewn Williams');

const bookLH = book.bind(lufthansa);
bookLH(534, 'Mark Mille');


const bookEW23 = book.bind(eurowings, 23); //partial application = part of arguments are already set!!!
bookEW23('Jonas, Schmasdf');


// example of using bind with event listener:

lufthansa.planew = 300;
lufthansa.buyPlane = function(){
    this.planes++;
    console.log(this);
    console.log(this.planes);
}

document.querySelecto('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));


// Partial application:
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 100));




// call and apply double check learning again....
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    booking: [],
    book(flightNum, name){
        console.log(`${name} booked a seat on ${this.airline} flight ${flightNum}`);

        this.booking.push({flight: `${this.iataCode}${flightNum}`, name});
    },


};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
const eurowings = {
    name: 'Eurowings',
    iataCode: 'EW',
    booking: []
}


const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    booking: [],
    oksanasBookings: [],
    book(flightNum, name){
        console.log(`${name} booked a seat on ${this.airline} flight ${flightNum}`);
        this.booking.push({flight: `${this.iataCode}${flightNum}`, name});
    },
    oksanabook(flighNum, name){
        console.log(`You booked ${flighNum}${name}`);
        this.oksanasBookings.push({abc: 'aabbcc', def: 'def'});
        console.log(this.oksanasBookings);

    }

};

// lufthansa.book(239, 'Jonas Schmedtmann');
// lufthansa.book(635, 'John Smith');

lufthansa.oksanabook('KsuAirline', 3212);



const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    booking: [],
    oksanasBookings: [],
    book(flightNum, name){
        console.log(`${name} booked a seat on ${this.airline} flight ${flightNum}`);
        this.booking.push({flight: `${this.iataCode}${flightNum}`, name});
    },
    oksanabook(flighNum, name){
        console.log(`You booked ${flighNum}${name}`);
        this.oksanasBookings.push({abc: 'aabbcc', def: 'def'});
        console.log(this.oksanasBookings);

    }

};

// lufthansa.book(239, 'Jonas Schmedtmann');
// lufthansa.book(635, 'John Smith');

lufthansa.oksanabook('KsuAirline', 3212);

const eurowings = {
    name: 'Eurowings',
    iataCode: 'EW',
    bookings: [],

}
//!!! does not work!!!!
const book = lufthansa.book;
book(23, 'Sarah Williams');

book.call(eurowings, 23, 'Sarah Williams');

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    booking: [],
};
book.call(swiss, 583, 'Mary Cooper');


// =========================================== Apply
// =Does exactly the same. The only difference is that apply doesn't receive the list of arguments BUT instead it is gonna create an array of arguments.

const flightData = [583, 'George Cooper'];
book.apply(swiss, flighData);
console.log(swiss);
book.call(swiss, ...flightData);


// bind method:
// This method will NOT call the book function!!!
// instead it will create a new function where THIS keyword will always be set to 'eurowings' or smth else what we specified

const bookEW = book.bind(eurowings);
bookEW(23, 'Steven Williams');
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
const bookEW23 = book.bind(eurowings, 23);
console.log(bookEW23('Oksana Barshchyk'));

// bind:

// ======= Partial application - means that part of the arguments that are specified are already applied.

const addTax = (rate, value) => value + value * rate;
conole.log(addTax(0.1, 20));

const addVAT = addTax.bind(null, 0.23);
// =
cosnt addVAT = value => value + value * 23;

addTaxRate = function(rate){
    return function(value){
        return value + value * rate;
    }
}

const addVAT2 = addTaxRate(0.23);