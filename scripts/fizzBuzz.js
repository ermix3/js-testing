
// CHALLENGE 6: FIZZBUZZ
// Write a program that take param. `n` integer. between 1 and 100. For multiple of 3, instead of the number, print "Fizz", for multiple of 5 print "Buzz". For number which are multiple of both 3 and 5, print "FizzBuzz".
function fizzBuzz(n) {
    // first method
    // if(n%3===0 && n%5===0){
    //     return 'FizzBuzz';
    // }else if(n%3===0){
    //     return 'Fizz';
    // }else if(n%5===0){
    //     return 'Buzz';
    // }else{
    //     return n;
    // }
    return (n % 3 === 0 && n % 5 === 0)
        ? 'FizzBuzz' : (n % 3 === 0)
        ? 'Fizz' : (n % 5 === 0)
        ? 'Buzz' : n;
}

module.exports = fizzBuzz;