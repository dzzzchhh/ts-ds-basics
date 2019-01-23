function Vehicle(vendor: string) {
  this.vendor = vendor;
}

export function Car(vendor: string, interiorColor: string) {
  Vehicle.call(this, vendor);
  this.interiorColor = interiorColor;
}

Car.prototype.honk = function() {
  return this.vendor;
};

export function Truck(vendor: string, numberOfCarriages: number) {
  Vehicle.call(this, vendor);
  this.numberOfCarriages = numberOfCarriages;
}

Truck.prototype.honk = function() {
  return `This is a ${this.vendor} truck with ${
    this.numberOfCarriages
  } carriages`;
};
