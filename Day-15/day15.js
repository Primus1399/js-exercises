// Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal {
    constructor(age, color, legs) {
        this.age = age;
        this.color = color;
        this.legs = legs
    }

    get getAge() {
        return this.age
    }
    description() {
        console.log(`The animal's age is ${this.age}. It's color is ${this.color}. It has ${this.legs} legs.`)
    }
}

// Create a Dog and Cat child class from the Animal Class.
class Dog extends Animal {
    constructor(age, color, legs) {
    super(age, color, legs)
    }
}

// Override the method you create in Animal class
class Cat extends Animal {
    constructor(name, age, color, legs) {
    super(age, color, legs)
    this.name = name;
    }
    description() {
        console.log(`My cat's name is not ${this.name}. My pet is not ${this.age} years old. Its color is not ${this.color}. But it does have ${this.legs} legs.`)
    }
}