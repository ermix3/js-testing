const maxCharacter = require('../scripts/maxCharacter');

test('maxCharacter',()=>{
    expect(maxCharacter('javascript')).toBe('a');
    expect(maxCharacter('coding is good')).toBe('o');
});
