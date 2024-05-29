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
 
let inventory:Product []=[];
 type Product= {
    name:string,
    model:string,
    cost:number,
    quantity:number
}
const product1:Product={
    name:"Maria.b",
    model:"Eid e Bahar",
    cost:200000,
    quantity:60
};
const product2:Product={
    name:"Gul Ahmed",
    model:"Basant Bhar",
    cost:400000,
    quantity:70
};
const product3:Product={
    name:"khhadi",
    model:"Baqr e Eid",
    cost:700000,
    quantity:80
};
inventory.push(product1,product2,product3);
console.log(inventory);
console.log(inventory[2].quantity);
console.log(inventory[0].cost);
console.log(inventory[1].name);