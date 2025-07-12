const fibonacci = function(num) {
    num = Number(num);
    if (num == 0) {
        return 0;
    } else if (num < 0) {
        return "OOPS";
    } else if (num <= 2) {
        return 1;
    }

    seq = [1, 1]

    for (let i = 2; i < num; i++) {
        seq.push(seq[i-1] + seq[i-2]);
    }

    return seq[seq.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
