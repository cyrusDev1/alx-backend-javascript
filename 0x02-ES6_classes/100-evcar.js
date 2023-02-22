/* eslint no-underscore-dangle: ["error", {"allow": ["_range", "_color", "_brand", "_motor"] }] */
import Car from './10-car';

export default class EVCar extends Car {
  constructor (brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar () {
    const Obj = super.constructor;
    return new Obj();
  }
}
