class Account{
    // 1). defined Public fields(instances):
    locale = navigator.language;


    // 2). Private fields:
    #movements = [];

    constructor(owner, currency, pin){
        this.owner = owner;
        this.currency = currency;

        // protected property:
        this.#movements = [];
        this._pin = pin;

        this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}`);
    }

    // Public interface:
    getMovements(){
        return this.#movements;
    }

    deposit(val){
        this._movements.push(val);
        return this;
    }

    withdraw(val){
        this.deposit(-val);
        return this;
    }

    _approveLoan(val){
        return true;
    }

    requestLoan(val){
        if(this._approveLoan(val)){
            this.deposit(val);
            console.log(`Loan approved!`);
        }
        return this;
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

// Chaining methods:
acc.deposit(300).deposit(500).withdraw(35);