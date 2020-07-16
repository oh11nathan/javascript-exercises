const reverseString = function(word) {
    let reverse = "";
    for (i = 0; i < (word.length); i++) {
        let temp = word[i];
        reverse = reverse + word[word.length - 1 - i];
    }
    return reverse;
}

module.exports = reverseString
