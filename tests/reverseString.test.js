const reverseString = require('../scripts/reverseString');

test('reverse `reda` to equal `ader`', () => {
	expect(reverseString('reda')).toBe('ader');
	expect(reverseString('bob')).toBe('bob');
	expect(reverseString('test')).toBe('tset');
});
