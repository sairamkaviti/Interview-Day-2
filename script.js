// Arrays in JS :

let numbers = [11, 22, 33, 44, 55, 66, 77, 9];
console.log(numbers);
// shift,unshift,push,pop :
let unshiftArray = numbers.unshift(10,100);
console.log(numbers);
console.log(unshiftArray);
// filter:
let result = numbers.filter((ele,ind) => {
    return ele===ind;
})
console.log(result);
console.log(10 / 2);
console.log(10 % 2);

// slice and splice :

let primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19];
console.log(primeNumbers);
// let sliceArray = primeNumbers.slice(3, 6);
// console.log(sliceArray); 
// let splicedArray = primeNumbers.splice(2, 3,);
// console.log(splicedArray);//5,7,11

let splicedArr = primeNumbers.splice(1, 1, "a", "b", "c");
console.log(splicedArr);
console.log(primeNumbers);

// ----------//-------------//
// sort and fill:
let nums = [32, 765, 1, 90, 4322, 12, 456, 9];
console.log(nums);
let sortArr = nums.sort((a, b) => a - b);
console.log(nums);
console.log(sortArr);

let fillArr = nums.fill("abs",5);
console.log(fillArr);
console.log(nums);

// forEach and map :
let cricketers = ["kohli", "rohith", "dhoni", "sachin"];
let mapArray = cricketers.map((names) => {
    return names.toUpperCase();
})
console.log(mapArray);
console.log(cricketers);

let forEachArray = cricketers.forEach((ele) => {
    console.log(`[Shri.${ele}]`);
});

// Array Destructuring :

let vowels = ["a", "e", "i", "o", "u"];
let [first, second, third, fourth, fifth] = vowels;
console.log(first);
console.log(fourth);

// Objects Destructuring :
let mern = {
    frontEnd: "html,css,js,reactJS",
    backend: "nodeJS,expressJS",
    database:"mongoDB"
}
let { frontEnd, backend:Bend, DB } = mern;
console.log(frontEnd);
console.log(Bend);


console.log(0 && "sai"); //0
console.log("sai" && 0); //0
console.log(0 || "sai"); //sai
console.log("sai" || 0); //sai

// Functions :

// callback function :

function sum(a, b) {
    return a * b;
}

function display(x, y, operation) {
    let result = operation(x, y);
    console.log(result);
    return result;
}
display(10, 25, sum);

// arrow function
let add = (m,n) => {
    return m + n;
}
console.log(add(90,45))


function check() {
    var fname = "supriya";
    console.log(fname);
}
var fname = "sairam";
check();
    console.log(fname);

let a = [];
let b = a;
console.log(a == b);
console.log(a === b);


