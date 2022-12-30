/* eslint no-underscore-dangle: ["error", {"allow": ["_size", "_location"] }] */
export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](hint) {
    if (hint == 'number') return `${this._size}`;
    if (hint == 'string') return `${this._location}`;
  }
}
