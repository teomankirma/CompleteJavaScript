// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/*
const x = "23";
if (x === 23) console.log(23);

const calcAge = (birthYear) => 2037 - birthYear;
console.log(calcAge(1991));
*/

/*
// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temperature amplitude? Answer: difference between highest and lowest temperature.
// - How to compute max and min temperatures?
// - What's a sensor error and what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temperatures array.
// - Find min value in temperatures array.
// - Subtract min from max (amplitude) and return it.

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 1; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays.

// 2) Breaking up into sub-problems
// - Merge 2 arrays.
*/

// Fixing a Bug
/*
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",

    // C) FIX
    // value: Number(prompt("Degrees celcius:")),
    value: 10,
  };

  // B) FIND
  console.table(measurement);

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY
console.log(measureKelvin());

// Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 1; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A) IDENTIFY
console.log(amplitudeBug);
*/

// Coding Challenge #1
/*
const temp1 = [17, 21, 23];
const temp2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days ... `;
  }
  console.log("..." + str);
}
printForecast(temp1);
printForecast(temp2);
*/
