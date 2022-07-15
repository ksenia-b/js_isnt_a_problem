const calcAverageHumanAge = function(dogsAges){
    const humanAges = [];

    dogsAges.forEach(function(currEl, i, arr){
        humanAges.push(currEl <= 2 ? 2 * currEl : 16 + currEl * 4);

        console.log("arr = ", currEl);
        console.log("i = ", i);
        console.log("mov = ", arr);
    });

    // or let's use maps and instantly create new arr:
    lessAges = humanAges.map(function(currEl, i, arr){
        console.log("------ currEl = ", currEl);
        return currEl <= 2 ? 2 * currEl : 16 + currEl * 4;
    })
    console.log("or ---- lessAges = ", lessAges);

    // or let's simplify to arrow functions
    const calcAverageHumanAge = function(ages){
        const humanAges = ages.map(age => (age <= 2 : 2 * age : 16 * age * 4));
        const adults = humanAges.filter(age => age <= 18);
        const average = adults.reduce((acc, age, i , arr) => acc + age / arr.length, 0); // !!!! use here arr.length (it would be better)
    }

    console.log("humanAges = ", humanAges);

    lessAges = humanAges.filter(function(age){
        return age > 18;
    });


    console.log("lessAges = ", lessAges);
    sumAge = lessAges.reduce(function(accumulator, i, arr){
        console.log("accumulator = ", accumulator);
        console.log("i = ", i);
        console.log("arr = ", arr);
        return accumulator + i;
    });
    console.log("sumAge = ", sumAge);
    avgAge = sumAge / lessAges.length;
    console.log("avgAge = ", avgAge);

}

calcAverageHumanAge([5,2,4,1,15,8,3]);