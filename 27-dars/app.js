
class Animal {
    constructor(name, sound) {
        this.name = name
        this.sound = sound
    }

    speak() {
        console.log(this.sound);
    }

}

class Birds extends Animal {
    fly() {
        console.log('is fly');
    }
}

class Reptiles extends Animal {
    poisonous() {
        console.log('Yes it is poisonous');
    }
}

const cat = new Animal('Cat', 'Meow');
const dog = new Animal('dog', 'WoW');
const eagle = new Birds('eagle', 'br');
const snake = new Reptiles('Snake', 'Fishshsh')

snake.poisonous()
cat.speak()
eagle.fly()