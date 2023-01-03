export default function updateStudentGradeByCity(students, city, newGrades) {
  if (Array.isArray(students)) {
    return students.filter((student) => student.location === city)
      .map((student) => {
        const newStudent = student;
        newStudent.grade = 'N/A';
        for (const grade of newGrades) {
          if (grade.studentId === newStudent.id) {
            newStudent.grade = grade.grade;
          }
        }
        return newStudent;
      });
  }
  return [];
}
