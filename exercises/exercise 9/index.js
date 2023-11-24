// faulty calculator

/*
This faulty calculator doses following:
---------------------------------------
1. It takes two numbers as input from the user
2. It performs wrong operations as follows:
    + --> -
    * --> +
    - --> /
    / --> **
    (It performs wrong operation 10% of the times)
*/
function calculator(num1,operation,num2){
    const errorPercentage = Math.random() * 100;
    if (errorPercentage <= 10){
        if(operation == "+"){
            console.log("Sum of " + num1 + " and " + num2 + " number " + " is: " + (num1 - num2));
        }else if(operation == "*"){
            console.log("Multiplication of " + num1 + " and " + num2 + " number " + " is: " + (num1 + num2));
        }else if(operation == "-"){
            console.log("Subtraction of " + num1 + " and " + num2 + " number " + " is: " + (num1 / num2));
        }else if(operation == "/"){
            console.log("Division of " + num1 + " and " + num2 + " number " + " is: " + (num1 ** num2));
        }
    }else{
        if(operation == "+"){
            console.log("Sum of " + num1 + " and " + num2 + " number " + " is: " + (num1 + num2));
        }else if(operation == "*"){
            console.log("Sum of " + num1 + " and " + num2 + " number " + " is: " + (num1 * num2));
        }else if(operation == "-"){
            console.log("Sum of " + num1 + " and " + num2 + " number " + " is: " + (num1 - num2));
        }else if(operation === "/"){
            console.log("Sum of " + num1 + " and " + num2 + " number " + " is: " + (num1 / num2));
        }
    }
}
calculator(50,"/",5);