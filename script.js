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





