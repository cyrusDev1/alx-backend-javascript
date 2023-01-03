export default function cleanSet(set, startString) {
  return [...set].filter((el) => el.startsWith(startString) && startString !== '').map((el) => el.slice(startString.length)).join('-');
}
