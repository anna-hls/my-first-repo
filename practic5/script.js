var car1 = new Object();
car1.color = "black";
car1.maxSpeed = 182;
car1.driver = {
    name: "Anna-Sofia Halas",
    category: "C",
    personalLimitations: "No driving at night"
};
car1.tuning = true;
car1.numberOfAccidents = 0;

var car2 = {
    color: "white",
    maxSpeed: 333,
    driver: {
        name: "Anna-Sofia Halas",
        category: "B",
        personalLimitations: null
    },
    tuning: false,
    numberOfAccidents: 2
};

car1.drive = function() {
    console.log("I am not driving at night");
  };
  car1.drive();

car2.drive = function() {
    console.log("I can drive anytime");
  };
  car2.drive();


function Truck(color, weight, avgSpeed, brand, model) {
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;
}

Truck.prototype.AssignDriver = function(name, nightDriving, experience) {
    this.driver = {
      name: name,
      nightDriving: nightDriving,
      experience: experience
    };
};

Truck.prototype.trip = function() {
    if (!this.driver) {
        console.log("No driver assigned");
    } else {
        var message = "Driver " + this.driver.name;
        message += this.driver.nightDriving ? " drives at night" : " does not drive at night";
        message += " and has " + this.driver.experience + " years of experience";
        console.log(message);
    }
};

var truck1 = new Truck("black", 902, 77.3, "Mercedes", "E-Class");
var truck2 = new Truck("white", 735, 67.5, "Audi", "A4");

truck1.AssignDriver("Alice Walker", true, 11);
truck2.AssignDriver("Bob Harris", false, 3);

truck1.trip();
truck2.trip();  
