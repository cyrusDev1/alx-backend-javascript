/* eslint no-underscore-dangle: ["error", {"allow": ["_name", "_length", "_students"] }] */

export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(Name) {
    if (typeof Name === 'string') {
      this._name = Name;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get length() {
    return this._length;
  }

  set length(Length) {
    if (typeof Length === 'number') {
      this._length = Length;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  get students() {
    return this._students;
  }

  set students(Students) {
    if (typeof Students === 'object') {
      this._students = Students;
    } else {
      throw new TypeError('Students must be an array');
    }
  }
}
