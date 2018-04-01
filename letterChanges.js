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
