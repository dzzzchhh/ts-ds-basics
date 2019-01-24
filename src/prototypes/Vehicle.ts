/**
 * Base Vehicle class
 *
 * @since 1.0.0
 * @abstract
 * @class
 */
export abstract class Vehicle {
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
  protected abstract honk();
}
