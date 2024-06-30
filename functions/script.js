"use strict";

///////////////////////////////////////
// Default Parameters
// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   // ES5
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking("LH123");
// createBooking("LH123", 2, 800);
// createBooking("LH123", 2);
// createBooking("LH123", 5);

// createBooking("LH123", undefined, 1000);

/* ---------- // How Passing Arguments Works: Values vs. Reference ---------- */
// const flight = "LH234";
// const jonas = {
//   name: "Jonas Schmedtmann",
//   passport: 24739479284,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = "LH999";
//   passenger.name = "Mr. " + passenger.name;

//   if (passenger.passport === 24739479284) {
//     alert("Checked in");
//   } else {
//     alert("Wrong passport!");
//   }
// };

// // checkIn(flight, jonas);
// // console.log(flight);
// // console.log(jonas);

// // Is the same as doing...
// // const flightNum = flight;
// // const passenger = jonas;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);

/* ----------------- Functions Accepting Callback Functions ----------------- */
// const oneWord = function (str) {
//   return str.replace(/ /g, "").toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(" ");
//   return [first.toUpperCase(), ...others].join(" ");
// };

// // Higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer("JavaScript is the best!", upperFirstWord);
// transformer("JavaScript is the best!", oneWord);

// // JS uses callbacks all the time
// const high5 = function () {
//   console.log("👋");
// };
// document.body.addEventListener("click", high5);
// ["Jonas", "Martha", "Adam"].forEach(high5);

/* -------------------- // Functions Returning Functions -------------------- */
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Steven');

// greet('Hello')('Jonas');
// */

// const greetArr = greeting => name => console.log(`${greeting} ${name}`);

/* ------------------------- // Coding Challenge #1 ------------------------- */

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

// const poll = {
//   question: "What is your favourite programming language?",
//   options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],

//   //this generater [0, 0, 0, 0].
//   answers: new Array(4).fill(0),

//   registerNewAnswer() {
//     //Get the answer
//     const answer = Number(
//       prompt(`${this.question}
//       \n${this.options.join("\n")}
//       \n(Write option number)`)
//     );
//     // check if answer type is number and if in asnwers indexes to increase the value at accurate position
//     typeof answer === "number" &&
//       answer <= this.answers.length &&
//       this.answers[answer]++;
//     //
//     // console.log(this.answers);
//     this.displayResults();
//     this.displayResults("string");
//   },

//   displayResults(type = "array") {
//     if (type === "array") {
//       console.log(this.answers);
//     } else if (type === "string") {
//       // ('Poll results are 13, 2, 4, 1');
//       console.log(`Poll results are ${this.answers.join(", ")}`);
//     }
//   },
// };
// //call method whenever the user clicks the "Answer poll" button.
// document
//   .querySelector(".poll")
//   .addEventListener("click", poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] }, "string");
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "string");
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

/* ------------- Immidietly Invoked Function Expressions (IIFE) ------------- */
// (pattern to )
const runOnce = function () {
  console.log("This will never run again");
};

runOnce();
runOnce();

(function () {
  console.log("This will never run again");
})();

// function value == function expression in parentese with () at the end to run it immidiatelly

// arrow function
// () => console.log("This will never run again");
// wrap in parentesese (formater is removing)
// (() => console.log("This will never run again"));
// add ()
(() => console.log("This will ALSO never run again"))();

// different scopes
(function () {
  const isPrivate = 22;
  console.log("This will never run again");
})();

//all data defined inside a scope is private // data is encapsulated inside that function

// other scopes are blocks with variables with let and const

{
  const isPrivate2 = 22;
  var notPrivate = 23;
}

console.log(isPrivate);
//not working
console.log(notPrivate);
//working

/* -------------------------------- CLOSURES -------------------------------- */

//closures created in certain situations
/*
const secureBooking = function () {
  let passangerCount = 0;

  return function () {
    passangerCount++;
    console.log(`${passangerCount} passengers`);
  };
};

const booker = secureBooking();
//calling secureBooking function will return anonymous function that will be stored as booker

booker();
// 1 passenger

booker();
// 2 passenger

booker();
// 3 passenger

// booker function has access to variables that were present at the time when function were created

// CLOSURE
// makes function remember all variables at birthplace

Any function always has access to the variable environment

of the execution context in which the function was created.



So a function always has access to the variable environment

of the execution context in which it was created,

even after a debt execution context is gone.


The closure is then basically this variable environment

attached to the function,

exactly as it was at the time and place

that the function was created.

console.dir(booker);
*/

// Examples:

/* ------------------------ reassigning the function ------------------------ */
/*
let f;

const g = function () {
  const a = 25;
  f = function () {
    console.log(a * 2);
  };
};

g();
f();

// f function has access to a even after g was executed

let f;

const g = function () {
  const a = 25;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 555;

  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);
// has access to a

// Re assigning f function
h();
f();

console.dir(f);
// has access to b but not to a anymore

/// example 2

/* ---------------------------------- timer --------------------------------- */
/*
const boardPassangers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are no boarding all ${n} passenger`);
    console.log(`There are 3 groups, each with ${perGroup} passangers`);
  }, wait * 1000);

  console.log(`will start boarding in ${wait} seconds`);
};

boardPassangers(180, 3);
*/
/* --------------------------- Coding Challenge #2 -------------------------- */

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

/*
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
*/
