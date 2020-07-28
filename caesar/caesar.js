const caesar = function(str, shift) {
    let res = "";
    let val;
    for (i = 0; i < str.length; i++) {
        if (str[i].search(/[,\.!@#$%^&\*]/g) != -1 || str[i] == " ") {
            val = str[i];
        } else {
            val = shiftChar(str[i], shift);
        }
        res = res + val;
    }
    return res;
}

function shiftChar(char, shift) {
    let code = char.charCodeAt();
    const A = "A".charCodeAt();
    const Z = "Z".charCodeAt();
    const a_ = "a".charCodeAt();
    const z_ = "z".charCodeAt();

    if (Math.abs(shift) > 26) {
        shift = shift % 26;
    }

    if (code >= A && code <= Z) {
        if (code + shift > Z) {
            char = String.fromCharCode(code + shift - Z + A - 1);
        } else if (code + shift < A) {
            char = String.fromCharCode(code + shift + Z - A + 1);
        } else {
            char = String.fromCharCode(code + shift);
        }
    } else if (code >= a_ && code <= z_) {
        if (code + shift > z_) {
            char = String.fromCharCode(code + shift - z_ + a_ - 1);
        } else if (code + shift < A) {
            char = String.fromCharCode(code + shift + z_ - a_ + 1);
        } else {
            char = String.fromCharCode(code + shift);
        }
    }
    return char;
}

module.exports = caesar
