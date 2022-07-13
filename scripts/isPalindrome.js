
// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
    // first method
    // return str.split('').reverse().join('')===str;

    // seconde method
    return str.split('').reduce((acc, curr) => curr+acc)===str;
}

module.exports= isPalindrome;