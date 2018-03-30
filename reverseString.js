/*
    Reverse String.
*/

reverseString = (str) => {
    console.log(`Reverse the String '${str}'`);
    console.log(``);

    // using String.split() and Array.reverse() methods
    console.log(`Using String.split() and Array.reverse() and Array.join() methods`);
    let result = str.split('').reverse().join('')

    console.log(`Reversed String: ${result}`);

    console.log(``);

    // without using the default methods
    console.log(`Without using default methods`);
    let reverseString = '';
    for(let i = str.length - 1; i >= 0; i--) {
        reverseString += str.charAt(i);
    }

    console.log(`Reversed String: ${reverseString}`);
}

reverseString("hello") // expect 'olleh'
