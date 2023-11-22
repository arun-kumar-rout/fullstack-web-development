// There are 100 monkey and 100 door. Each no. monkey (e.g: 1st monkey, 2nd monkey and so on..) will open / close the door which is devisible by its number. Find the last door / doors opened till last.
const totalMonkey = 100;
const totalDoors = 100;


let monkeyNumber;
let doorNumber;
let openDoors = [];
function Operation(){
    // each monkey term
    for (monkeyNumber = 1; monkeyNumber <= totalMonkey; monkeyNumber ++){
        console.log("Term of " + monkeyNumber + "th monkey");
        // each door logic
        for (doorNumber = 1; doorNumber <= totalDoors; doorNumber ++){
             // open or close logic for each monkey if door number is devisible by its table
            if(doorNumber % monkeyNumber == 0){
                if (openDoors.indexOf(doorNumber) == -1){
                    openDoors.push(doorNumber);
                }else{
                    let openDoorIndex = openDoors.indexOf(doorNumber);
                    openDoors.splice(openDoorIndex, 1)
                }
            }
        }
        console.log("Open Doors " + openDoors.sort());
        console.log("__________________________");
    }
}
Operation();

// output of the code will be: Open Doors 1, 4, 9, 16, 25, 36, 49, 64, 81, 100.