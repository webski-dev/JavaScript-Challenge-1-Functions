"use strict";
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive 😊`);

// const interface = "Audio";

*/

/*

function logger() {
  console.log(`My name is Lukas`);
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const applejuice = fruitProcessor(5, 0);
console.log(applejuice);

const appleOrangeJuice = fruitProcessor(3, 2);
console.log(appleOrangeJuice);

*/

/*

// function declaration

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1987);
console.log(age1);

// function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

*/

/*

//Arrow function

const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1987);
console.log(age3);

const yearsUntilretirement = (birthyear, firstName) => {
  const age = 2024 - birthyear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilretirement(1987, "Lukas"));
console.log(yearsUntilretirement(1977, "Tomas"));

*/

/*

const cutPieces = function (fruit) {
  return fruit * 4;
};
function fruitProcessor(apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);

  const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
  return juice;
}

console.log(fruitProcessor(2, 3));


*/

/*
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilretirement = function (birthyear, firstName) {
  const age = calcAge(birthyear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
};

console.log(yearsUntilretirement(1987, "Lukas"));
console.log(yearsUntilretirement(1970, "Mike"));

*/

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently. Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
5. Ignore draws this time

Test data:
Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

Hints:
To calculate average of 3 values, add them all together and divide by 3
To check if number A is at least double number B, check for A ▶= 2 * B.
Apply this to the team's average scores 😉

*/

const calcAverage = (score) => score / 3;

const avgDolphins = calcAverage(44 + 23 + 71);
const avgKoalas = calcAverage(65 + 54 + 49);

const avgDolphins2 = calcAverage(85 + 54 + 41);
const avgKoalas2 = calcAverage(23 + 34 + 27);

console.log(avgDolphins, avgKoalas);
console.log(avgDolphins2, avgKoalas2);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas}) 🏆`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avg}) 🏆`);
  } else {
    console.log("No one wins 😒");
  }
}

checkWinner(avgDolphins, avgKoalas);
checkWinner(avgDolphins2, avgKoalas2);
