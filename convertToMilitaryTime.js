/*
    Give a string input with a time format of '5:30 PM', change the input to military time.
*/

convertToMilitaryTime = (time) => {
    console.log(`Convert ${time} to military time.`);

    let t = time.split(' ');
    let timeToConvert = t[0].split(':');
    let ampm = t[1];

    let hr = Number(timeToConvert[0]);
    let min = Number(timeToConvert[1]);

    if(ampm === 'AM') {
        if(hr === 12) {
            hr = '00';
        } else if(hr < 10) {
            hr = '0' + String(hr);
        }

        if(min < 10) {
            min = '0' + String(min);
        }
    } else if(ampm === 'PM') {
        if(hr !== 12) {
            hr += 12;
        } else if(hr < 10) {
            hr = '0' + String(hr);
        }

        if(min < 10) {
            min = '0' + String(min);
        }
    }

    console.log(`Military time is: ${hr}:${min}`);
    console.log(``);
}
convertToMilitaryTime('12:00 AM');
convertToMilitaryTime('2:00 AM');
convertToMilitaryTime('12:00 PM');
convertToMilitaryTime('02:00 PM');
convertToMilitaryTime('5:20 PM');
convertToMilitaryTime('8:30 AM');
