class Square {
    constructor(a) {
        this.a = a;
    }

    static help() {
        console.log("Квадрат — це чотирикутник, у якого всі сторони рівні і всі кути прямі.");
    }

    length() {
        console.log("Сума довжин сторін квадрата:", this.a * 4);
    }

    square() {
        console.log("Площа квадрата:", this.a ** 2);
    }

    info() {
        console.log("Інформація про квадрат:");
        console.log("Довжина сторони:", this.a);
        console.log("Сума довжин сторін:", this.a * 4);
        console.log("Площа:", this.a ** 2);
    }
}


class Rectangle extends Square {
    constructor(a, b) {
        super(a);
        this.b = b;
    }

    static help() {
        console.log("Прямокутник — це чотирикутник, усі кути якого прямі.");
    }

    length() {
        console.log("Сума довжин сторін прямокутника:", (this.a + this.b) * 2);
    }

    square() {
        console.log("Площа прямокутника:", this.a * this.b);
    }

    info() {
        console.log("Інформація про прямокутник:");
        console.log("Довжина:", this.a);
        console.log("Ширина:", this.b);
        console.log("Сума довжин сторін:", (this.a + this.b) * 2);
        console.log("Площа:", this.a * this.b);
    }
}


class Rhombus extends Square {
    constructor(a, alpha, beta) {
        super(a);
        this.alpha = alpha;
        this.beta = beta;
    }

    static help() {
        console.log("Ромб — це паралелограм, у якого всі сторони рівні.");
    }

        getAlpha() {
            return this.alpha;
        }
    
        setAlpha(value) {
            this.alpha = value;
        }
    
        getBeta() {
            return this.beta;
        }
    
        setBeta(value) {
            this.beta = value;
        }

    length() {
        console.log("Сума довжин сторін ромба:", this.a * 4);
    }

    square() {
        console.log("Площа ромба:", (this.a ** 2 * Math.sin(this.alpha * Math.PI / 180)) );
    }

    info() {
        console.log("Інформація про ромб:");
        console.log("Довжина сторони:", this.a);
        console.log("Тупий кут:", this.alpha);
        console.log("Гострий кут:", this.beta);
        console.log("Сума довжин сторін:", this.a * 4);
        console.log("Площа:", (this.a ** 2 * Math.sin(this.alpha * Math.PI / 180)) );
    }
}


class Parallelogram extends Rectangle {
    constructor(a, b, alpha, beta) {
        super(a, b);
        this.alpha = alpha;
        this.beta = beta;
    }

    static help() {
        console.log("Паралелограм — чотирикутник, протилежні сторони якого попарно паралельні, тобто лежать на паралельних прямих.");
    }

    length() {
        console.log("Сума довжин сторін паралелограма:", (this.a + this.b) * 2);
    }

    square() {
        console.log("Площа паралелограма:", this.a * this.b * Math.sin(this.alpha  * Math.PI / 180));
    }

    info() {
        console.log("Інформація про паралелограм:");
        console.log("Довжина:", this.a);
        console.log("Ширина:", this.b);
        console.log("Тупий кут:", this.alpha);
        console.log("Гострий кут:", this.beta);
        console.log("Сума довжин сторін:", (this.a + this.b) * 2);
        console.log("Площа:", this.a * this.b * Math.sin(this.alpha * Math.PI / 180));
    }
}

Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();

const square = new Square(8);
square.info();

const rectangle = new Rectangle(4, 6);
rectangle.info();

const rhombus = new Rhombus(7, 60, 120);
rhombus.info();

const parallelogram = new Parallelogram(3, 7, 45, 135);
parallelogram.info();
