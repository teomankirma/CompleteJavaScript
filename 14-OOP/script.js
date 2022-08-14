"use strict";

// Constructor Functions and the new Operator
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const teoman = new Person("Teoman", 2002);
console.log(teoman);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1975);
console.log(matilda, jack);

console.log(teoman instanceof Person);

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

teoman.calcAge();
matilda.calcAge();

console.log(teoman.__proto__);
console.log(teoman.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(teoman));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototypeOfLinkedObjects

Person.prototype.species = "Homo Sapiens";
console.log(teoman.species, matilda.species);

console.log(teoman.hasOwnProperty("firstName"));
console.log(teoman.hasOwnProperty("species"));
