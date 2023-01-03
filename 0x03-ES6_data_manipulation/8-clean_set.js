export default function cleanSet(set, startString) {
  if (startString === '' || typeof startString !== 'string') { return ''; }
  return [...set].filter((el) => el.startsWith(startString)).map((el) => {
    if (typeof el === 'string') return el.slice(startString.length);
  }).join('-');
}
