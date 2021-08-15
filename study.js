//.length
const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];

console.log(primeNumbers.length);
//=> 12



//Retrieving an array as whole and its elements
const winningNumbers = [32, 9, 14, 33, 48, 5];

function logWinningNumbers(numbers) {
  console.log("Winning numbers:", numbers);
}

logWinningNumbers(winningNumbers);
//=> Winning numbers: [ 32, 9, 14, 33, 48, 5 ]

console.log(winningNumbers[0]);
//=> 32
console.log(winningNumbers[3]);
//=> 33
console.log(winningNumbers[winningNumbers.length-1]);
//=> 5



//Updating the Value of an Element & Add an element at the end of an array
const planets = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Juptier",
    "Saturn",
    "Uranus",
    "Neptune",
];

//updating the value of an element
planets[4] = 'Jupiter'

console.log(planets);
//=> ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]


//adding an element at the end of an array
planets[planets.length] = 'Planet nine';

console.log(planets);
//=> ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune". "Planet nine"]



//Nested array
const egregiouslyNestedArray = [
    "How",
    ["deep", ["can", ["we", ["go", ["?"], "Pretty"], "dang"], "deep,"], "it"],
    "seems.",
];

console.log(egregiouslyNestedArray[0]);
//=> 'How'
console.log(egregiouslyNestedArray[1]);
//=> [ 'deep', [ 'can', [ 'we', [?], 'dang' ], 'deep,' ], 'it' ]
console.log(egregiouslyNestedArray[2]);
//=> 'seems.'

console.log(egregiouslyNestedArray[1][0]);
//=> 'deep'
console.log(egregiouslyNestedArray[1][1]);
//=> [ 'can', [ 'we', [ 'go', [?], 'Pretty' ], 'dang' ], 'deep,' ]
console.log(egregiouslyNestedArray[1][2]);
//=> 'it'

console.log(egregiouslyNestedArray[1][1][0]);
//=> 'can'
console.log(egregiouslyNestedArray[1][1][1]);
//=> [ 'we', [ 'go', [ '?' ], 'Pretty' ], 'dang' ]
console.log(egregiouslyNestedArray[1][1][2]);
//=> 'deep'

console.log(egregiouslyNestedArray[1][1][1][1][0]);
//=> 'go'
console.log(egregiouslyNestedArray[1][1][1][1][1]);
//=> ['?']
console.log(egregiouslyNestedArray[1][1][1][1][2]);
//=> 'Pretty'

console.log(egregiouslyNestedArray[1][1][1][1][1][0]);
//=> '?'

