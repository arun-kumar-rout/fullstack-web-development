// loops

console.log("I am a tutorial on loops.");

// for loop
let a = 1;
for (let i = 0; i <= 100; i++) {
    console.log(i)
}

// for in loop
let obj = {
    name: "Arun",
    role: "Programmer",
    company: "CyberEvol"
}

for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key, element);
    }
}

// for (const iterator of object) {
    
// }

// for each loop
let array = ["arun","kumar","rout"]
array.forEach(element => {
    console.log(element);
});

// while loop
let i = 0;
while (i < 5){
    console.log(i);
    i ++
}

// do while loop
let arun = 20;
do {
    console.log(arun);
} while (i < 5);