export default function updateUniqueItems(yourMap) {
  for (const [key, value] of yourMap) {
    if (value === 1) {
      try {
        yourMap.set(key, 100);
      } catch (error) {
        throw new Error('Cannot process');
      }
    }
  }
  return yourMap;
}
