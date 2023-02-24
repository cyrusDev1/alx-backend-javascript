function calculateNumber (a, b) {
  if (Number.isNaN(Number(a)) || Number.isNaN(Number(b))) { throw TypeError('Parameters must be numbers'); }
  return Math.round(Number(a)) + Math.round(Number(b));
}

module.exports = calculateNumber;
