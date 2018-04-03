/*
    Write a method that inputs a number of people and returns the number of total handshakes needed for everyone to shake everyone else's hand.
*/

numHandshakes = (numPeople) => {
        if(numPeople === 0) {
            return 0;
        } else if(numPeople === 1) {
            return 0;
        } else if(numPeople === 2) {
            return 1;
        } else if(numPeople === 3) {
            return 3;
        }

        return numHandshakes(numPeople - 1) + (numPeople - 1);
    }

    console.log(numHandshakes(2));
    console.log(numHandshakes(3));
    console.log(numHandshakes(4));
    console.log(numHandshakes(5));
    console.log(numHandshakes(10));
