/*
    Solve for n factorial using recursion.
*/

factorial = (num) => {
    if(num === 1) {
        return 1;
    }

    return num * factorial(num - 1);
}
console.log(`Factorial of 4 = ${factorial(4)}`);
console.log(`Factorial of 8 = ${factorial(8)}`);
console.log(`Factorial of 10 = ${factorial(10)}`);
