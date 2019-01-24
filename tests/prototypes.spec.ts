import { expect } from "chai";
import "mocha";

import { Car, Truck } from "../src/prototypes";
import { Car as ClassCar } from "../src/prototypes/Car";
import { Truck as ClassTruck } from "../src/prototypes/Truck";

const carVendor = "BMW";
const carInteriorColor = "red";
const truckVendor = "DAF";
const numberOfCarriages = 5;

const BMW = new Car(carVendor, carInteriorColor);
const DAF = new Truck(truckVendor, numberOfCarriages);
const BMWClass = new ClassCar(carVendor, carInteriorColor);
const DAFClass = new ClassTruck(truckVendor, numberOfCarriages);

describe("Testing object prototypal inheritance", () => {
  it("should have honk method on a Vehicle class that returns vendor", () => {
    expect(BMW.honk()).to.equal(carVendor);
    expect(BMWClass.honk()).to.equal(carVendor);
  });
  it("should have interiror color defined for the Car", () => {
    expect(BMW.interiorColor).to.eq(carInteriorColor);
    expect(BMWClass.interiorColor).to.eq(carInteriorColor);
  });
  it("should have honk method on Truck class that returns vendor with some info", () => {
    expect(DAF.honk()).to.equal(
      `This is a ${truckVendor} truck with ${numberOfCarriages} carriages`
    );
    expect(DAFClass.honk()).to.equal(
      `This is a ${truckVendor} truck with ${numberOfCarriages} carriages`
    );
  });
  it("car should inherit start() method from base Vehicle class", () => {
    expect(BMW.start()).to.eq(`START the ${carVendor}`);
    expect(BMWClass.start()).to.eq(`START the ${carVendor}`);
  });
  it("truck should inherit start() method from base Vehicle class", () => {
    expect(DAF.start()).to.eq(`START the ${truckVendor}`);
    expect(DAFClass.start()).to.eq(`START the ${truckVendor}`);
  });
});
