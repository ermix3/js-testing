const isPalindrome = require('../scripts/isPalindrome');

test('isPalindrome',()=>{
    expect(isPalindrome('isi')).toBe(true);
    expect(isPalindrome('racecar')).toBe(true);
    expect(isPalindrome('55')).toBe(true);
    expect(isPalindrome('hello')).toBe(false);
});
