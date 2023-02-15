class Cat {
    constructor(color, age) {
        this.color = color;
        this.age = age;
        this.legsCount = 4;
    }

    speak() {
        console.log("Meow!");
    }
}

class Lion extends Cat {
    speak() {
        super.speak();
    }
}
Lion.prototype.speak();