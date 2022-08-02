"use strict";

// Default Parameters
/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", 2);
createBooking("LH123", 5);

createBooking("LH123", undefined, 1000);
*/

// How Passing Arguments Works: Values vs. Reference
/*
const flight = "TK2310";
const teoman = {
  name: "Teoman Kirma",
  passport: 1233241231413,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "TK2311";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 1233241231413) {
    alert("Checked in");
  } else {
    alert("Wrong passport!");
  }
};

// checkIn(flight, teoman);
// console.log(flight);
// console.log(teoman);

// Is the same as doing...
// const flightNum = flight;
// const passenger = teoman;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(teoman);
checkIn(flight, teoman);
*/

// Functions Accepting Callback Functions
/*
const oneWord = function (str) {
  return str.replaceAll(" ", "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log("👋");
};
document.body.addEventListener("click", high5);

["Teoman", "Martha", "Adam"].forEach(high5);
*/

// Functions Returning Functions
/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");
greeterHey("Teoman");
greeterHey("Seker");

greet("Hello")("Teoman");

// Challenge
const greetArrow = (greeting) => (name) => console.log(`${greeting} ${name}`);

greetArrow("Hi")("teo");
*/

// The call and apply Methods
/*
const turkishAirlines = {
  airline: "Turkish Airlines",
  iataCode: "TK",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

turkishAirlines.book(2310, "Teoman Kirma");
turkishAirlines.book(2311, "John Smith");
console.log(turkishAirlines);

const anadoluJet = {
  airline: "Anadolu Jet",
  iataCode: "THY",
  bookings: [],
};

const book = turkishAirlines.book;

// Does NOT work
// book(2312, "Sarah Williams");

// Call method
book.call(anadoluJet, 2312, "Sarah Williams");
console.log(anadoluJet);

book.call(turkishAirlines, 2313, "Michael Jordan");
console.log(turkishAirlines);

const sunExpress = {
  airline: "Sun Express",
  iataCode: "SQ",
  bookings: [],
};

book.call(sunExpress, 7689, "Seker Kirma");

// Apply method
const flightData = [6598, "George Cooper"];
book.apply(sunExpress, flightData);
console.log(sunExpress);

book.call(sunExpress, ...flightData);

// The bind method
// book.call(anadoluJet, 2312, "Sarah Williams");

const bookAJ = book.bind(anadoluJet);
const bookTA = book.bind(turkishAirlines);
const bookSE = book.bind(sunExpress);

bookAJ(2314, "Lebron James");

const bookAJ2312 = book.bind(anadoluJet, 2312);
bookAJ2312("Teoman Kirma");
bookAJ2312("Martha Cooper");

// With Event Listeners
turkishAirlines.planes = 300;
turkishAirlines.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
// turkishAirlines.buyPlane();

document
  .querySelector(".buy")
  .addEventListener("click", turkishAirlines.buyPlane.bind(turkishAirlines));

// Partial Application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
*/

// Coding Challenge #1
/*
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const userInput = prompt(
      `${this.question} \n ${this.options.join("\n")}\n (Write option number)`
    );
    if (userInput >= 0 && userInput <= 3) this.answers[userInput] += 1;

    this.displayResults(this.answers);
  },
  displayResults(type) {
    if (typeof type === "array") {
      console.log(type);
    } else {
      console.log(`Poll results are ${this.answers.join(", ")}.`);
    }
  },
};

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, "string");
*/

// Immediately Invoked Function Expressions (IIFE)
/*
const runOnce = function () {
  console.log("This will never run again");
};
runOnce();

// IIFE
(function () {
  console.log("This will never run again");
  const isPrivate = 23;
})();

// console.log(isPrivate);

(() => console.log("This will ALSO never run again"))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
// console.log(isPrivate);
console.log(notPrivate);
*/

// Closures
/*
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);
*/

// More Closure Examples
/*
// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// Re-assigning f function
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);
*/

// Coding Challenge #2
/*
(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();
*/
