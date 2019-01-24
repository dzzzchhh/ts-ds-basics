import { Vehicle } from "./Vehicle";

/**
 * Regular car
 *
 * @since 1.0.0
 * @class
 * @extends Vehicle
 */

export class Car extends Vehicle {
  /**
   * Create a new Car
   *
   * @since 1.0.0
   * @param {string} vendor
   * @param {string} interiorColor
   */
  constructor(public vendor: string, public interiorColor: string) {
    super(vendor);
  }

  /**
   * Echo the Car's vendor
   * @method
   * @override
   */
  public honk() {
    return this.vendor;
  }
}
