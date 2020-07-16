const leapYears = function(year) {  
    isLeap = false;
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            return isLeap = true;
        } else {
            return isLeap;
        }
    } else {
        if ((year % 400) % 4== 0) {
            return isLeap = true;
        } else {
            return isLeap;
        }
    }
}

module.exports = leapYears
