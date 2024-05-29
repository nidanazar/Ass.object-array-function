//      Assigment:1 Building Your Friend List
//1. define an object named people, contaning an empty array called friends.
var people = {
    friends: []
};
var friend1 = {
    firstName: "Nijah",
    lastName: "Naveed",
    id: 101
};
var friend2 = {
    firstName: "Zinab",
    lastName: "Junaid",
    id: 202
};
var friend3 = {
    firstName: "Musfirah",
    lastName: "Farooq",
    id: 303
};
//3. add these friends objects to the friends array within the people object.
people.friends.push(friend1, friend2, friend3);
console.log(people);
