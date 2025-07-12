const palindromes = function (str) {
    output = ''
    for (let i = 0; i <= str.length; i++) {
        if (/^[a-zA-Z()0-9]$/.test(str[i])) {
            output += str[i]
        }
    }

    return output.toLowerCase() == output.toLowerCase().split('').reverse().join('')
};

// Do not edit below this line
module.exports = palindromes;
