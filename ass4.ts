//    Assignment 4: Student List Organizer
//  Learning Objctive: Get comfortable with data structures (objects and arrays) and basic
//  functions in TypeScript.
//  Tasks:
//  1. Student Data: The provided code defines an interface named Student that describes
//  student information like name, senior status (true/false), and whether they've completed
//  their assignments (true/false).
//  o Imagine this as a template for organizing student details.
//  2. Student List:
//  o An array named students stores information about several students using the
//  Student template. Think of this array as your class list!
//  3. Find Senior Students with Assignments (Optional):
//  o The code (not shown here) has a function that might find students who are seniors
// and have completed their assignments.
// o Can you guess why this information might be helpful?
// 4. Class List Update:
//  o Imagine you need to update your class list! The code (not shown here) might have
//  a function that removes students who haven't completed their assignments
//  (assuming only seniors are responsible).
//  o Can you think of any reasons why this might be useful (consider limitations)?

//  1. Student Data:
interface Student{
    name:string,
    seniorStatus:boolean,
    completeAssignment:boolean,
}
// 2. student list
let students: Student[]=[
 {name:"nida",seniorStatus:true,completeAssignment:true},
 {name:"nijah",seniorStatus:true,completeAssignment:true},
 {name:"zinab",seniorStatus:true,completeAssignment:true},
 {name:"saba",seniorStatus:true,completeAssignment:false},
 {name:"ali",seniorStatus:true,completeAssignment:false},
];
console.log(students);

// 3. Find Senior Students with Assignments 
function seniorStudents(students:Student[]) {
   return students.filter(student=>student.seniorStatus && student.completeAssignment===true)    
}
console.log(seniorStudents(students));

// 4. removes students who haven't completed their assignments
 function removeStudents(student:Student[]) {
     return students.filter(student=>student.completeAssignment===false)
 }
 console.log(removeStudents(students));
