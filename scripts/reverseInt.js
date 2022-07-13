
// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseIntTest(521) === 125

function reverseInt(int) {
    // first method
    return +int.toString().split('').reverse().join('');
}

module.exports = reverseInt;