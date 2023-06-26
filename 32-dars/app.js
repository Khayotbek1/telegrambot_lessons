class Car {
    constructor() {
        if (this.constructor === Car) {
            throw new Error('It is parent class')
        }
    }

    run() {
        console.log('Get started');
    }
}

class Sedan extends Car {
    run(a, b) {
        return a + b
    }
}

const nexia = new Sedan()

console.log(nexia.run(1, 2));

