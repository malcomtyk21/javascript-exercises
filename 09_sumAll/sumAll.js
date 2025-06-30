const sumAll = function(num1, num2) {

    if (num1 < 0 || num2 < 0)  {
        return "ERROR";
    } 

    if (!(Number.isInteger(num1) && Number.isInteger(num2))) {
        return "ERROR";
    }

    let sum = 0;
    let start = 0;
    let end = 0;
    if (num1 < num2) {
        start = num1;
        end = num2;
    } else {
        start = num2;
        end = num1;
    }

    for (start; start <= end; start++) {
        sum += start;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
