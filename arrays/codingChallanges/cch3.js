// or let's simplify to arrow functions
const calcAverageHumanAge = function (ages) {
    const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 * age * 4)).filter(age => age <= 18).reduce((acc, age, i, arr) => acc + age / arr.length, 0); // !!!! use here arr.length (it would be better)
    console.log("humanAges = ", humanAges);
}


calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);