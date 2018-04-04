/*
    Unique Letter count from string.
*/

uniqueLetterCount = (str) => {
    console.log(`Count unique letters in ${str}`);
    let uniqueChar = getUniqueChar(str);
    let count = 0;

    for(let i = 0; i < uniqueChar.length; i++) {
        count = getNumOccurences(str, uniqueChar.charAt(i));
        console.log(`${uniqueChar.charAt(i)} : ${count}`);
    }
    console.log(``);
}

getUniqueChar = (str) => {
    let uniqueChar = '';

    for(let i = 0; i < str.length; i++) {
        if(uniqueChar.indexOf(str.charAt(i)) === - 1) {
            uniqueChar += str.charAt(i);
        }
    }

    return uniqueChar;
}

getNumOccurences = (str, charToMatch) => {
    let count = 0;

    for(let i = 0; i < str.length; i++) {
        if(str.charAt(i) === charToMatch) {
            count++;
        }
    }

    return count;
}

uniqueLetterCount('abcda'); // a:2, b:1, c:1, d:1
uniqueLetterCount('abcabc'); // a:2, b:2, c:2
