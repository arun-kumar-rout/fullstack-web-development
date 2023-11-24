function nice(name) {
  console.log("Hey " + name + " you are nice!");
  console.log("Hey " + name + " you are good!");
  console.log("Hey " + name + " your tshirt is nice!");
  console.log("Hey " + name + " your course is good too!");
}
nice("arun");
// console.log("Hey Harry you are nice!");
// console.log("Hey Harry you are good!");
// console.log("Hey Harry your tshirt is nice!");
// console.log("Hey Harry your course is good too!");


// parameters
function sum(a,b,c = 3){
    return a + b + c;
}
const result1 = sum(3,6);
const result2 = sum(89,65);
const result3 = sum(65,23,76);

console.log("The sum of these numbers is: " + result1);
console.log("The sum of these numbers is: " + result2);
console.log("The sum of these numbers is: " + result3);

// arrow function
const fun1 = (x) => {
    console.log("I am a arrow function " + x);
}
fun1(54);
fun1(58);
fun1(24);