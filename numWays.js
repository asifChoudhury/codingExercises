/*
    Given a number N, find the number of different ways to write it as the sum of 1, 3 and 4.
*/

numWays = (n) => {
    if(n < 3) {
        return 1;
    } else if(n === 3) {
        return 2;
    }
    return numWays(n - 1) + numWays(n-3) + numWays(n-4);
}
console.log(numWays(5)); // outputs 6
