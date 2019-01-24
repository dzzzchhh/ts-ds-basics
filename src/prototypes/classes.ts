/**
 * Base Vehicle class
 *
 * @since 1.0.0
 * @abstract
 * @class
 */
abstract class Vehicle {
  /**
   * Create a new vehicle
   *
   * @since 1.0.0
   * @param {string} vendor
   */
  protected constructor(public vendor: string) {}

  /**
   * Starts the vehicle
   *
   * @since 1.0.0
   * @methodOf Vehicle
   * @returns {string} Result of starting the Vehicle
   */
  public start() {
    return `START the ${this.vendor}`;
  }

  /**
   * Blueprint for the honk() method
   *
   * @since 1.0.0
   * @abstract
   */
  public abstract honk();
}

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
  honk() {
    return `This is a ${this.vendor} truck with ${
      this.numberOfCarriages
    } carriages`;
  }
}
