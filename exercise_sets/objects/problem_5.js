function createStudent(name, year) {
  return {
    name: name,
    year: year,
    courses: [],
    info: function() {
      console.log(`${this.name} is a ${this.year} year student`);
    },

    listCourses: function() {
      return this.courses;
    },

    addCourse: function(course) {
      this.courses.push(course);
    },

    addNote: function(courseCode, note) {
      let course = this.courses.filter(course => {
        return course.code === courseCode;
      })[0];

      if (course) {
        if (course.note) {
          course.note += `; ${note}`;
        } else {
          course.note = note;
        }
      }

    },

    viewNotes: function() {
      this.courses.forEach(course => {
        if (course.note) {
          console.log(`${course.name}: ${course.note}`);
        }
      });
    },

    updateNote: function(courseCode, note) {
      let course = this.courses.filter(course => {
        return course.code === courseCode;
      })[0];

      if (course) {
        course.note = note;
      }
    },
  };
}

function createSchool() {
  return {
    students: [],

    addStudent: function(name, year) {
      let validYears = ['1st', '2nd', '3rd', '4th', '5th'];
      if (!validYears.includes(year)) {
        console.log('Invalid Year');
      } else {
        let newStudent = createStudent(name, year);
        this.students.push(newStudent);
        return newStudent;
      }
    },

    enrollStudent: function(student, course) {
      student.addCourse(course);
    },

    addGrade: function(student, code, grade) {
      let course = student.courses.filter(course => course.code === code)[0];
      
      if (course) {
        course.grade = grade;
      }
    },

    getReportCard: function(studentObj) {
      let student = this.students.filter(person => {
        return person.name === studentObj.name;
      })[0];

      for (let course of student.courses) {
        if (!course.grade) {
          course.grade = 'In Progress';
        }
        console.log(`${course.name}: ${course.grade}`);
      }
    },

    courseReport: function(courseName) {
      let enrolledStudents = this.students.filter(student => {
        return student.courses.some(course => {
          return course.name === courseName;
        });
      });
      debugger;

      let grades = [];

      if (enrolledStudents.length) {
        console.log(`=${courseName} Grades=`);
        enrolledStudents.forEach(student => {
          student.courses.forEach(course => {
            if (course.name === courseName && course.grade) {
              grades.push(course.grade);
              console.log(`${student.name}: ${course.grade}`);
            }
          });
        });
        console.log('---');
        console.log(this.getCourseAverage(grades));
      } else {
        console.log(undefined);
      }
    },

    getCourseAverage: function(grades) {
      let sum = grades.reduce((acc, elem) => acc + elem, 0);
      let average = Math.floor(sum / grades.length);
      return `Course Average: ${average}`;
    }
  }
}

let school = createSchool();
let foo = school.addStudent('foo', '3rd');
let bar = school.addStudent('bar', '1st');
school.enrollStudent(foo, { name: 'Math', code: 101, grade: 95, });
school.enrollStudent(foo, { name: 'Advanced Math', code: 102, grade: 100});
school.enrollStudent(bar, { name: 'Advanced Math', code: 102, grade: 90});
school.courseReport('Advance');

