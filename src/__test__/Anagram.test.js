import { isAnagram } from '../../src/Anagram.js';

test('finds that king and kins are not anagrams', () => {
    expect(isAnagram('king','kins')).toBe(false); 
});
