import { expect } from "chai";
import "mocha";

import { Truck, Car } from "./";
import { Truck as ClassTruck, Car as ClassCar } from "./classes";

const carVendor = "BMW";
const carInteriorColor = "red";
const truckVendor = "DAF";
const numberOfCarriages = 5;

const BMW = new Car(carVendor, carInteriorColor);
const DAF = new Truck(truckVendor, numberOfCarriages);
const BMWClass = new ClassCar(carVendor, carInteriorColor);
const DAFClass = new ClassTruck(truckVendor, numberOfCarriages);

describe("Testing object prototypal inheritance", function() {
  it("should have honk method on a Vehicle class that returns vendor", function() {
    expect(BMW.honk()).to.equal(carVendor);
    expect(BMWClass.honk()).to.equal(carVendor);
  });
  it("should have interiror color defined for the Car", function() {
    expect(BMW.interiorColor).to.eq(carInteriorColor);
    expect(BMWClass.interiorColor).to.eq(carInteriorColor);
  });
  it("should have honk method on Truck class that returns vendor with some info", function() {
    expect(DAF.honk()).to.equal(
      `This is a ${truckVendor} truck with ${numberOfCarriages} carriages`
    );
    expect(DAFClass.honk()).to.equal(
      `This is a ${truckVendor} truck with ${numberOfCarriages} carriages`
    );
  });
  it("car should inherit start() method from base Vehicle class", function() {
    expect(BMW.start()).to.eq(`START the ${carVendor}`);
    expect(BMWClass.start()).to.eq(`START the ${carVendor}`);
  });
  it("truck should inherit start() method from base Vehicle class", function() {
    expect(DAF.start()).to.eq(`START the ${truckVendor}`);
    expect(DAFClass.start()).to.eq(`START the ${truckVendor}`);
  });
});
