'use strict';

checkDogs = function(dogsJulia, dogsKate){

    newDogsJulia = dogsJulia.splice(1, dogsJulia.length - 2);
    console.log("new dogs Julia = ", newDogsJulia);
    dogs = [...newDogsJulia, ...dogsKate];
    console.log("dogs = ", dogs);
    dogs.forEach(function(dog, i){
        let age = dog > 5 ? 'adult' : ' still a puppy';
        console.log(`Dog number ${i} is an ${age}, and is ${i},years old.`);
    })
}

checkDogs([3, 5, 2, 12, 7],  [4, 1, 15, 8, 3]);