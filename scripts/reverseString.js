
// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
    // first method
    // return str.split('').reverse().join('');

    // seconde method
    return str.split('').reduce((acc, curr) => curr+acc);
}


module.exports = reverseString;