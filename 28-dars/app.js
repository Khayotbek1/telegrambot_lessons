class Student {
    constructor(name, degree) {
        this.name = name
        this.degree = degree
    }

    get info() {
        return [this.name, this.degree]
    }

    set editName(name) {
        this.name = name
        return name
    }
}

const hayot = new Student('Hayot', 'Master')

hayot.editName = 'Hayotbek'

console.log(hayot);