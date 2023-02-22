/* eslint no-underscore-dangle: ["error", {"allow": ["_currency", "_amount"] }] */

export default class Pricing {
  constructor (amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount () {
    return this._amount;
  }

  set amount (amount) {
    if (typeof amount === 'number') {
      this._amount = amount;
    } else {
      throw new TypeError('Amount must be a string');
    }
  }

  get currency () {
    return this._currency;
  }

  set currency (currency) {
    if (typeof currency === 'object') {
      this._currency = currency;
    } else {
      throw new TypeError('Currency must be a string');
    }
  }

  displayFullPrice () {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  static convertPrice (amount, conversionRate) {
    return conversionRate * amount;
  }
}
