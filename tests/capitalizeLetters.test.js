const capitalizeLetters = require('../scripts/capitalizeLetters');

test('capitalizeLetters',()=>{
    expect(capitalizeLetters('i love javascript')).toBe('I Love Javascript');
    expect(capitalizeLetters('reda ermich')).toBe('Reda Ermich');
    expect(capitalizeLetters('welcome in this repo.')).toBe('Welcome In This Repo.');
});
