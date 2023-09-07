// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Reminder: Ensure you are in the correct directory
// Run the file with the following command: $ node code - challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// Pseudo code:

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.
// From Developer Aleja
const temperature1 = 42
// Expected output: "42 is below boiling point"

const temperature2 = 350
// Expected output: "350 is above boiling point"

const temperature3 = 212
// Expected output: "212 is at boiling point"

// Pseudo code:
// name: funct1
// input: a number
// output: a string that says if the given number is below, above or at the boiling point
// process: conditionals and string interpolation 
  // please provide reason for using those methods

const funct1 = (temperature) =>{
    if (temperature < 212) {
        return `${temperature} is below boiling point`
    } else if (temperature > 212) {
        return `${temperature} is above boiling point`
    } else if (temperature === 212) {
        return `${temperature} is at boiling point`     
    } else {
        return 'Try again'
    }
}
console.log(funct1(temperature1))
console.log(funct1(temperature2))
console.log(funct1(temperature3))

// make sure to test all edge cases
console.log(funct1("temperature3"))


// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.
// From Developer Louis
const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

// Pseudo code:
// name : listCombined
// input : two arrays
// output : 1 number
// process .concat, .length,
// use .concat to combine the lists, then use .length to get the number of elements in the array

var listCombined = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns) // .concat makes a new variable that will be assigned to the new combined array list
console.log(listCombined.length) // .length output the total number of elements in the array
// output : 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.
// From Developer Mal
const currentCohort = "Foxtrot 2023"
// Expected output: "3202 tortxoF"

// Pseudo code:
// input: string, currentCohort
// output: string reversed
// process: built in methods .split, .reverse, and .join

var cohortArr = currentCohort.split("")
// console.log(cohortArr)
// output: 'F', 'o', 'x', 't',
//   'r', 'o', 't', ' ',
//   '2', '0', '2', '3'
var revArr = cohortArr.reverse()
// console.log(revArr)
// output: 
// '3', '2', '0', '2',
// ' ', 't', 'o', 'r',
// 't', 'x', 'o', 'F'
var revStr = revArr.join("")
console.log(revStr)
// output: "3202 tortxoF"

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.
// From Developer Tori
const numberOfConnections = [13, 34, 42, 5, 5, 10, 27, 42, 10]

const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

// Pseudo code:
// input: array, number
// output: the output is going to be the number of the index of the value number provided
// process: .indexOf will be used to show the index number of the wanted value


// console.log(numberOfConnections.indexOf(givenValue1))
// console.log(numberOfConnections.indexOf(givenValue2)) 
// output = 2, 5 

// I knew at first the .indexOf would give me the index number of the values but then I realized it gave me the first set of the index numbers and not the last set so I had a feeling there was a built-in method to help achieve my goal so I did some trial and error with the built-in methods.

console.log(numberOfConnections.lastIndexOf(givenValue1))
console.log(numberOfConnections.lastIndexOf(givenValue2))