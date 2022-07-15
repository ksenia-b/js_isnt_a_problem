//================================== variables:

console.log(me);
console.log(job);
console.log(year);

var me = 'Jonas';
let job ='teacher';
const year = 1991;


//================================== functions:
console.log(addDecl1(2, 3));
console.log(addExpr1(1, 2));
console.log(addArrow1(3, 4));

function addDecl1(a, b){
    return a + b;
}

const addExpr1 = function(a, b){
    return a + b;
};

const addArrow1 = (a, b) => a + b;



// this keyword

console.log(this);

const calcAge = function(birthYear){
    console.log(2037 - birthYear);
    console.log("here ->", this); // this would be the Window object
}

calcAge(1991);


// this keyword with arrow function
const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    console.log("here1 ->", this)
}


// =========================== regular functions and arrow functions
const jonas = {
    firstName: "Jonas",
    year: 1991,
    calcAge: function(){
        console.log("printing here: ", this);
        console.log(2037 - this.year);

        // Solution 1
        // const self = this;
        // const isMillenial = function(){
        //     console.log("abc = ", this.year);
        //     console.log(this.year >= 1991 && this.year <= 1996);
        // };

        // Solution 2
        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1982 && this.year <= 1996);
        }
        isMillenial();
    },
    // try to not to use arrow function as a method!!!!!!!
    greet: () => console.log(`Hey ${this.firstName}`),
};

jonas.greet();
jonas.calcAge();



// argument keyword
const addExpr = function(a, b){
    console.log(arguments);
    return a + b;
}
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
}

addArrow(2, 4, 7); // !!! ERROR woud be here!!!!!


// ================== primitive types VS objects
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
    name: 'Jonas',
    age: 38,
};

const friend = me;
friend.age = 27;
console.log('Friend: ', friend);
console.log('me: ', me);

// ============= primitive types:
// - number
// - string
// - boolean
// - undefined
// - null
// - symbol
// - bigint

// everyting else are objects


// ============= objects ( REFERENCE TYPES!!!!!)
// - object literal
// - arrays
// - functions
// many more...

// OBJECTS ARE STORED IN THE HEAP. Which is unlimited memorey. Because they are big



// const friend = me;
friend.me = 27; // !!!! NOT a probmem, because we're NOT changing the value at address 0003!!!


// Practive on primitives VS objects
// example 1:
let lastName = 'Willians';
let oldLastName = lastName;
lastName = 'Davis';
// it works this way because each peace of value is saved in the its peace of memory in the stack;

// example 2:
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};

const marriedJessica = jessica; // we are actually copying the refference which is pointing to the same object!!!
// IT DOES NOT CREATE NEW VALUE IN THE HEAP, IT JUST CREATE NEW VARIABLE WHICH IS POINTING TO THE ORIGINAL OBJECT
marriedJessica.lastName = 'Davis';
console.
    // this is not allowed because we used const?
// const marriedJessica = {};


// How to copy object???? Use .ASSIGN()
const jessica3 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alica', 'Bob'],
};


const jessicaCopy = object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
// but problem: it creates only cope of the first level, 'shallow copy' and NOT a deep copy.

jessicaCopy.family.push('Mary'); // this will not be copied
jessicaCopy.family.push('John'); // this will not be copied

console.log('jessica family: ', jessicaCopy)












