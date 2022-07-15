// ====================== Sets, ES6 =================
// - collection of unique values
// - there are NO INDICES in sets!!!!
// - are iterable

const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Rizsotto', 'Pasta'])
// {'Pasta', 'Pizza', 'Rizsotto'}
console.log(ordersSet)

console.log(new Set('Jonas'));
console.log(ordersSet.size);
console.log(ordersSet.has('Bread'));

orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');

orderSet.delete('Risotto');

// !!! this would NOT WORK:
// orderSet[1]; !!!!!!

orderSet.clear();

for (const order of ordersSet) console.log(order);

// example:
const staff = ['Waiter', 'manager', 'chef', 'Waiter', 'Waiter'];
staffUnique = new Set(staff);
console.log(staffUnique);

// set to array:
// spread operator works on all iterables:
const staffUnique = [..new Set(staff)];

console.log(new Set(['Waiter', 'manager', 'chef', 'Waiter', 'Waiter']).size) // how many unique?



// ================================= Maps, ES6 ========================
// The keys can have any type!!!! =====> difference between maps and objects
// = spetial types of objects.
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Af  asss');

rest.set('categories', ['Italian', 'Pizzeria']).set(['open', 11]).set(['close', 22]).set(true, 'We are open').set(false, 'We are closed');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

// booleans as the keys, example:
const time = 21;
console.log(rest.get(time > rest.get(open) && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);

rest.size;
rest.clear();


// example, Objects as the keys:
rest.set([1, 2], 'Test');
// !!!!!wrong example:
rest.get([1,2]); // !!!! would not work!!!!! =====> undefined!!!!!!

// right example:
const arr = [1, 2];
rest.get(arr);

// example with the dom:
rest.set(document.querySelector('h1'), 'Heading');


// Example of game:
const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Python'],
    [3, 'JaveScript'],
    [true, 'Correct!'],
    [false, 'Wrong answer! Try again!']
]);

console.log(question);
question.values();

for (const [key, value] of question){
    if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// the structure is similar to Objects.entries(openingHours);
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

const answer = Number(prompt('Your answer:'));
console.log(answer);
console.log(question.get(question.get('correct') === answer));


// convert map to array:
console.log([...question])



//========================= Which datastructure to use? ==========================
// --- Array VS Set:
tasks = ['Code', 'Eat', 'Code'];

tasks = new Set(['Code', 'Eat', 'Code']);
// hight-prefomance for sets!


// --- Objects VS Maps:
// Maps:
// - Maps for better perfomance
// - Keys can have ANY data types
// - Easy to iterate, easy to customize

// Objects:
// - More "traditional key/value store
// - Easier to write and access values with . and [].
// - Use for JSON data


