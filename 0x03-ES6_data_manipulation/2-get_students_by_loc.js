export default function getStudentsByLocation (students, city) {
  if (Array.isArray(students)) {
    return students.filter((element) => element.location === city);
  }
  return [];
}
