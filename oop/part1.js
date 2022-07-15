// In modern JS there are two paradigm:
// - OOP;
// - functional programming.


// What is OOP?
// OOP - programing paradigm which based on the concept of objects. It means that the style of 'how' we write and organize code.

// We use objects to model(describe) real-world or abstract features.

// Objects can contain data which we call **** properties ****.
// Objects can contain code which we call ***** methods ****.


// In tranditional OOP class is a blueprint from which we can create new objects.

// !!! But JS doesn't support real classes.
// We called all objects created from that class - instances of the class.

// So we can create classed to generate objects from these classes.



// =========== There are 4 principles which can help us to design classes:
// - abstraction
// - encapsulation
// - inheritance
// - polymorphism


// ---------------- 1.  Abstraction -----------
// It means to hide details that doesn't matter. It allows us to get an overview perspective of the things we're implementing, instead of messing with details that don't really matter to our implementation.


// ---------------  2. Encapsulation(private) -----------
// It just means to keep preperties and methods PRIVATE inside of a class, so they are NOT ACCESSIBLE from outside the class. Some methods can be exposed as a public interface (API).
// However, 'private' keyword DOES NOT EXISTS in JS!!!!!


// -----------------  3. Inheritance -------------
// Makes all properties and methods of a certain class available to a child class, forming a hierarchical relationship between classes. This allows us to reuse common logic and to model real-world relationships.
// Example: 'admin' is also a user but with some added functionality.


// ----------------- 4. Polimorphism -------------
// Polymorphism(the name comes from greek where it means many-many shapes). A child class can overwrite a method the it inherited from a parent class.



// =============== OOP in JS:

// Classical OOP:
// Class -> Object

// OOP in js:
// Prototype <- object
// PROTOTYPAL INHERITANCE / or DELEGATION!!!!!
// = All objects in JS are linked to a prototype object.
// The protototype object contains methods and properties that are linked the that prototype. Instance inherited from the class.

// Example:
// const num = [1, 2, 3];
// num.map(v => v * 2);
//
// Array.prototype is the prototypeo of all array objects we create in JS. Therefore, all arrays have access to the map method.

// How to use OOP in js?
// 1. Constructor functions - technique to create objects from a function.
// 2. ES6 Classes - 'syntetic sygar' behind the scenes, ES6 work exactly like constructor function. ES
// 3. Object.create() - the easiest and most straightforward way of linking an object to a prototype object.



// -------------- Construction function
// but the arrow functions would NOT work as a function constructur

// !!!! Never create method in consturctor function!!!!!!!
const Person = function(firstName, birthYear){
    console.log(this);
    this.firstName = firstName; // property
    this.birthYear = birthYear; // property

    // Never do this!!!!!!!!!!!!!
    // this.calcAge = function(){
    //     console.log(2032-23)
    // }
}

new Person('Jonas', 1991); // Call the function with 'new' operator
// 1. New {} object was created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Mathilda', 2017);
const jack = new Person('Jack', 1975);

// In classical OOP an object, created from a class is called 'an instance'.
// In js we didn't create a classed, but we created an object from a constructur classes.

// console.log('jonas' instanceof Person);
console.log(jack instanceof Person); // True



// ================== Prototypes:
// 1. Each and every function in js has a property called 'prototype'

Person.prototype.calcAge = function(){
    console.log(234 - this.birthyear);
}

jack.calcAge(); // it works because of prototype inheritance

console.log(jack.__proto__);
console.log(jack.__proto__ === Person.prototype);

console.log("1 = ", Person.prototype.isPrototypeOf(jack)); // true
console.log("2 = ", Person.prototype.isPrototypeOf(matilda)); // true
console.log("3 = ", Person.prototype.isPrototypeOf(Person)); // false

// .prototype = prototype Of linked objects!!!!
// So person.prototype is NOT a prototype of person!!!!

jonas.propertie.species = 'Homo Sapiens';
jonas.pasOwnProperty('species');


// Prototype chain - similar to the scope chain, but with objects.