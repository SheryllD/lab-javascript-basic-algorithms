console.log("I'm ready!");

// Iteration 1: Names and Input
let hacker1 = 'XXXX'
console.log(`The driver's name is ${hacker1}`); 

let hacker2 = 'YYYY'
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
// If (condition) { statement}
// else if (another condition) {statement}
// else if (another condition) {statement}
// else {statement}


let length_hacker1 = hacker1.length; 
let lenght_hacker2 = hacker2.length; 

if (length_hacker1 > lenght_hacker2) {
    console.log(`The driver has the longest name, it has", ${length_hacker1}, "characters.`);
}
else if (lenght_hacker2 > length_hacker1) {
    console.log(`It seems that the navigator has the longest name, it has", ${lenght_hacker2}, "characters.`);
}
else {console.log(`Wow, you both have equally long names,",${length_hacker1}, "characters!`); 
}
// Iteration 3: Loops

//3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".
let newDriversName; 
newDriversName = "J O H N"; 

//3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".
let navigator; 
navigator ="nhoJ"

//3.3 Depending on the lexicographic order of the strings, print:
//The driver's name goes first.
//Yo, the navigator goes first, definitely.
//What?! You both have the same name?

if (hacker1 > hacker2) {
    console.log(`The driver's name goes first.`)
}
else if (hacker1 < hacker2) {
    console.log(`Yo, the navigator goes first, definitely`)
}
else {
    console.log(`What?! You both have the same name?`)
}