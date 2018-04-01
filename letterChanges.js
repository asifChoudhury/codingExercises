/*
Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. 
Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). 
Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 
*/

letterChanges('fun!');

function letterChanges(str) {
    let result = '';

    for(let i = 0; i < str.length; i++) {
        if(!(/[0-9|\W]/).test(str.charAt(i))) {
            let letter = String.fromCharCode(str.charCodeAt(i) + 1);
            if((/[aeiou]/).test(letter)) {
                result += letter.toUpperCase();
            } else {
               result += letter;
            }
        } else {
            result += str.charAt(i);
        }
    }

    console.log(result);
}
