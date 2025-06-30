const removeFromArray = function(array, ...removeItem) {
    result = [];

    for (let i = 0; i < array.length; i++) {
        if (!removeItem.includes(array[i])) {
            result.push(array[i]);
        }
    }

    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
