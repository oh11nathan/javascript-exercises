const repeatString = function(word, number) {
    let newWord = "";
    if (number < 0) {
        return "ERROR";
    }
    for (i=0; i < number; i++) {
        newWord = newWord + word;
    }
    return newWord;
}

module.exports = repeatString
