//1. Define a function, as a function declaration, maxOfTwoNumbersthat takes two numbers as arguments and returns the largest of them. 
//If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.


function maxOfTwoNumbers(x, y) {
    if (x >= y) {
        return x;
    } else {
        return y;
    }

    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
}

console.log(maxOfTwoNumbers(3, 9));


//2. Define a function, as a function expression, maxOfThreethat takes three numbers as arguments and returns the largest of them. 
//Again, the Math.max method is not allowed.

const maxNum = function maxOfThreethat(x, y, z) {
    if (x >= y) {
        return x;
    } else if (y >= z) {
        return y;
    } else if (x >= z) {
        return x;
    } else {
        return z;
    }

}
console.log(maxNum(14, 52, 87));



//3. Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel,
// false otherwise.

let vowel = ['a', 'e', 'i', 'o', 'u']

function isCharAVowel(character) {
    if (character == 'a') {
        return true;

    } else if (character == 'e') {
        return true;

    } else if (character == 'i') {
        return true;

    } else if (character == 'o') {
        return true;

    } else if (character == 'u') {
        return true;

    } else {
        return false;
    }
}
console.log(isCharAVowel("u"))
//if assigned any word other than the vowel it will return false



// 4. Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. 
//For example, sumArray([2, 4, 5]);would return 11.

let theSum = 0
const sumArray = (arguments) => {

    arguments.forEach((num) => { theSum += num })
    return theSum
}
console.log(sumArray([10, 20, 30, 40, 50]))


// 5. Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product of those numbers. 
//For example, multiplyArray([2, 4, 5]);would return 40.

function multiplyArray(numArray) {
    var multiple = 1;
    for (let k = 0; k < numArray.length; k++) {
        multiple = multiple * numArray[k]
    }
    return multiple;

}
let numArray = [1, 10, 20, 30];
console.log(multiplyArray(numArray))


// 6. Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.

const numArgs = function (...args) {
    return args.length
}
console.log(`I am enjoying the class! `)


// 7. Define a function, as a function declaration, reverseStringthat takes a string, reverses the characters, and returns it. 
//For example, reverseString('rockstar');would return the string "ratskcor".

function reverseString(string) {
    let stringArray = string.split("");
    let reverseArray = [];

    for (let p = stringArray.length; p >= 0; --p) {

        reverseArray.push(stringArray[p]);
    }
    console.log(reverseArray.join(""));

}
reverseString("Hello");

// 8. Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument
// and returns the length of the longest string.

let longestStringInArray = function (givenArray) {
    let lengthArray = [];
    for (let b = 0; b < givenArray.length; b++) {
        lengthArray.push(givenArray[b].length);
    }
    console.log(Math.max(...lengthArray));
}

let givenArray = ["baby", "car", "babyonboard"];
longestStringInArray(givenArray);



// 9. Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments, and returns
// an array of the strings that are longer than the number passed in.
// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"].

function stringsLongerThan(arrStr, numberGiven) {
    let finalArray = [];
    for (let c = 0; c < arrStr.length; c++) {
        if (arrStr[c].length > numberGiven) {
            finalArray.push(arrStr[c]);
        }
    }
    console.log(finalArray);
}
arrStr = ["baby", "car", "babyonboard", "ca", "ar"];
stringsLongerThan(arrStr, 2); 
