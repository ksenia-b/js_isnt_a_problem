'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';


// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function(starterIndex, mainIndex){
  return [this.starterMenu[startedIndex], this.mainMenu[mainIndex]];
},
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
    orderDelivery: function({starterIndex = 1,
                                mainIndex = 0, time = '20:00', address}) {
      console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.starterMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
    orderPasta: function(ing1, ing2, ing3){
  console.log(`Here is pasta with ${ing1}, ${ing2}, ${ing3}`);
},
  orderPizza: function(mainIngredient, ...otherIngredients){
    console.log(mainIngredients);
    console.log(otherIngredients);
  }
};



// =============================== DESTRUCTURING = unpacking - a way of unpacking values from array or an objects = break complex data structure down in a small data structure
const arr = [2, 3, 4];
const aa = arr[0];
const bb = arr[1];
const cc = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

let [main, secondary] = restaurant.categories;
console.log(main, secondary);



// [secondary, main]
// =============================================== Switching variables ===============================

const temp = main;
main = secondary;
secondary = temp;

[main, secondary] = [secondary, main]

// Recieve 2 return values from function
const [starter, mainCourse] = restaurant.order(2, 0);


// Nested destructuring
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);


// Default values
const [p, q, r] = [8, 9];
console.log(p, q, r); // undefined for r

// lets use default values
const [p = 1, q = 1, r = 1] = [8];
console.log(p, q, r);



// ============================ Spread operator - to see all the elements INDIVIDUALLY ======================
arr = [7, 8, 9];
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);

// lets use spread operator for it
const newArr = [1, 2, ...arr]; // its like take the elements from the array and write they here manually
console.log(newArr);
// Whey to use: 1. to extend the array; 2. when pass arguments to functions


const newMenu = [...restaurant.mainManu, 'Gnocci']; // NEW ARRAY from skratch

// - The big difference from the desctructuring is that SPREAD OPERATOR takes all the elements from the array and it doesn't create new variables. We can use it in the places when we can write values to separated by coma.

// Use:
// 1. Create a shallow copy of the array.
const mainMenuCopy = [...restaurant.mainMenu];

// 2. To merge all the arrays togather(join two arrays).
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];


// It work in all ITERABLE types: arrays, strings, maps, sets, but NOT OBJECTS (but SINCE es 2018 it works on OBJECTS, even the OBJECTS are NOT iterable).
const str = 'Jonas';
const letters = [...str, '', 'S.'];
console.log(letters);
console.log(...str); // = console.log('j', 'o', 'n');
console.log(`${...str}`); // WRONG, would NOT work


// const ingrediens = [prompt("Let's make pasta ingredient1?"), prompt("Let's make pasta ingredient2?"), prompt("Let's make pasta ingredient3?")];

restourant.orderPasta(ingredients[0], ingredients[1], ingredients[2]); // old way
restaurant.orderPasta(...ingrediens);
// and SINCE es 2018 it works on OBJECTS, even the OBJECTS are NOT iterable.

const newRestaurant = {...restaurant, founder: 'Guseppe', founded: 1998};

console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);



// =============================== Destructuring objects =========================================
const {name, openingHours, categories} = restaurant;
const {name: restaurantName, openingHours: hours, categories: tags} = restaurant; // if renaming needed

// Default values:
const {menu = [], starterMenu: starters = []} = restaurant;

// Mutating variables:
let a1 = 111;
let b1 = 999;
const obj = {a1: 23, b1: 7, c1: 14};
// we can NOT do: const a, b; let a, b; because that would create new variables, but we have them there
let {a, b} = obj;

({a1, b1} = obj);
console.log(a, b);



// =============================== REST = C O M P R E S S - pattern and REST paramethers ============================
// REST pattern - looks like spread operator, but does opposite. To pack elements into array, while spread operator - for unpack elements from the array.

// spread, because the right side of =
const arr = [1, 2, ...[3, 4]];

// REST=remaining elements of array because on the LEFT side of =
// so the REST systax use the rest(or remaining) elements that were NOT used in destructuring assignment.
const [a, b, ...others] = [1, 2, 3, 4, 5];

console.log(a, b, others);

const [pizza, , rissotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]

// Objects
const {sat, ...weekdays} = restaurant.openingHours;

// 2). Functions:
const add = function(...numbers){
  let sum = 0;
  for(let i = 0; i < numbers.length; i++) sum += numbers[i];
}

add(2, 3);
add(2, 3, 4);
add(2, 3, 4, 5);


const x = [23, 5, 7];
add(...x);



// =============================== Objects - remaining elements woud be in objects, not in array =====================
const {sat, ...weekdays} = restaurant.openingHours

// Nested objects
const { fri: {open, close} } = restaurant.openingHours;
// the same with new names:
const { fri: {open: newOpenName, close: newCloseName} } = restaurant.openingHours;


restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2,
});

restaurant.orderPiza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPiza('mushrooms');




//=================================== Short circuit ===========================
//=================================== OR ======================================
// Logical operators can:
// - use ANY data types
// - return ANY data types
// - short-circuting - if the first value is the TRUE value it will return imediately the first value. So the JS would not look the second operator in this case.
console.log(3 || 'Jonas') // the the operator

// undefined || 0 || '' || 'Hello' || 23 || null
// => 'Hello'

// undefined || 0 || 'jjj' || 'Hello' || 23 || null
// => 'jjj'

// undefined || 0  || '' || null
// => null

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10; // doesn't looks good for setting the default value
console.log(guests1);

const guests2 = restaurant.numGuests || 10; // looks good for setting the default value
console.log(guests2);


//===================================== AND =================================
// works opposite as the OR operator
// How does it works: it stops when found the first FALSE value and show it. That because it doesn't make sense to continue because the overall result would be FALSE anyway!!!

console.log(0 && 'Jonas');
// 0 && 'Jonas'
// => 0

// 1 && 'Jonas'
// => 'Jonas'

// null && undefined
// => null

// 'Hello' && 23 && null && 'jonas'
// => null

// practical example: // NOT very good example, next is better:
if (restaurant.orderPizza){
  restaurant.orderPizza('mushrooms', 'spinash');
}
// this is better example then previous one:
restaurant.orderPizza && restaurant.orderPizza('mashrooms', 'spinach');

// --- Summary --- :
// the OR operator will return the first TRUE value or the last value if All of them are falsy.
// the AND operator will return the first FALSE value or the last value if all of them are truethy.

// --- How to use operators --- ?
// - OR : to set default values
// - AND: to execute code in the second operant if the first one is true.



// =================================== NULLISH COALESCING operator (??) ==============================
// How does it work: work in the idea over the concept of Nullish values instead of falsy values.
// ============> Nullish values!!!: NULL and UNDEFINED <============
// ============> !!!!! NOT 0 or '' because they are NOT nullish values!!!!! <===========


// old way, if don't use Nullish coalescing operator:
// restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// the same, but using Nullish coalescing operator:
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);




//=================================== Logical assignment operator (es2021) ==================
// How it works? This operator assign the value to the variable if it is currently falsy.
const rest1 = {
  name: 'Capri',
  numGuests: 0
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi'
};


// 1). --- OR assignment operator:
// Add default values:
// rest1.numberGuests = rest1.numGuests || 10;
// rest2.numberGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;


// 2). --- Nullish assignment operator(null or undefined):
// Operator will assign value to a variable is that value is currently nullish.
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;


// 3). --- AND assignment operator:
rest1.owner = rest1.owner && '<anonymour>';
rest2.owner = rest2.owner && '<anonymour>';

rest1.owner &&= '<anonymour>';
rest2.owner &&= '<anonymour>';


// CCH


