console.log("Hello World!")

// console.error()
// console.table()
// console.warn()
// console.time()
// console.timeEnd()

// Variable declaration
let name = 'luis'; // string
let age = 22; // age
let isSingle = true; // boolean
let hobbies = ['watching anime', 'playing video games', 'reading books'];
let jasonObject = { name: name, age: age, isSingle: isSingle, hobbies: hobbies};
let run = function() {
    console.log(name + ' is running.');
};

console.log('My name is ' + name, 'my age is '+ age, 'am I taken? ' + isSingle, "My hobbies are " + hobbies, run);

console.log(jasonObject);
let _let = 'something';
let _function = 'something';

console.log(typeof name);

// if else statement
// >, <, !, -, >=, <=, || // condition operator
// + - * / % // Math operands
if ( age === 25) console.log(`${age} == ${25}`); 
else console.log ( `${age} != ${25}`);

// 1 to 18 = bata pa
// 19 - 21 = college na
// 22 + = unemployed

if(age => 22) console.log('Im unemployed');
else if(age => 19 && age <= 21) console.log('college na');
else console.log('bata pa');

// TODO: Refactir the if else statement above to switch statement
switch("") {
    case 'condition':
        break;
    case 'condition':
        break;
        default:
};

let a = 0
//loops
while(a < 10){
    console.log('*')
    a++
};

for (let b = 0; b <= 10; b++){
    console.log('x'.repeat(b));
    if (b==5) break;
}

// TODO:
/*

*
**
***
****
*****
****
***
**
*

*/

hobbies.forEach((hobbies, i) => {
    if (i >= 1) return;
    console.log(hobbies, i)});

// Requiring / Importing JS files
const _functions = require("./functions.js");
_functions.consoleMessage('Log this message.')

function createDiamon (numberOfAsterisks){
    // if <numberOfAsterisk> is an odd number, add +1, to make it an even number
    // Loop to create diamond using <numberOfAsterisk>
}

// github repo <lastname>-<firstname>-basic-js