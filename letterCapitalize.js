/*
  Have the function LetterCapitalize(str) take the str parameter being passed 
  and capitalize the first letter of each word. Words will be separated by only 
  one space. 
*/

function letterCapitalize(str) { 
    let result = str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
    
    return result; 
}
letterCapitalize("hello world");
