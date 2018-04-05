/*
    Find index i from sorted array where a[i] = i.

    Given an array of n distinct integers sorted in ascending order,
    write a function that returns a Fixed Point in the array, if there
    is any Fixed Point present in array, else returns -1. Fixed Point
    in an array is an index i such that arr[i] is equal to i. Note that
    integers in array can be negative.
*/

indexEqualValue = (arr) => {
    console.log(`Given, Array = [${arr}]`);

    let result;
    for(let i = 0; i < arr.length ; i++) {
        if(arr[i] === i) {
            return i;
        }
    }

    return - 1;
}

console.log(indexEqualValue([-10, -5, 0, 3, 7])); // output 3
console.log(indexEqualValue([0, 2, 5, 8, 17])); // output 0
console.log(indexEqualValue([-10, -5, 3, 4, 7, 9])); // output -1
