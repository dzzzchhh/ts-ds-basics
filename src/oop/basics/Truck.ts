import { Vehicle } from "./Vehicle";

/**
 * General purpose Truck with user-defined number of cargo carriages
 *
 * @class
 * @extends Vehicle
 */

export class Truck extends Vehicle {
  constructor(public vendor: string, public numberOfCarriages: number) {
    super(vendor);
  }

  /**
   * Echo the information about a Truck
   *
   * @override
   * @method
   * @return {string} Information about truck vendor and number of carriages
   */
  public honk() {
    return `This is a ${this.vendor} truck with ${
      this.numberOfCarriages
    } carriages`;
  }
}
