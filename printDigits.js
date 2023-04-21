// Print Digits Backwards

// Difficulty
// Medium
// Concepts
// Logic, Math

// Write a function called printDigits that takes in one argument, num. When given an integer, the function should print (console.log) each digit in reverse order, starting with the ones place. Do not do this by just turning the number into a string and reversing it. Solve the problem using math. (Hint: look up while loops, and don’t forget about the % operator.)

// For example, if you were given 1 you should simply print 1, if given 314 you should print 4, 1, 3, and if given 12 you should print 2, 1:

// printDigits(1)
// // 1

// printDigits(314)
// // 4
// // 1
// // 3

// printDigits(12)
// // 2
// // 1



// ***************** CODE HERE  ***************** 

function printDigits(num){ // => function that takes in one parameter
    let rem = Math.abs(num); // => variable to hold value as it changes. Abs value in case negative
    while (rem%10 > 0){ // => loop to keep going while modulo result greater then zero
    console.log(rem % 10) // => print last value using modulo
    rem = Math.floor(rem/10) // => using Math floor to drop last value
    }
}


// printDigits(1)
// // 1

// printDigits(314)
// // 4
// // 1
// // 3

// printDigits(12)
// // 2
// // 1

printDigits(-3895)
// // 5
// // 9
// // 8
// // 3

console.log(Math.abs(3895))