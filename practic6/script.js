class Square {
    constructor(a) {
        this.a = a;
    }

    static help() {
        console.log("Квадрат - це геометрична фігура з чотирма однаковими сторонами та кутами по 90 градусів.");
    }

    length() {
        console.log("Сума довжин сторін квадрата: ", this.a * 4);
    }

    square() {
        console.log("Площа квадрата: ", this.a ** 2);
    }

    info() {
        console.log("Характеристика квадрата:");
        console.log("- Довжина кожної сторони: ", this.a);
        console.log("- Сума довжин сторін: ", this.a * 4);
        console.log("- Площа квадрата: ", this.a * this._a);
    }
}