/*
  Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. 
  If there are two or more words that are the same length, return the first word from the string with that length. 
  Ignore punctuation and assume sen will not be empty. 
*/

function LongestWord(sen) { 

    let string = sen.split(' ')
    
    string.map((str, index, stringArray) => {
        stringArray[index] = str.replace(/(\W)+/g, ' ')
    })
    
    let longestWord = ''
    string.map(str => {
        if(str.length > longestWord.length) {
            longestWord = str
        }
    })
    
    return longestWord;
         
}
   
// keep this function call here 
console.log(LongestWord('fun&& times!'));
