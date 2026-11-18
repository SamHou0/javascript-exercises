const palindromes = function (input) {
    const trimStr = input.replaceAll(" ", "")
        .replaceAll(",", "")
        .replaceAll(".", "")
        .replaceAll("'", "")
        .replaceAll("\"", "")
        .replaceAll("!", "")
        .replaceAll("?", "")
        .toLowerCase();
    return trimStr===trimStr.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
