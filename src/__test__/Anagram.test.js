import {
    getEmptyLetterProfile,
    getLettersProfile,
    sameLetterProfiles
} from '../../src/Anagram.js';

test('returns empty letterProfile', () => {
    expect(getEmptyLetterProfile()).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
});

test('letters profile for kinship is ()', () => {
    expect(getLettersProfile('kinship')).toEqual([0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]);
});

test('letters profile for kin ship is ()', () => {
    expect(getLettersProfile('kin ship')).toEqual([0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]);
});

test('letters profile for pinkish is same as for kinship', () => {
    expect(getLettersProfile('pinkish')).toEqual([0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]);
});

test('that kinship and pinkish have the same letter profiles', () => {
    let kinshipLetterProfile =  getLettersProfile('kinship');
    let pinkishLetterProfile =  getLettersProfile('pinkish');
    expect(sameLetterProfiles(kinshipLetterProfile, pinkishLetterProfile)).toEqual(true);
});

// Next, how to introduce a third word. Data structure?
// Can LetterProfiles be used as property names in an object?
