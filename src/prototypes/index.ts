function Vehicle(vendor: string) {
  this.vendor = vendor;
}

Vehicle.prototype.start = function() {
  return "START";
};

export function Car(vendor: string, interiorColor: string) {
  Vehicle.call(this, vendor);
  this.interiorColor = interiorColor;
}

export function Truck(vendor: string, numberOfCarriages: number) {
  Vehicle.call(this, vendor);
  this.numberOfCarriages = numberOfCarriages;
}

Car.prototype = Object.create(Vehicle.prototype);
Truck.prototype = Object.create(Vehicle.prototype);

Car.prototype.honk = function() {
  return this.vendor;
};

Truck.prototype.honk = function() {
  return `This is a ${this.vendor} truck with ${
    this.numberOfCarriages
  } carriages`;
};
