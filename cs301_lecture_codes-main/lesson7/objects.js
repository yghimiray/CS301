// Spaces and breaks are not important
let student={
    name: "John",
    id: 123,
    course_completed: ['CS301', 'CS303'],
    is_accelerated_track: true,
}

let name = student.name
console.log(name); // John

let first_course = student.course_completed[0];
console.log(first_course); // CS301

student.name = "Jack";
student.is_accelerated_track = false;
console.log(student); //{name: 'Jack,...,is_accelerated_track:false}
