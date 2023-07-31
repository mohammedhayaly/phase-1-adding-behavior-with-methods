class Cat {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  speak() {
    return `${this.name} says meow!`;
  }
}

class Dog {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  speak() {
    return `${this.name} says woof!`;
  }
}

class Bird {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  speak() {
    if (this.sex === "male") {
      return `It's me! ${this.name}, the parrot!`;
    } else {
      return `${this.name} says squawk!`;
    }
  }
}

// Test the classes and their methods
const fluffy = new Cat("Fluffy", "female");
console.log(fluffy.speak()); // Output: "Fluffy says meow!"

const rex = new Dog("Rex", "male");
console.log(rex.speak()); // Output: "Rex says woof!"

const polly = new Bird("Polly", "female");
console.log(polly.speak()); // Output: "Polly says squawk!"

const charlie = new Bird("Charlie", "male");
console.log(charlie.speak()); 