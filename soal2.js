function getEvenNumbers(num){
    if (num < 2) {
        return [];
    }

    let evenNumbers = [];
    for (let i = 2; i <= num; i+=2) {
        evenNumbers[evenNumbers.length] = i;
    }

    return evenNumbers;
}

console.log(getEvenNumbers(16));
// Output
// [ 2, 4, 6, 8, 10, 12, 14, 16 ];

console.log(getEvenNumbers(17));
// Output
// [ 2, 4, 6, 8, 10, 12, 14, 16 ];

console.log(getEvenNumbers(18));
// Output
// [ 2, 4, 6, 8, 10, 12, 14, 16, 18 ];

console.log(getEvenNumbers(1));
// Output
// [];