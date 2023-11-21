let openDoor = [];
const doorOperation = () => {
    let doorNumber = 1;
    for (let monkeyNo = 1; monkeyNo <= 10; monkeyNo ++){
        if(doorNumber % monkeyNo == 0){
            openDoor.push(doorNumber);
        }
        console.log(doorNumber);
        doorNumber ++;

        console.log("monkey:" + monkeyNo); 
    }
}
doorOperation();
console.log(openDoor)