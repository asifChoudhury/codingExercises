/*
    Reverse an array without using the reverse method, without using a second array, and without duplicating any of the values.
*/

reverseArray = (array) => {
    let j = array.length - 1;
    let temp = 0;
    let middle = array.length / 2;

    for(let i = 0; i < middle; i++) {
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;

        j--;
    }

    console.log(array);
}

reverseArray([5,4,3,2,1]);
reverseArray([6,5,4,3,2,1]);
