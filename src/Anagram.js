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

function sameLetterProfiles(firstLetterProfile, secondLetterProfile) {
    if (firstLetterProfile === secondLetterProfile) return true;
    if (firstLetterProfile == null || secondLetterProfile == null) return false;
    if (firstLetterProfile.length !== secondLetterProfile.length) return false;
  
    for (var index = 0; index < firstLetterProfile.length; ++index) {
      if (firstLetterProfile[index] !== secondLetterProfile[index]) return false;
    }
    return true;
}

function buildStoreOfLetterProfiles() {
    let storeOfLetterProfiles = {};
    const aLetterProfile = getLettersProfile('kinship');
    storeOfLetterProfiles[aLetterProfile] = ['kinship'];
    return storeOfLetterProfiles;
}

function addToStoreOfLetterProfiles() {
    let storeOfLetterProfiles = {};
    let aLetterProfile = getLettersProfile('kinship');
    storeOfLetterProfiles[aLetterProfile] = ['kinship'];

    let bLetterProfile = getLettersProfile('pinkish');
    if (sameLetterProfiles(aLetterProfile, bLetterProfile)) {
        storeOfLetterProfiles[aLetterProfile].push('pinkish');
    }
    return storeOfLetterProfiles;
}

function addToNonAnagramWordsToStoreOfLetterProfiles() {
    let storeOfLetterProfiles = {};
    
    let aLetterProfile = getLettersProfile('kinship');
    let bLetterProfile = getLettersProfile('inlets');

    storeOfLetterProfiles[aLetterProfile] = ['kinship'];
    storeOfLetterProfiles[bLetterProfile] = ['inlets'];

    return storeOfLetterProfiles;
}


function addThirdWordToStoreOfLetterProfiles() {
    let storeOfLetterProfiles = {};
    
    let aLetterProfile = getLettersProfile('kinship');
    let bLetterProfile = getLettersProfile('inlets');

    storeOfLetterProfiles[aLetterProfile] = ['kinship'];
    storeOfLetterProfiles[bLetterProfile] = ['inlets'];

    return storeOfLetterProfiles;
}

export {
    getEmptyLetterProfile,
    getLettersProfile,
    sameLetterProfiles,
    buildStoreOfLetterProfiles,
    addToStoreOfLetterProfiles,
    addToNonAnagramWordsToStoreOfLetterProfiles,
    addThirdWordToStoreOfLetterProfiles
};
