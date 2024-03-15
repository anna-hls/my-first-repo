function TriangleArea(base = 5, height = 4) {
    const area = 0.5 * base * height;
    return area;
}

console.log("Площа трикутника: ", TriangleArea(7, 3));

console.log("Площа трикутника з основою 3 і висотою 6:", TriangleArea(3, 6));

function Boat(color, maxSpeed, maxTonnage, brand, countryOfRegistration) {
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.maxTonnage = maxTonnage;
    this.brand = brand;
    this.countryOfRegistration = countryOfRegistration;
}

Boat.AssignCaptain = function(boat, name, yearsOfExperience, hasFamily) {
    boat.captain = {
        name: name,
        yearsOfExperience: yearsOfExperience,
        hasFamily: hasFamily
    };
};

class SimpleCircle {
    constructor(majorRadius) {
        this._majorRadius = majorRadius;
    }

    get majorRadius() {
        return this._majorRadius;
    }

    set majorRadius(value) {
        if (typeof value !== 'number' || value <= 0) {
            throw new Error('Radius must be a positive number');
        }
        this._majorRadius = value;
    }
}

class SimpleEllipse extends SimpleCircle {
    constructor(majorRadius, minorRadius) {
        super(majorRadius);
        this.minorRadius = minorRadius;
    }

    static calculateArea(a, b) {
        return Math.π * a * b;
    }
}

function SubGenerator(number) {
    return function (num) {
        return num - number;
    };
}




