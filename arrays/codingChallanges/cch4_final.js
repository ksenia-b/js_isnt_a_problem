const dogs = [
{ weight: 22, curFood: 250, owners: ['Alice', 'Bob'] }, { weight: 8, curFood: 200, owners: ['Matilda'] },
{ weight: 13, curFood: 275, owners: ['Sarah', 'John'] }, { weight: 32, curFood: 340, owners: ['Michael'] },
];


// 1
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight * 0.75 * 28)));
console.log(dogs);
// result:
// 0: {weight: 22, curFood: 250, owners: Array(2), recFood: 462}
// 1: {weight: 8, curFood: 200, owners: Array(1), recFood: 168}
// 2: {weight: 13, curFood: 275, owners: Array(2), recFood: 273}
// 3: {weight: 32, curFood: 340, owners: Array(1), recFood: 672}
// length: 4
// [[Prototype]]: Array(0)


// 2
console.log(`Sarah's dog is eating ${dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'} `)


// 3
const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recFood).map(dog => dog.owners).flatMap(dog => dog.owners);

const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recFood).map(dog => dog.owners).flatMap(dog => dog.owners);


// 4
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);


// 5
console.log(dogs.some(dog => dog.curFood === dog.recFood));


// 6
console.log(dogs.some(dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1));


// 7
const chechEatingOkay = dog => dog.curFood > dog.recFood && dog.recFood * 1.1;
console.log(dogs.some(checkEatingOkay));


// 8
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);