function calculateNumber (type, a, b) {
  if (Number.isNaN(Number(a)) || Number.isNaN(Number(b))) { throw TypeError('Parameters must be numbers'); }
  switch (type) {
    case 'SUM':
      return Math.round(Number(a)) + Math.round(Number(b));
      break;
    case 'SUBTRACT':
      return Math.round(Number(a)) - Math.round(Number(b));
      break;
    case 'DIVIDE':
      if (Math.round(Number(b)) === 0) {
        return 'Error';
      }
      return Math.round(Number(a)) / Math.round(Number(b));
      break;
    default:
      break;
  }
}

module.exports = calculateNumber;
