const school = {
  teachers: [
    {
      id: 1,
      name: "Pinchas",
      subjects: ["chemistry", "biology", "physics"],
      students: [],
      capacityLeft: 3,
    },
    {
      id: 2,
      name: "Williams",
      subjects: ["history", "ethics"],
      students: [],
      capacityLeft: 2,
    },
  ],
  students: [
    {
      id: 10,
      name: "Jennifer",
      age: 20,
    },
    {
      id: 11,
      name: "Howard",
      age: 23,
    },
    {
      id: 12,
      name: "Old-Timmy",
      age: 86,
    },
    {
      id: 13,
      name: "Houston",
      age: 21,
    },
  ],
  findPerson(type, id) {
    return this[type].find((person) => person.id === id);
  },
  assignStudent(id, subject) {
    const student = this.students.find((student) => student.id === id);
    const studentName = student.name;
    const availableTeacher = this.teachers.find(
      (teacher) =>
        teacher.subjects.includes(subject) && teacher.capacityLeft > 0
    );
    if (!availableTeacher) {
      console.log(`Sorry, no available teachers left`);
      return;
    }
    if (availableTeacher.students.includes(studentName)) {
      console.log(`This student is already assigned to this teacher`);
    } else {
      availableTeacher.students.push(studentName);
      availableTeacher.capacityLeft -= 1;
    }
  },
  assignTeachersSubject(teachersID, subject) {
    const teacher = this.teachers.find((teacher) => teacher.id === teachersID);
    if (teacher.subjects.includes(subject)) {
      console.log(`The teacher already has this subject`);
    } else {
      teacher.subjects.push(subject);
    }
  },
  deleteStudentFromTeacher(teachersID, studentID) {
    const teacher = this.teachers.find((teacher) => teacher.id === teachersID);
    const student = this.students.find((student) => student.id === studentID);
    if (teacher.students.includes(student.name)) {
      teacher.students.splice(0, 1, student.name);
      console.log(teacher.students);
    } else {
      console.log(`This student is not assigned to this teacher`);
    }
  },
};
// 1)
//console.log(school.findPerson("students", 13));

// 2)
school.assignStudent(10, "biology");
school.assignStudent(11, "biology");
// school.assignStudent(12, "biology");
// school.assignStudent(13, "biology");
// console.log(school.teachers[0].students);

//3)
// school.assignTeachersSubject(1, "computer science");
// console.log(school.teachers);

// 4)
school.deleteStudentFromTeacher(1, 10);
// console.log(school.teachers);
