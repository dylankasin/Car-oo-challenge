//creating a class to reference called Vehicle
class Vehicle {
    constructor(make, model, year){//creating parameters that can be referenced using make, model, year
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
        return "Beep.";
    }

    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
}

let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
myFirstVehicle.toString(); // "The vehicle is a Honda Monster Truck from 1999."

class Car extends Vehicle {//extension of the vehicle class which is car and has 4 wheels as a parameter
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle {//extension of the vehicle class which has a parameter of only having 2 wheels
    constructor(make, model, year){
       super(make, model, year);
       this.numWheels = 2; 
    }

    revEngine() {//adding a method to the motorcycle class that returns "vroom"
        return "Vroom!";
    }
}

//creating garage class that accepts a capacity that can have vehicles added as long as they are actually vehicles and are <= the capacity
class Garage {
    constructor(capacity){
        this.vehicles = [];
        this.capacity = capacity;
    }

    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
            return "Only vehicles are allowed in here";
        }
        if (this.vehicles.length >= this.capacity) {
            return "Sorry, we're full";
        }
        this.vehicles.push(newVehicle);
        return "Vehicle added!";
    }
}