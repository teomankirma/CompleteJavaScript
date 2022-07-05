// Assignment #1
/*
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const descTurkiye = describeCountry("Turkiye", 84, "Ankara");
const descFinland = describeCountry("Finland", 6, "Helsinki");
const descGermany = describeCountry("Germany", 83, "Berlin");

console.log(descTurkiye, descFinland, descGermany);
*/

// Assignment 2
/*
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const percTurkiye = percentageOfWorld1(84);
const percFinland = percentageOfWorld1(6);
const percGermany = percentageOfWorld1(83);

console.log(percTurkiye, percFinland, percGermany);

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}

const percTurkiye2 = percentageOfWorld2(84);
const percFinland2 = percentageOfWorld2(6);
const percGermany2 = percentageOfWorld2(83);

console.log(percTurkiye2, percFinland2, percGermany2);
*/

// Assignment 3
/*
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const percTurkiye = percentageOfWorld1(84);
const percFinland = percentageOfWorld1(6);
const percGermany = percentageOfWorld1(83);

console.log(percTurkiye, percFinland, percGermany);

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}

const percTurkiye2 = percentageOfWorld2(84);
const percFinland2 = percentageOfWorld2(6);
const percGermany2 = percentageOfWorld2(83);

console.log(percTurkiye2, percFinland2, percGermany2);

const percentageOfWorld3 = population => (population / 7900) * 100;

const percTurkiye3 = percentageOfWorld2(84);
const percFinland3 = percentageOfWorld2(6);
const percGermany3 = percentageOfWorld2(83);

console.log(percTurkiye3, percFinland3, percGermany3);
*/

// Assignment 4
/*
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

function describePopulation(country, population) {
    const percentage = percentageOfWorld1(population);

    return `${country} has ${population} million people, which is about ${percentage}% of the world.`
}

console.log(describePopulation("China", 1441));
console.log(describePopulation("Turkiye", 84));
console.log(describePopulation("Finland", 6));
*/

// Assignment 5
/*
const populations = [84, 83, 1441, 6];
console.log(populations.length === 4);

const percentages = [
    percentageOfWorld(populations[0]),
    percentageOfWorld(populations[1]),
    percentageOfWorld(populations[2]),
    percentageOfWorld(populations[3])
];

console.log(percentages);

function percentageOfWorld(population) {
    return (population / 7900) * 100;
}
*/

// Assignment 6
/*
const neighbours = ["Greece", "Bulgaria", "Romania"];

const country = "Utopia";
neighbours.push(country);

neighbours.pop();

if (!neighbours.includes("Germany")) {
    console.log("Probably not a central European country :D");
}

neighbours[neighbours.indexOf("Romania")] = "Republic of Sweden";
console.log(neighbours);
*/

// Assignment 7
/*
const myCountry = {
    country: "Turkiye",
    capital: "Ankara",
    language: "Turkish",
    population: 84,
    neighbours: ["Greece", "Bulgaria", "Romania"]
};
*/

// Assignment 8
/*
const myCountry = {
    country: "Turkiye",
    capital: "Ankara",
    language: "Turkish",
    population: 84,
    neighbours: ["Greece", "Bulgaria", "Romania"]
};
myCountry.population = 86;
myCountry["population"] = 84;

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);
*/

// Assignment 9
/*
const myCountry = {
    country: "Turkiye",
    capital: "Ankara",
    language: "Turkish",
    population: 84,
    neighbours: ["Greece", "Bulgaria", "Romania"],

    describe: function () {
        return console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
    },

    checkIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true : false;
    }
};

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);
*/

// Assignment 10

for (let voter = 1; voter <= 50; voter++) {
    console.log(`Voter number ${voter} currently voting`);
}