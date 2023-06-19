class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    speak() {
        console.log(this.sound);
    }

}

class Bird extends Animal {
    fly() {
        console.log('is Flying');
    }
}

const cat = new Animal('Cat', 'Meow')
const dog = new Animal('Dog', 'WoW')
const eagle = new Bird('Eagle', 'bru')

eagle.fly()