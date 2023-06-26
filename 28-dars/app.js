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





class Cars {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    get info() {
        return [this.name, this.color];
    }

    set editColor(color) {
        this.color = color;
        return color;
    }

    set editName(name) {
        this.name = name;
        return name;
    }
}

const car = new Cars('bmw', 'black');

car.editName = 'audi';
car.editColor = 'white';
console.log(car);


