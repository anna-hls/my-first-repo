function Triangular(a = 3, b = 4, c = 5) {
    return { a, b, c };
}

const defaultTriangular = Triangular();
const customTriangular1 = Triangular(7, 8, 9);
const customTriangular2 = Triangular(9, 12, 15);

console.log("Default Triangular:", defaultTriangular);
console.log("Custom Triangular 1:", customTriangular1);
console.log("Custom Triangular 2:", customTriangular2);

function PiMultiplier(number) {
    return function() {
        return Math.π * number;
    }
}

const multiplyPiBy2 = PiMultiplier(2);
const multiplyPiBy2Over3 = PiMultiplier(2/3);
const dividePiBy2 = PiMultiplier(1/2);

console.log("Multiplying π by 2:", multiplyPiBy2());
console.log("Multiplying π by 2/3:", multiplyPiBy2Over3());
console.log("Dividing π by 2:", dividePiBy2());

function Painter(color) {
    return function(object) {
        if (object && object.type !== undefined) {
            console.log("Color:", color);
            console.log("Object type:", object.type);
        } else {
            console.log("No 'type' property occurred!");
        }
    }
}

const PaintBlue = Painter('blue');
const PaintRed = Painter('red');
const PaintYellow = Painter('yellow');

const object1 = { maxSpeed: 280, type: "Sportcar", color: "magenta" };
const object2 = { type: "Truck", "avg speed": 90, "load capacity": 2400 };
const object3 = { maxSpeed: 180, color: "purple", isCar: true, loadCapacity: 2400 };

PaintBlue(object1);
PaintRed(object2);
PaintYellow(object3);
