/*
    Write a program that, given a number n, prints out all numbers from 1 to n (inclusive),
    each on their own line. But there's a catch:

    For numbers divisible by 3, instead of n, print Fizz
    For numbers divisible by 5, instead of n, print Buzz
    For numbers divisible by 3 and 5, just print FizzBuzz


    A. For example, given the input 1, your program should output: 1

    B. Another example, given the input 15, your program should output:

    1
    2
    Fizz
    4
    Buzz
    Fizz
    7
    8
    Fizz
    Buzz
    11
    Fizz
    13
    14
    FizzBuzz
 */

function fizzBuzz(n) {
    //Enter your code here
    let counter = 1;
    while(counter <= n) {
        if(counter % 3 === 0 && counter % 5 === 0) {
            console.log('FizzBuzz');
        } else if(counter % 3 === 0) {
            console.log('Fizz');
        } else if(counter % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(counter);
        }
        counter++;
    }
}

fizzBuzz(15);
