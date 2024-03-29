"use strict";

// Activating Strict Mode
/*
let hasDriversLicence = false;
const passTest = true;

if (passTest) hasDriversLicence = true;
if (hasDriversLicence) console.log("I can drive :D");

// const interface = "Audio";
//const private = 534;
*/

// Functions
/*
function logger() {
    console.log("My name is Teoman");
}

// Calling / Running / Invoking Function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");
*/

// Function Declarations vs. Expressions
/*
// Function Declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);

// Function Expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);
*/

// Arrow Functions
/*
// Arrow Function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));
*/

// Functions Calling Other Functions
/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3));
*/

// Reviewing Functions
/*
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired 🎉`);
        return -1;
    }

}
console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike"));
*/

// Coding Challenge #1
/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;


function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= (avgKoalas) * 2) {
        return console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= (avgDolphins) * 2) {
        return console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        return console.log("No team wins!");
    }
}

checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27));
*/

// Introduction to Arrays
/*
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
// friends = ["Bob", "Alice"];

const firstName = "Teoman";
const teoman = [firstName, "Kirma", 2022 - 2002, "student", friends];
console.log(teoman);
console.log(teoman.length);

// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/

// Basic Array Operations (Methods)
/*
const friends = ["Michael", "Steven", "Peter"];

// Add elements
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped)
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
    console.log("You have a friend called Steven");
}
*/

// Coding Challenge #2
/*
function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    } else {
        return bill * 0.20;
    }
}

console.log(calcTip(100));

const bills = [125, 555, 44]
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);

const total = [tips[0] + 125, tips[1] + 555, tips[2] + 44];
console.log(total);
*/

// Introduction to Objects
/*
const teomanArray = [
    "Teoman",
    "Kirma",
    2022 - 2002,
    "student",
    ["Michael", "Peter", "Steven"]
];

const teoman = {
    firstName: "Teoman",
    lastName: "Kirma",
    age: 2022 - 2002,
    job: "student",
    friends: ["Michael", "Peter", "Steven"]
};
*/

// Dot vs. Bracket Notation
/*
const teoman = {
    firstName: "Teoman",
    lastName: "Kirma",
    age: 2022 - 2002,
    job: "student",
    friends: ["Michael", "Peter", "Steven"]
};
console.log(teoman);

console.log(teoman.lastName);
console.log(teoman["lastName"]);

const nameKey = "Name";
console.log(teoman["first" + nameKey]);
console.log(teoman["last" + nameKey]);

// console.log(teoman."last" + nameKey);

const interestedIn = prompt("What do you want to know about Teoman? Choose between firstName, lastName, age, job, and friends");

if (teoman[interestedIn]) {
    console.log(teoman[interestedIn]);
} else {
    console.log("Wrong request! Choose between firstName, lastName, age, job, and friends");
}

teoman.location = "Turkiye";
teoman["twitter"] = "@teomankirma";
console.log(teoman);

// Challenge
// "Teoman has 3 friends, and his best friend is called Michael"
console.log(`${teoman.firstName} has ${teoman.friends.length} friends, and his best friend is called ${teoman.friends[0]}`);
*/

// Object Methods
/*
const teoman = {
    firstName: "Teoman",
    lastName: "Kirma",
    birthYear: 2002,
    job: "student",
    friends: ["Michael", "Peter", "Steven"],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     // console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    // Challenge
    // "Jonas is a 46-year old teacher, and he has a driver's licence."
    getSummary: function () {
        return console.log(`${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's licence.`);
    }
};

console.log(teoman.calcAge());

console.log(teoman.age);
console.log(teoman.age);
console.log(teoman.age);

teoman.getSummary();
// console.log(teoman["calcAge"](2002));
*/

// Coding Challenge #3
/*
const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,

    callBMI: function () {
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI;
    }
}

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,

    callBMI: function () {
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI;
    }
}

console.log(mark.callBMI() > john.callBMI() ? `Mark's BMI (${mark.BMI}) is higher than John's (${john.BMI})` : `John's BMI (${john.BMI}) is higher than Mark's (${mark.BMI})`);
*/

// Iteration: The For Loop
/*
// console.log("Lifting weights repetition 1 🏋️‍♀️");
// console.log("Lifting weights repetition 2 🏋️‍♀️");
// console.log("Lifting weights repetition 3 🏋️‍♀️");
// console.log("Lifting weights repetition 4 🏋️‍♀️");
// console.log("Lifting weights repetition 5 🏋️‍♀️");
// console.log("Lifting weights repetition 6 🏋️‍♀️");
// console.log("Lifting weights repetition 7 🏋️‍♀️");
// console.log("Lifting weights repetition 8 🏋️‍♀️");
// console.log("Lifting weights repetition 9 🏋️‍♀️");
// console.log("Lifting weights repetition 10 🏋️‍♀️");

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 30; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}
*/

// Looping Arrays, Breaking and Continuing
/*
const teoman = [
    "Teoman",
    "Kirma",
    2022 - 2002,
    "student",
    ["Michael", "Peter", "Steven"],
    true
];
const types = [];

// console.log(jonas[0]);
// console.log(jonas[1]);
// ...
// console.log(jonas[4]);

for (let i = 0; i < teoman.length; i++) {
    // Reading from teoman array
    console.log(teoman[i], typeof teoman[i]);

    // Filling types array
    // types[i] = typeof teoman[i];
    types.push(typeof teoman[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < teoman.length; i++) {
    if (typeof teoman[i] !== "string") continue;

    console.log(teoman[i], typeof teoman[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < teoman.length; i++) {
    if (typeof teoman[i] === "number") break;

    console.log(teoman[i], typeof teoman[i]);
}
*/

// Looping Backwards and Loops In Loops
/*
const teoman = [
    "Teoman",
    "Kirma",
    2022 - 2002,
    "student",
    ["Michael", "Peter", "Steven"],
    true
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = teoman.length - 1; i >= 0; i--) {
    console.log(i, teoman[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-------- Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
    }
}
*/

// The While Loop
/*
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

let rep = 1;
while (rep <= 10) {
    // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log("Loop is about to end...");
}
*/

// Coding Challenge #4
/*
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    } else {
        return bill * 0.20;
    }
}

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    total.push(bills[i] + tips[i]);
}

console.log(bills);
console.log(tips);
console.log(total);

// Bonus
function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let average = sum / arr.length;
    return average;
}

console.log(calcAverage(total));
*/