
// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
    // first method
    return str.split(' ')
        .map((item) => item[0].toUpperCase() + item.slice(1))
        .join(' ');
}

module.exports = capitalizeLetters;