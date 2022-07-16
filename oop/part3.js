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

// =================== Inheritance between Classes: Constructor function
const Person1 = function(firstName,  birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
}

Person1.prototype.calcAge = function(){
    console.log(2037 - this.birthYear);
}

const Student = function(firstName, birthYear, course){
    Person1.call(this, firstName, birthYear);
    this.firstName = firstName;
    this.birthYear = birthYear;
    this.course = course;
}

Student.prototype.introduce = function(){
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();


console.log(mike.__proto__);
console.log(mike.__proto__.___proto__);


console.log(mike instanceof Student);


