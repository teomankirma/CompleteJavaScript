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
