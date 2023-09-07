// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?
// From Developer Shaun
const cohort = "LEARN 2023"
// console.log(cohort.length)

// a) Your answer: 10. It will log the length of the string.
// b) Verify and explain: My answer is correct. It will log the length of the constant <cohort> that represents "LEARN 2023".

// --------------------2) What will this log?
// From Developer Dre
const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: It will log "o"
// b) Verify and explain: It did, and it is because the square brackets ([]) are asking for the character that is at the index 4 of the string, which is o 


// --------------------3) What will this log?
// From Developer Roniel
const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: Code should return "Ruby".
// b) Verify and explain: Output "Ruby" The code returned "Ruby" because <index> is assigned to the number 1 which is the second value in <languages>.

// --------------------4) What will this log?
// From Developer Adrian
const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: I believe the output will capitalize each array element since the .toUpperCase() method is an array and string built-in method.
// b) Verify and explain: My answer was incorrect because the .toUpperCase() method only works on string variables. However, if we
//wanted this method to work on an array we would have to use a built-in high order method known as "map" to return those elements capitalized.


// --------------------5) What will this log?
// From Developer Xe
const dataTypes = ["number", "string", "Boolean", "undefined"]
// console.log(typeof dataTypes.length)

// a) Your answer: i am scared to answer. NUMBER?
// b) Verify and explain: can i say i am just a geniiiiiiiiouuuuuuuse who-cant-spell, and that is why i know this!!! no? ok, well. It asked for the dataType.length (which by all of my calculations should return 3..... appperantly it will be 4, lets not dwell on this) anyyyyyywho, the typeof is a function that just returns what type of a value of anything you are asking for. YES!YES!YES !!!! no aplause!! thank you, thank you!!!