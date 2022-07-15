// OOP with JS
// - Prototype inheritance on built-in objects

//

// ===================== Classes in ES6

// ------- class expression
const PersonCl = class {}

// ------- class declaration
class PersonCl{
    constructor(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    // calcAge(){
    //     console.log(2037 - this.birthYear);
    // }
    // or use getter:

    get age(){
        return 2037 - this.birthYear;
    }

    set fullName(name){
        if(name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name`);

    }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);



// ============= Getters and setters
// Can be very usefull for data validation:
const account = {
    owner: 'jonas',
    movements: [200, 530, 120, 300],
    get latest(){
      return this.movemens.slice(-1).pop();
    }

    set latest(mov){
        this.movements.push(mov);
    }

    get age(){}
    return 2037 - this.birthYear;
}

console.log(account.latest);
account.latest = 50;

const walter = new PersonCl('Walter White', 1965);


// ------- static methods:
// ------- class expression
// const Person = class {}

// ------- class declaration
class Person{
    constructor(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

// instance method:
    // calcAge(){
    //     console.log(2037 - this.birthYear);
    // }
    // or use getter:

    get age(){
        return 2037 - this.birthYear;
    }

    set fullName(name){
        if(name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name`);

    }
    static hey(){
        console.log('Hey there!');
        console.log(this);
    }
}


const jonas = new Person('Jonas', 1991);
console.log('Jonas');

const mathilda = new Person('Mathilda', 2017);
const jack = new Person('Jack', 1975);

console.log(this);
Person.hey();

// --------- Prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function(){
    console.log(2037 - this.birthYear);
}

jonas.calcAge();



