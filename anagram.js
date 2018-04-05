/*
    Find if 2 strings are anagrams of each other
*/

areAnagrams = (str, compareStr) => {
    // convert the strings to lowercase
    // alphbetize it
    // and trim whitespaces
    str = serialize(str);
    compareStr = serialize(compareStr);

    if(str !== compareStr) {
        return false;
    }

    return true;
}

serialize = (str) => {
    str = str.toLowerCase().split('').sort().join('').trim();
    return str;
}

console.log(`'cinema' and 'iceman' are anagrams of each other: ${areAnagrams('cinema', 'iceman')}`); //true
console.log(`'fairy tales' and 'rail safety' are anagrams of each other: ${areAnagrams('fairy tales', 'rail safety')}`); //true
console.log(`'Madam Curie' and 'Radium came' are anagrams of each other: ${areAnagrams('Madam Curie', 'Radium came')}`); //true
console.log(`'William Shakespeare' and 'I am a weakish speller' are anagrams of each other: ${areAnagrams('William Shakespeare', 'I am a weakish speller')}`); //true
