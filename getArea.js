
/*
    Given a base and a height return the area of a triangle.
*/

getArea = (radius, height) => {
    console.log(`Given, radius = ${radius} height = ${height}`);

    let area = (radius * height) / 2;

    console.log(`The area is: ${area}`);
}

getArea(3, 8);
getArea(3, 5);
getArea(3.3, 8.8);
