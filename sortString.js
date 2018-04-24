/*
    "Write a function that given a list of strings, returns the list sorted
    based on the length of each string.
    i.e - [""programming"", ""simply"", ""rocks""] -> [""rocks"", ""simply"", ""programming""]"
*/

let sortString = (arrStr) => {

    // using default array.sort method
    let sortedArr = arrStr.sort((a,b) => {
        return a.length - b.length;
    })

    console.log(sortedArr);


    // without using default methods
    let sortedArr = [];

    for(let i = 0; i < arrStr.length; i++) {
        for(let j = i + 1; j < arrStr.length; j++) {
            if(arrStr[i].length > arrStr[j].length) {
                let temp = arrStr[i];
                arrStr[i] = arrStr[j];
                arrStr[j] = temp;
            }
        }
    }

    console.log(arrStr);
}

sortString(['programming', 'simply', 'rocks']);
