const PersonProto = {
    calcAge(){
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear){
        this.firstName = firstName;
    }
}

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthyear = 2002;
steven.calcAge();

sarah.init('Sarah', 1979); // not constructor, manual name of initializing object
