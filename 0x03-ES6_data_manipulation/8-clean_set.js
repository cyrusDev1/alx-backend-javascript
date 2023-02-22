export default function cleanSet (set, startString) {
  if (startString === '' || typeof startString !== 'string') { return ''; }
  return [...set].filter((el) => el.startsWith(startString)).map((ele) => {
    if (typeof ele === 'string') {
      return ele.slice(startString.length);
    }
    return false;
  }).join('-');
}
