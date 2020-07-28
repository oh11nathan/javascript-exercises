const palindromes = function(str) {
    str = str.trim();
    str = str.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "");
    str = str.toLowerCase();

    if (str.length == 1 || str.length == 0) {
        return true;
    }
    let palindrome = true;
    for (i = 0; i < str.length / 2; i++) {
        if (str[i] != str[str.length - i - 1]) {
            return palindrome = false;
        }
    }

    return palindrome;
}

module.exports = palindromes
