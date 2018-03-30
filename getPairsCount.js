/*
    Given an array of integers, and a number ‘sum’, find the number of pairs of integers in the array whose sum is equal to ‘sum’.
*/

getPairsCount = (arr, sum) => {
    let countSum = 0;

    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] + arr[j] === sum) {
                countSum++;
            }
        }
    }

    console.log(`Number of pairs of integers in the [${arr}] whose sum is equal to ${sum} = ${countSum}`);
}

getPairsCount([1, 5, 7, -1], 6);
getPairsCount([1, 5, 7, -1, 5], 6);
getPairsCount([1, 1, 1, 1], 2);
getPairsCount([10 , 12, 10, 15, -1, 7, 6, 5, 4, 2, 1, 1, 1], 11);
