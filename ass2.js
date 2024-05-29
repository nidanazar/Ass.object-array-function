// Assigment:2 Manipulating an Array:Rearraning Words
// Objective:
// Rearrange an array using array methods to form the sentence "I am a student of GIAIC".
// Steps:
// 1. Scrambled Array:
// * Start with an array of elements in a scrambled order, like:
// const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
// 2. Modify the Array:
// *Use methods like split(), join(), push(), pop(), shift(), and unshift() to:
// *Convert non-strings (booleans, numbers) to strings if needed.
// * Split elements into character arrays (optional).
// * Rearrange characters or elements in the desired order (modify original array or
// create temporary arrays).
// 3. Output the Result:
// * Use join() to combine elements back into a single string: "I am a student of GIAIC".
var rearrangedArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
rearrangedArray.length = 0;
rearrangedArray.push("I", "am", "a", "student", "of", "GIAIC");
console.log(rearrangedArray.join(' '));
var scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
scrambledArray.shift();
scrambledArray.splice(4, 1, "a GIAIC");
scrambledArray.splice(1, 3);
scrambledArray.unshift("I");
scrambledArray.pop();
scrambledArray.splice(2, 3, "student", "of");
console.log(scrambledArray.join(' '));
