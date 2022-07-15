// -------- .indexFor(), .indexOf()

// Difference: .indexOf() search for value that is in the array
// but with .findIndex we can to more complex conditions etc

// So .indexOf(23) check if the array contains the value 23 for example and if so then return the index of it.

  const index = accounts.findIndex(acc => acc.username === currentAccount.username);

// EQUALITY:
// ---------- includes:
// BUT!!! It is to test only for equality.
movements.includes(-130);
// returns True or False


// CONDITION:
// ---------- some:
const anyDeposit = movements.some(mov => mov > 5000);


// separate callback
const movements = [200, 450, -400, 3000, -650, -130, 70, 1320];

const deposit = mov => mov > 0;
console.log(movements.some(deposit)); // result: true
console.log(movements.every(deposit)); // result: false
console.log(movements.filter(deposit)); // result: [200, 450, 3000, 70, 1320]



// ------------ flat and findindex methods (es 2019): removed the nested array and flatted
const arr = [[1,2,3],[4,5,6], 7, 8, 9];
console.log(arr.flat());
// result: [1, 2, 3, 4, 5, 6, 7, 8, 9]

const arrDeep = [[[1,2],3],[4,[5,6]], 7, 8, 9];
console.log(arrDeep.flat(2));

const accountMovements = accounts.map(acc => acc.movements);
const allMovements = accountMovements.flat();
console.log("allMovements = ", allMovements);

const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);
// or
const overalBalance = accounts.map(acc => acc.movements).flat();

// BUT there is a new method: flatmap!!!! It is better on perfomance
// !!!! ONLY go 1 level deep!!!!!!!!!!
const overalBalance2 = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov, 0);


// S O R T  A R R A Y S:
// sort arrays:

// sort - sort based on string:
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);
 //result:['Adam', 'Jonas', 'Martha', 'Zach']

console.log(movements);
// return < 0, A, B
// return > 0, B, A


// Ascending:
movements.sort((currentValue, nextValue) => {
    if (currentValue > nextValue)
        return 1;
    if (nextValue > currentValue)
        return -1;
});
console.log(movements);

// Descending:
movements.sort((currentValue, nextValue) => {
    if (currentValue > nextValue)
        return 1;
    if (nextValue > currentValue)
        return -1;
});
console.log(movements);

// or it would be the same as:
movements.sort((a, b) => {
    if (a > b) return - 1;
    if (a < b) return 1;
})

movements.sort((a, b) => b - a); // Descending
movements.sort((b, a) => b - a);// Ascending


// CREATING AND FEELING ARRAYS:
const x = new Array(7);
console.log(x); // it creates array with empty 7 elements inside:
// result: [empty × 7]
// and we can not use .map() method to fill it up
// !!! this method would NOT work with it:
// console.log(x.map() => 5));

x.fill(1);
console.log(x);
// result: [1, 1, 1, 1, 1, 1, 1];

// x.fill(1, 3, 5)
// x.fill("theValue", 2, 3); // 2 - Where we want to start, 3 - the end of fill

const y = Array.from({length: 7}, () => 1);
console.log(y);
// result: [1, 1, 1, 1, 1, 1, 1]

const e = Array.from({length: 7}, (curr_val, i) => i + 1);
const e1 = Array.from({length: 7}, (_, i) => i + 1);


labelBalance.addEventListener('click', function(){
    const movementsUI = Array.from(document.querySelectorAll('._movements__value'));
    console.log(movementsUI.map(el => Number(el.textContent.replace('$', ''))));

})