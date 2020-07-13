function checkCuteNumber(numbers) {
    let evenNumbers = findAllEvenNumbers(numbers);
    if (evenNumbers.length == 0) {
        return false;
    }
    
    let largestEvenNumber = findLargestNumber(evenNumbers);
    return isGreaterThanTen(largestEvenNumber);
}

function findAllEvenNumbers(numbers) {
    return numbers.filter(e => e % 2 == 0);
}

function findLargestNumber(numbers) {
    return numbers.reduce((largest, e) => Math.max(largest, e), 0);
}

function isGreaterThanTen(number) {
    return number > 10;    
}

module.exports = {
    checkCuteNumber
}