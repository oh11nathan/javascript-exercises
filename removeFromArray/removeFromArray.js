const removeFromArray = function(...myArray) {
    let newArray = myArray[0];

    for (i = 1; i < myArray.length; i++) {
        for (j = 0; j < newArray.length; j++) {
            if (myArray[i] === newArray[j]) {
                newArray.splice(j, 1);
            }
        }
    }
    return newArray;
}

module.exports = removeFromArray
