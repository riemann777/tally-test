

function nextTallysticksNumber(stringN) {

    if (typeof stringN !== "string") {

        throw new Error("input must be of type String to avoid octal number literals")
    }

    let inputDigitsCount = getDigitsCount(stringN);

    if (inputDigitsCount < 1 || inputDigitsCount > 14) {

        throw new Error("input n must meet requirement: 0 < n < 15");
    }

    let trailingZeros = stringN.match('0+$'),
        firstNonZero,
        consecutiveNines,
        remaningDigits;

    let firstNonZeroIndex = (trailingZeros ? trailingZeros.index - 1 : stringN.length - 1);

    if (trailingZeros) {

        firstNonZero = stringN[firstNonZeroIndex];
    
    } else {

        firstNonZero = stringN[firstNonZeroIndex];
    }

    consecutiveNines = stringN.slice(0, firstNonZeroIndex).match('9+$');

    consecutiveNinesIndex = (consecutiveNines ? consecutiveNines["index"] : firstNonZeroIndex);

    remainingDigits = stringN.slice(0, consecutiveNinesIndex);

    if (!remainingDigits) {

        return -1;
    }

    let result;

    if (!!remainingDigits.length) {

        result =+ (parseInt(remainingDigits, 10) + 1).toString(); 
    }

    if (trailingZeros) {

        result += trailingZeros[0];
    }

    result += (parseInt(firstNonZero, 10) - 1).toString();

    if (consecutiveNines) {

        result += consecutiveNines[0]
    }

    return parseInt(result, 10);

}


// BASIC ACCEPTANCE TESTS
console.log("test pass for input \"123\": ", nextTallysticksNumber("123") === 132);
console.log("test pass for input \"0200\": ", nextTallysticksNumber("0200") === 1001);
console.log("test pass for input \"90\": ", nextTallysticksNumber("90") === -1);
console.log("test pass for input \"9999\": ", nextTallysticksNumber("9999") === -1);
console.log("test pass for input \"09999999999999\": ", nextTallysticksNumber("09999999999999") === 18999999999999);


function getDigitsCount(n) {

    return n.toString().length;
}