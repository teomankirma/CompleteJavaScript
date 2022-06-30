// Assignment 1
/*
let country = "Turkiye";
let continent = "Europe";
let population = 84340000;

console.log(country);
console.log(continent);
console.log(population);
*/

// Assignment 2
/*
let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
*/

// Assignment 3
/*
language = "Turkish";
const country = "Turkiye";
const continent = "Europe";
const isIsland = false;
isIsland = true;
*/

// Assignment 4
/*
let population = 84340000;
const language = "Turkish";
const country = "Turkiye";
const continent = "Europe";

console.log(population / 2);
population++;
console.log(population);

let finlandPopulation = 6000000;
console.log(population > finlandPopulation);

let averagePopulation = 33000000;
console.log(population < averagePopulation);

let description = country + " is in " + continent + ", and its " + population + " people speak " + language;

console.log(description);
*/

// Assignment 5
/*
let population = 84340000;
const language = "Turkish";
const country = "Turkiye";
const continent = "Europe";

console.log(population / 2);
population++;
console.log(population);

let finlandPopulation = 6000000;
console.log(population > finlandPopulation);

let averagePopulation = 33000000;
console.log(population < averagePopulation);

const description = `${country} is in ${continent}, and its ${population} people speak ${language}`;
console.log(description);
*/

// Assignment 6
/*
console.log("9" - "5"); // 4
console.log("19" - "13" + "17"); // 617
console.log("19" - "13" + 17); // 23
console.log("123" < 57); // false
console.log(5 + 6 + "4" + 9 - 4 - 2); // 1143
*/

// Assignment 7
/*
const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));

if (numNeighbours === 1) {
    console.log("Only 1 border!");
} else if (numNeighbours > 1) {
    console.log("More than 1 border!");
} else {
    console.log("No borders!");
}
*/

// Assignment 8
/*
const country = "Turkiye";
const language = "Turkish";
const population = 84;
const isIsland = false;

if (language === "english" && population < 50 && !isIsland) {
    console.log(`You should live in ${country} :)`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}
*/

// Assignment 9
/*
const language = "turkish";

switch (language) {
    case "chinese":
    case "mandarin":
        console.log("MOST number of native speakers!");
        break;
    case "spanish":
        console.log("2nd place in number of native speakers");
        break;
    case "english":
        console.log("3rd place");
        break;
    case "hindi":
        console.log("Number 4");
        break;
    case "arabic":
        console.log("5th most spoken language");
        break;
    default:
        console.log("Great language too :D");
}
*/

// Assignment 10
/*
const country = "Turkiye";
const population = 84;
population > 33 ? console.log(`${country}'s population is above average.`) : console.log(`${country}'s population is below average.`);
*/