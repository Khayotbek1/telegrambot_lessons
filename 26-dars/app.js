// let matem = {
//     initNumber: 4,
//     plus: () => matem.initNumber++,
//     minus: (a, b) => a - b,
//     multiply: (a, b) => a * b
// }
// console.log(matem.plus());
// console.log(matem.multiply(5, 2));

class Car {
    constructor(name) {
        this.name = name
    }

    run() {
        console.log(this.name + ' Started');
    }
}

let gentra = new Car('Gentra')
let nexia = new Car('Nexia')

gentra.run()
nexia.run()