const palindromes = function (phrase) {
    let modifiedPhrase = (phrase.replace(/[^a-zA-Z]+/g, '')).toUpperCase();
    return modifiedPhrase.split("").reverse().join("") == modifiedPhrase;
};

// Do not edit below this line
module.exports = palindromes;
