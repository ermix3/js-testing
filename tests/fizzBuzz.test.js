const fizzBuzz = require('../scripts/fizzBuzz');


test('fizzBuzz',()=>{
    expect(fizzBuzz(3)).toBe('Fizz');
    expect(fizzBuzz(5)).toBe('Buzz');
    expect(fizzBuzz(30)).toBe('FizzBuzz');
    expect(fizzBuzz(56)).toBe(56);
});
