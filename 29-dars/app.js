class Student {
    constructor(name, age) {
        let _name = name
        let _age = age

        this.getName = () => _name
    }
}

const hayot = new Student('Khayotbek', 25)

console.log(hayot.getName());