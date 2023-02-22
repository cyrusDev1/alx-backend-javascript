export default function createIteratorObject (report) {
  const arrReport = Object.values(report.allEmployees);
  const temp = [];
  for (const list of arrReport) {
    for (const value of list) {
      temp.push(value);
    }
  }
  return temp;
}
