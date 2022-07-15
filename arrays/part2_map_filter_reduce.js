// data transformation with map, filter and reduce


// ----------- map - CREATE NEW ARRAY, works similar to forEach, BUT create new array!!!


// ------------ filter - filter elements in original array, which will satisfy a certain condition


// ------------- reduce - reduce all array elements down to one single value. Has Accumulator variable which is used for ....
// So you can imagine a snowball that keeps getting bigger and bigger as it go during a hill.


// ==================================================== MAP method:
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUsd = 1.1;

let movementsUSD1 = movements.map(function(mov){
    return mov * euroToUsd;
});

// or
//
// we can replace this function with the same arrow function
movementsUSD1 = movements.map(mov => mov * euroToUsd); // but many people think that it has the bad readability and makes it more difficult to understand

movements.map(mov, i, arr) => {
    if (mov > 0){
        return `Movement ${i + 1}`;
    }
    else{
        return `Movement ${i + 1}`;
    }
}

// ======= computing username
const user = 'Steven Thomas Williams';

const username = user.toLowerCase().split(' ').map(function(name){return name[0]}).join('');
console.log(username);

// -> or let's simplify:

const username = user.toLowerCase().split(' ').map(name => name[0]).join('');


// Which method to user? If we don't want to create new array, just modify existing one then use the forEach() and N O T the .map() method.



// ------------------------- Filter ------------------------

const deposits = movements.filter(function(mov){
    return mov > 0;
})

console.log(deposits);
console.log(movements);

// -> or for-of loop
const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);



// -------------------------- Reduce --------------------------

// accumulator is like a S N O W B A L L
console.log(movements);
const balance = movements.reduce(function(accumulator, cur, i , arr){
    console.log("accumulator = ", accumulator);
    console.log("cur = ", cur);
    console.log("i = ", i);
    console.log("arr = ", arr);
    accumulator + 100;
    // console.log("accumulator", accumulator);
}, 0);
console.log("balance = ", balance);


const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log("balance", balance);


// Maximum value
const max = movements.reduce((acc, mov) => {
    if (acc > mov)
        return acc;
    else
        return mov;
}, movements[0]);



// more examples for all:
const movements = [200, 450, -400, 3000, -650, 130];
const euroToUsd = 1.1;

const movementsUSD = movements.map(function(mov){
    return mov + 2;
});
console.log(movementsUSD);

// the same, but with arrow funciton:
const movementsUSD2 = movements.map(mov => mov + 1000);
console.log(movementsUSD2);

// const movementsUSD = movements.map(function(mov){
//     return mov * euroToUsd;
// });

// // the same, but with arrow function:
// const movementsUSD = movements.map(mov => mov * euroToUsd;);

// console.log("movementUSD = ", movementsUSD);

// const movementsUSDfor = [];
// for(const mov of movements) movementsUSDfor.push(mov * euroToUsd);
// console.log(movementsUSD);




