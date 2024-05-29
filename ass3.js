// //              assignment:3 company Product Catalog
// // Learning Objective: Implement data structures in TypeScript to represent and manage product
// // information.
// // Task: Create a program to represent a product catalog using an array and perform basic queries.
// // 1. Define an array named inventory to store product information.
// // 2. Create three separate objects, each representing a product, with properties like name,
// // model, cost, and quantity.
// // 3. Add these product objects to the inventory array using an appropriate array method.
// // 4. Access and log the quantity property of a specific product (e.g., third product) in the
// // inventory array.
// // 5. Explore adding and accessing more elements within the inventory array to understand
// // how to manage product data.
var inventory = [];
var product1 = {
    name: "Maria.b",
    model: "Eid e Bahar",
    cost: 200000,
    quantity: 60
};
var product2 = {
    name: "Gul Ahmed",
    model: "Basant Bhar",
    cost: 400000,
    quantity: 70
};
var product3 = {
    name: "khhadi",
    model: "Baqr e Eid",
    cost: 700000,
    quantity: 80
};
inventory.push(product1, product2, product3);
console.log(inventory);
console.log(inventory[2].quantity);
console.log(inventory[0].cost);
console.log(inventory[1].name);
// // // 3. Add these product objects to the inventory array using an appropriate array method.
// inventory.push(product,product2,product3)
// console.log(inventory);
// console.log(inventory[2].quantity);
// console.log(inventory[0].cost);
// console.log(inventory[1].name);
// // ********************************Assignment 4: Student List Organizer************************************************************************
// // Learning Objective: Get comfortable with data structures (objects and arrays) and basic
// // functions in TypeScript.
// // Tasks:
// // 1. Student Data: The provided code defines an interface named Student that describes
// // student information like name, senior status (true/false), and whether they've completed
// // their assignments (true/false).
// // o Imagine this as a template for organizing student details.
// // 2. Student List:
// // o An array named students stores information about several students using the
// // Student template. Think of this array as your class list!
// // 3. Find Senior Students with Assignments (Optional):
// // o The code (not shown here) has a function that might find students who are seniors
// // and have completed their assignments.
// // o Can you guess why this information might be helpful?
// // 4. Class List Update:
// // o Imagine you need to update your class list! The code (not shown here) might have
// // a function that removes students who haven't completed their assignments
// // (assuming only seniors are responsible).
// // o Can you think of any reasons why this might be useful (consider limitations)?
// // 1. Student Data: The provided code defines an interface
// interface Student{
//     name:string,
//     seniorStatus:boolean,
//     completeAssignments:boolean,
// }
// // // 2. Student List:
// let students: Student[] = [
//     {name: "Asfa", seniorStatus: true, completeAssignments: true},
//     {name: "Malaiqa", seniorStatus: false, completeAssignments: false},
//     {name: "Asad", seniorStatus: false, completeAssignments: true},
//     {name: "Qasim", seniorStatus: true, completeAssignments: true},
//     {name: "Hadi", seniorStatus: false, completeAssignments:false}
// ];
// console.log(students);
// // // 3. Find Senior Students with Assignments 
// function seniorStudents(students:Student[]) {
//     return students.filter(student=>student.seniorStatus && student.completeAssignments===true)    
// }
// console.log(seniorStudents(students));
// // // 4. Class List Update and removes students who haven't completed their assignments
// function removeStudents(student:Student[]) {
//     return students.filter(student=>student.completeAssignments===false)
// }
// console.log(removeStudents(students));
