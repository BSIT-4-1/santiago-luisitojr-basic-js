console.log("September 21 Activity")
let name = 'luis'; // string
let age = 23; // age
let isSingle = true; // boolean
let hobbies = ['watching anime', 'playing video games', 'reading books'];
//let jasonObject = { name: name, age: age, isSingle: isSingle, hobbies: hobbies};

// 1 to 18 = bata pa
// 19 - 21 = college na
// 22 + = unemployed
switch(true) {
    case (age >= 22):
        console.log("I'm an adult")
        break;
    case (age >= 19 && age <= 21):
        console.log("I'm a young adult")
        break;
    default:
        console.log("I'm young")
        break;
};

let diamond = createDiamond(5)

function createDiamond (numberOfAsterisks){
    n = numberOfAsterisks
    for (let i = 0; i <= n; i++){
        for (let c = 0; c <= n - i; c++){
            process.stdout.write(' ');
        }
        for (let d = 0; d < 2 * i - 1; d++){
            process.stdout.write('*');
        }
        console.log();
    }
    for (let i = 1; i <= n - 1; i++){
        for (let c = 0; c <= i; c++){
            process.stdout.write(' ');
        }
        for (let d = (n - i) * 2 - 1; d > 0; d--){
            process.stdout.write('*');
        }
        console.log();
    }
}