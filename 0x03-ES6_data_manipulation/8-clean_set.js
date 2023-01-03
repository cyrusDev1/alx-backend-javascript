export default function cleanSet(set, startString) {
  if (startString === '') { return ''; }
  return [...set].filter((el) => el.startsWith(startString)).map((el) => el.slice(startString.length)).join('-');
}
