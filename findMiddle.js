/*
    Given 3 integers how do you find the middle number?
*/

findMiddle = ((num1, num2, num3) => {
    console.log(`Find middle from these numbers: ${num1} ${num2} ${num3}`);

    //using sort function
    let numArr = [num1, num2, num3];

    numArr.sort((x,y) => x - y).reverse();

    console.log(`Using Sort Function -  Largest: ${numArr[0]} Middle: ${numArr[1]} Smallest: ${numArr[2]}`);

    //without using sort function
    let numArray = [num1, num2, num3];
    largest = 0;
    smallest = 0;
    middle = 0;

    numArray.map(num => {
        sortNumers(num);
    })

    console.log(`Without Using Sort Function -  Largest: ${largest} Middle: ${middle} Smallest: ${smallest}`);

    //using array destructuring
    largest = 0;
    smallest = 0;
    middle = 0;

    [largest, middle, smallest] = sortNumers(num1);
    [largest, middle, smallest] = sortNumers(num2);
    [largest, middle, smallest] = sortNumers(num3);

    console.log(`Without Using Array -  Largest: ${largest} Middle: ${middle} Smallest: ${smallest}`);
    console.log(``);
});

sortNumers = (num) => {
    if(num > largest) {
        smallest = middle;
        middle = largest;
        largest = num;
    } else if(num < largest && num > middle) {
        smallest = middle;
        middle = num;
    } else {
        smallest = num;
    }

    return [largest, middle, smallest];
}

let largest = 0;
let smallest = 0;
let middle = 0;

//find the middle number
findMiddle(1,2,3);
findMiddle(1,3,2);
findMiddle(2,1,3);
findMiddle(2,3,1);
findMiddle(3,1,2);
findMiddle(3,2,1);
