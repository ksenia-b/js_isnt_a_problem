'use strict';

// Array methods - are simply functions that are attached to arrays in js.
// Array are objects.

// -- slice
let arr = ['a', 'b', 'c', 'd', 'e'];
arr.slice(2); // it returned NEW array starting at position 2!!!
//  ['c', 'd', 'e']
arr.slice(2, 4);
arr.slplice()

// -- reverse
const arr2 = ['j', 'i', 'h', 'f'];
arr2.reverse();

// -- concat
cost letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);


// -- join
letters.join('-');


//-----------  .at()  ES 2022
// start counting from the end of the array

const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// last el if we don't know the length of arr
// old way:
// arr[arr.length-1]
// or
// arr.slice(-1)[[0]
// or new way:
// arr.at(-1);



// ----------- .forEach() - highter order function
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
for (const movement of movements){
    if(movement > 0){
        console.log(`You deposited ${movement}`);
    } else{
        console.log(`You withdrew ${Math.abs(movement)}`);
    }
}
console.log("------ FOREACH ---------");

// first paramether - the element, second - index, third - entire array
movements.forEach(function(movement){
    if(movement > 0){
        console.log(`You deposited ${movement}`);
    }
    else{
        console.log(`You withdrew ${Math.abs(movement)}`);
    }
})

// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...


const movements = [12, 23,444,1, 113,342];
movements.forEach(function(movement, index, array){
    console.log("movement = ", movement);
    console.log("index = ", index);
    console.log("array = ", array);
})

// forEach() OR for-of loop?
// Difference: we can not break forEach loop!!!
// the 'continue and break statements is not working here!!!!



// - Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EURO', 'EURO']);
console.log(currenciesUnique);
currenciesUnique.forEach(function(value, key, map){
    console.log(`${keys}: ${values}`);
})

