const secureBooking = function(){
    let passengerCount = 0;

    return function(){
        passengerCount++;
        console.log(passengerCount);
    }
}

const boooker = secureBooking();

// the hardest to understand???

// The scope chaing of the execution contex looks like this:
// 1. secureBooking() EC
// 2. Global EC

const secureBooking1 = function(){
    let passengerCount = 0;
    console.log("passengers count here = ", passengerCount);

    return function(){
        passengerCount++;
        console.log(`${passengerCount} passengers.`);
    };
};

const booker1 = secureBooking1();

// ------ closures
// !!!!!!!
// Any function always have access to the execution context in which the function was created!!! So this function was created/born in the secureBooking() context which was popped off the stack prevously.


// So the function always have access to the execution context in which it was created. Even after the execution context has gone!!!! So the closure is this variable environment attached for the function. Closures.


// The function attemts to increase the passenger count variable. However this variable is not in the current scope. So the closure has priority in the scope chain.


// Closure - is the closed over VARIABLE ENVIRONMENT of the execution context IN WHICH THE FUNCTION WAS CREATED, even AFTER that execution context is gone.

// less formal:
// Closure - gives a function access to all the variables of its parent function, even after that parent function has returned. The function keeps a reference to its outer scope, which preserve the scope chain thoughout time.

// Closure - it makes sure that a function doesn't loose connection to variable that existed at the function's birth place.

// A closure - like a person who doesn't lose connection to his hometown. A person is a function, a hometown is a function's parents' scope and a function then doesn't lose connection to its parent scope.

// Closure - a function has a backpack which its carry arount whenever it goes. The backpack contains all the variables that were present in the environment in which the function was created then whenever variables were not found js will check them in backpack.

// JS does completely automathically closures!!! Closures - internal property of the function!!!!!

console.dir(booker);


let f;
const g = function(){
    a = 23; // a variable is inside of backpack of a function

    const f = function(){
        console.log(a * 2);
    }
}
const h = function(){
    const b = 777;

    f = function(){
        console.log(b * 2);
    }
}

g();
f();

h();
f();


// Example3, timer:
const boardPassengers = function(n, wait){
    const perGroup = n / 3;

    setTimeout(function(){
        console.log(`We are now boarding all ${n} passengers.`);
        console.log(`There are 3 groups each with ${perGroup}`);
    }, wait = 1000);

    console.log(`Will start boarding in ${wait}`)
}

// setTimeout(function(){
//     console.log('TIMER');
// }, 1000);


boardPassengers(100, 3);


// Let's prove that closures has priorities over the scope chain:
const perGroup = 1000;
boardPassengers(100, 3);