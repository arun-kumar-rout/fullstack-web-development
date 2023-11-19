// Write a Javascript program to store name, phone number and marks of a student using object.

const student = {
  name: "Arun Kumar Rout",
  phoneNumber: 9090859915,
  marks: 505,
};

// Chapter 1 practice set
// 1. Create a variable of type string and try to add a number to it.
let string = "Demo string";
let number = 20;
console.log(string + number); // answer: Demo string20;

// Use typeof operator to find the datatype of the string in last question?

const addedString = string + number;
console.log(typeof addedString); // answer: string;

// Create a const onject in Javascript. Can you change it to hold a number later.
// using const student object
// student = 89;
console.log(student); // answer: error (Assignment to constant variable.)

// Try to add a new key to the const object in problem 3. Were you able to do it?
student.fatherName = "Raghunath Rout";
console.log(student); // answer: new key added succefully.

// Write a Js program to create a word-meaning dictonary of 5 words.
const dictonary = [
  {
    word: "hello",
    meaning: "used as a greeting or to begin a phone conversation.",
  },
  {
    word: "father",
    meaning: "a man in relation to his child or children.",
  },
  {
    word: "mother",
    meaning: "a woman in relation to her child or children.",
  },
  {
    word: "brother",
    meaning: "a man or boy in relation to other sons and daughters of his parents.",
  },
  {
    word: "sister",
    meaning: "a woman or girl in relation to other daughters and sons of her parents.",
  },
];
console.log(dictonary);
