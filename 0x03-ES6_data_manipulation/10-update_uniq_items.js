export default function updateUniqueItems(yourMap) {
  for (const [key, value] of yourMap) {
    if (value === 1) {
      yourMap.set(key, 100);
    }
  }
  return yourMap;
}
