const Car = function(make, speed){
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function(){
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h.`);
}

Car.prototype.brake = function(){
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h.`)
}

const EV = function(make, speed ,charge){
    Car.call(this.make, speed);
    this.charge = charge;
}
// We want the prototype property of EV inherit the prototype property of Car:
// link:
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function(chargeTo){
    this.charge = chargeTo;
}

EV.prototype.accelerate = function(){
    this.speed += 20;
    this.charge--;
    console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}}`);
}

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();


static hey(){
    console.log('Hey there!');
}




// ================== Inheritance between
// ---------------- ES6 clases
class StudentCl extends PersonCL(){
    constructor(fullName, birthYear, course){
        // Always needs to happen first!!!
        super(fullName, birthYear);
        this.course = course;
    }
    calcAge(){
        console.log('dsfasd');
    }
}

const martha = new StudentCL('Martha Jones', 2012);



// --------------- inheritance between Classes: object.create
const PersonProto = {
    calcAge(){
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
}

const steven = Object.create(PersonaProto);

const StudentProto = Object.create(StudentProto);
StudentProto.init = function(firstName, birthYear, course){
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
}
const jay = Object.create(StudentProto);
jay.init('Jay', 2018, 'Computer Science');
jay.introduce();


// ----------- Example:
class Account{
    constructor(owner, currency, pin){
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
        this.movements = [];
        this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}`);
    }

    deposit(val){
        this.movements.push(val);
    }

    withdraw(val){
        this.deposit(-val);
    }

    approveLoan(val){
        return true;
    }

    requestLoan(val){
        if(this.approveLoan(val)){
            this.deposit(val);
            console.log(`Loan approved!`);
        }
    }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// Public interface
acc1.deposit(250);
acc1.withdraw(-140);

console.log(acc1);

// --------------- Data incapsulation - to keep some methods and properties private in class.
class Account{
    constructor(owner, currency, pin){
        this.owner = owner;
        this.currency = currency;

        // protected property:
        this._movements = [];
        this._pin = pin;

        this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}`);
    }

    // Public interface:
    getMovements(){
        return this._movements;
    }

    deposit(val){
        this._movements.push(val);
    }

    withdraw(val){
        this.deposit(-val);
    }

    _approveLoan(val){
        return true;
    }

    requestLoan(val){
        if(this._approveLoan(val)){
            this.deposit(val);
            console.log(`Loan approved!`);
        }
    }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// Public interface
acc1.deposit(250);
acc1.withdraw(-140);

console.log(acc1);


// Private fields:
class Account{
    // 1). defined Public fields(instances):
    locale = navigator.language;


    // 2). Private fields:
    #movements = [];
    #pin;

    constructor(owner, currency, pin){
        this.owner = owner;
        this.currency = currency;

        // protected property:
        this.#movements = [];
        this.#pin = pin;

        this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}`);
    }

    // Public interface:
    getMovements(){
        return this.#movements;
    }

    deposit(val){
        this.#movements.push(val);
    }

    withdraw(val){
        this.deposit(-val);
    }

    _approveLoan(val){
        return true;
    }

    requestLoan(val){
        if(this._approveLoan(val)){
            this.deposit(val);
            console.log(`Loan approved!`);
        }
    }

    // Private methods: - are NOT available
    #approveLoan(val){
        return true;
    }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// Public interface
acc1.deposit(250);
acc1.withdraw(-140);

console.log(acc1.movements);


// !!!!! Class fields are NOT approved to be in js YET. So they partly work only for Chrome.
// Public fields
// Private fields
// Publice methods
// Private methods

