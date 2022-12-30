/* eslint no-underscore-dangle: ["error", {"allow": ["_color", "_brand", "_motor"] }] */
export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    return new this.constructor();
  }
}
