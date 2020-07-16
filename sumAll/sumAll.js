const sumAll = function(begin, end) {
    if (typeof begin != "number" || typeof end != "number") {
        return "ERROR";
    } else if (begin < 0 || end < 0) {
        return "ERROR";
    } 
    let sum = 0;
    if (begin > end) {
        for (i = end; i <= begin; i++) {
            sum += i;
        }
    } else {
        for (i = begin; i <= end; i++) {
            sum += i;
        }
    }
    return sum;
}

module.exports = sumAll
