class oneClass {
    plus(a, b) {
        return a + b
    }
}

class twoClass extends oneClass {
    plus(a, b, c, d) {
        return super.plus(super.plus(a, b), super.plus(c, d))
    }
}

const x = new oneClass()
const y = new twoClass()

console.log(y.plus(1, 2, 3, 4));