# JAVASCRIPT CHALLENGE #1 - FUNCTIONS

I will be posting some JS challenges on various levels. Feel free to take a part and write solution code. 

If you struggle you can always display console and see the output.

Live link to solution:

https://webski-dev.github.io/Headphones-ecommerce-page/


## CHALLENGE

There are two team - Dolphins and Koalas.

Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
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



### SOLUTION

You can view solution in console or just check it here :

```javascript
const calcAverage = (score) => score / 3;

const avgDolphins = calcAverage(44 + 23 + 71);
const avgKoalas = calcAverage(65 + 54 + 49);
// console.log(avgDolphins, avgKoalas);
const avgDolphins2 = calcAverage(85 + 54 + 41);
const avgKoalas2 = calcAverage(23 + 34 + 27);
// console.log(avgDolphins2, avgKoalas2);

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
```

### CREDITS

 This challenge is authored by Jonas Schmedtmann, assets prepared and solution coded by myself.
