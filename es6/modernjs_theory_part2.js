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

const  openingHours = {
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
  };

// ==================================== for-of loop ===============================
// !!! ----> here we CAN use CONTINUE and BREAK;

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]

for (const item of menu) console.log(item);

// ! but it is a bit of a pain if we need that index. Originaly the for-of loop was meant to give you that element. However we can ge both:

for (const item of menu.entries()){
    console.log(item);
}

// old way:
for (const item of menu.entries()){
    console.log(`${item[0] + 1}: ${item[1]}`)
}
// new way, let's use distructuring:
for (const [i, el] of menu.entries()){
    console.log(`${i + 1}: ${el}`);
}



// ================================ enhenced object literals ES6 =====================
const rest = {}

const  openingHours = {
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
  };


// Example 1:
// old way:
// in restaurant object write:

const rest = {
    openingHours: openingHours
}

// new way:
const rest = {
    openingHours
}


// Example 2:
// old way:
const rest = {
    openingHours,
     order: function(starterIndex, mainIndex){
         return [this.starterMenu[startedIndex], this.mainMenu[mainIndex]];
     }
};

// new way:
const rest = {
    openingHours,
    order(starterIndex, mainIndex){
         return [this.starterMenu[startedIndex], this.mainMenu[mainIndex]];
    }
};


// Example3:
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri'];
const rest1 ={
    [weekdays[3]]:{
        open: 12,
        close: 22
    },
      [weekdays[5]:{
        open: 12,
        close: 22
    },
      [`day-${2 + 4}`]: {
        open: 12,
        close: 22
    }
}



// =========================== optional chaining ?. ES6 ======================
console.log(restaurant.openingHours.mon);
// we don't know if this option exists

console.log(restaurant.openingHours.mon.open);
// would be an error is mon and open doesn't exists

if (restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);


// new way:
// With optional chain:
console.log(restaurant.openingHours.mon?.open); // undefined would be returned
// if the property exists ---> NOT NULL and NOT UNDERFINED


console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// example:
const days = ['mon', 'tue', 'wed', 'thu', 'fri'];

for (const day of days){
    console.log(day);
    const open = restaurant.openingHours[day]?.open || 'closed';
    // !!!!! the problem in prev open variables is that on Sat it is opened in 0!!!!
    // so let's use ?? operator:
    // const open = restaurant.openingHours[day]?.open ?? 'closed';
    //
    console.log(`On ${day}, we open at ${open}`);
}


// --------- Methods:
restaurant.order?.(0, 1) ?? 'Method doesn"t exists!';


// --------- Arrays:
const users = [
    {name: 'Jonas',
    email: 'hellojonas@gmail.com'}
]
//new way:
console.log(users[0]?.name ?? 'User array empty.');

// old way:
if (user.length > 0) console.log(users[0].name);
else console.log('user array empty');



// ============================================ looping over objects ==========
// ------ Looping over keys:
for (const day of Object.keys(openingHours)){
    console.log(day);
}

const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length}`;
for (const day of properties){
    openStr += `${day},`;
}

// Properties values
const values = Object.values(openingHours);
console.log(values);

// Entire Objects
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, {open, close}] of entries){
    console.log(`On ${key} we open at ${open} and close at ${close}`);
}


