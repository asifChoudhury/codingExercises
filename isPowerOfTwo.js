/*
    Find if a number is a square of 2
*/

isPowerOfTwo = (num) => {
    if(num % 2 !== 0) {
        return false;
    }

    if(num === 2) {
        return true;
    }

    return isPowerOfTwo(num / 2);
}

//Test 
console.log(`Is 4 a power of two: ${isPowerOfTwo(4)}`);
console.log(`Is 25 a power of two: ${isPowerOfTwo(25)}`);
console.log(`Is 22 a power of two: ${isPowerOfTwo(22)}`);
console.log(`Is 64 a power of two: ${isPowerOfTwo(64)}`);
