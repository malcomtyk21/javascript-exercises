const reverseString = function(string) {
    const splitStr = string.split("");

    const reverseArray = splitStr.reverse();

    const joinArray = reverseArray.join("");

    return joinArray
};

// Do not edit below this line
module.exports = reverseString;
