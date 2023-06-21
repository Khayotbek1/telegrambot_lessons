class Student {
    constructor(name, degree) {
        this.name = name;
        this.degree = degree;
    }

    get info() {
        return [this.name, this.degree]
    }
    // get guruhlab oladi

    set editDegree(degree) {
        this.degree = this.degree
        return degree
    }

    //set o'zgartirish kiritadi
}

const hayot = new Student('Hayot', 'student')

hayot.editDegree = 'Master'

console.log(hayot.degree);