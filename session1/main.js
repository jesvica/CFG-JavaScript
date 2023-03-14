// Exeercise 1.1
const myName = 'Jessica';
// Exercise 1.2
let myAge = 26;
// Exercise 1.3
const futureJob = 'web developer'
// Exercise 1.4
let aboutMe = `My name is ${myName}, I am ${myAge} years old and I will soon become a ${futureJob}!`
console.log(aboutMe)


// Exercise 2.0
let favouriteColours = ['red', 'pink', 'black', 'green', 'blue']
// Excercise 2.1
let newColour = prompt('Add another colour');
favouriteColours.push(newColour)
console.log(favouriteColours)

// Exercise 2.2
favouriteColours.pop()
console.log(favouriteColours)


// Homework Task
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
console.log(alphabet[7],alphabet[8]) // prints 'h i'

let substring2 = alphabet.slice(3,6)
console.log(substring2) // prints 'd e f'

let substring = alphabet.slice(13, 16)
console.log(substring, alphabet[4]) // prints n o p e