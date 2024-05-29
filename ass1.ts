//      Assigment:1 Building Your Friend List

//1. define an object named people, contaning an empty array called friends.

let people={
    friends:[] as Friend []
};

//2. creat three separate objects,each representing a friend,with properites like firstName,lastName,and id.

type Friend={
    firstName:string,
    lastName:string,
    id?:number
};

let friend1:Friend={
    firstName:"Nijah",
    lastName:"Naveed",
    id: 101
};
let friend2:Friend={
    firstName:"Zinab",
    lastName:"Junaid",
    id:202
};
let friend3:Friend={
    firstName:"Musfirah",
    lastName:"Farooq",
    id:303
};

//3. add these friends objects to the friends array within the people object.

people.friends.push(friend1, friend2, friend3);
console.log(people)

    
