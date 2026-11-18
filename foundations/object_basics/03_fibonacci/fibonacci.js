const fibonacci = function (index) {
    if (Number.isInteger(index) && index > 0) {
        let a = 1;
        let b = 1;
        if (index <= 2) return 1;
        for (let i = 0; i < index - 3; i++) {
            let c = a + b;
            a = b;
            b = c;
        }
        return a + b;
    } else {
        return "OOPS";
    }
};

// Do not edit below this line
module.exports = fibonacci;
