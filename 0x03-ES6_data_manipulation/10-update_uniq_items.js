export default function updateUniqueItems(yourMap) {
  if (Object.getPrototypeOf(yourMap) !== Map.prototype) {
    throw new Error('Cannot process');
  }
  for (const [key, value] of yourMap) {
    if (value === 1) {
      yourMap.set(key, 100);
    }
  }
  console.log(typeof yourMap);
  return yourMap;
}
