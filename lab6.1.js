 function findSquareRoot(input) {
    let number = parseFloat(input);
    if (isNaN(number)) {
        return `Invalid input: "${input}" is not a number.`;
    }
    if (number < 0) {
        return `Cannot calculate square root of a negative number: ${input}`;
    }
    let result = Math.sqrt(number);
    return `Square root of ${input} is ${result}`;
}
console.log(findSquareRoot("2.25"));   
console.log(findSquareRoot("-4"));   
console.log(findSquareRoot("Hello"));  