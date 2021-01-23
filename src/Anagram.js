const isAnagram = (firstWord, secondWord) => {
    if (firstWord == null || secondWord == null) {
        return false;
    }
    if (firstWord === secondWord) {
        return true;
    }
    if (firstWord.length !== secondWord.length) {
        return false
    }
    return firstWord === secondWord;
}

const getEmptyLetterProfile = () => {
    const templateEmptyProfile = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    return [...templateEmptyProfile];
};

const alphaVal = (inputString) => inputString.toLowerCase().charCodeAt(0) - 97;

const getLettersProfile = (word) => {
    let letterProfile = getEmptyLetterProfile();
    let letterNumber = 0;
    for (let letter of word) {
        letterNumber = alphaVal(letter);
        if(0 <= letterNumber && letterNumber <= 26) {
            letterProfile[letterNumber]++;
        }
    }
    return letterProfile;
}

export { isAnagram, getEmptyLetterProfile, getLettersProfile };
