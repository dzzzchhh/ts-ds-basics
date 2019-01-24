abstract class Vehicle {
  protected constructor(public vendor: string) {}
  public start() {
    return `START the ${this.vendor}`;
  }
}

export class Car extends Vehicle {
  constructor(public vendor: string, public interiorColor: string) {
    super(vendor);
  }
  public honk() {
    return this.vendor;
  }
}

export class Truck extends Vehicle {
  constructor(public vendor: string, public numberOfCarriages: number) {
    super(vendor);
  }
  honk() {
    return `This is a ${this.vendor} truck with ${
      this.numberOfCarriages
    } carriages`;
  }
}
